// Servicio para gestionar informes detallados de filtraciones
const Verification = require('../models/Verification');
const Breach = require('../models/Breach');
const VerificationBreach = require('../models/VerificationBreach');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');
const axios = require('axios');

// Configuración de la API de HIBP
const HIBP_API_KEY = process.env.HIBP_API_KEY;
const HIBP_API_URL = process.env.HIBP_API_URL || 'https://haveibeenpwned.com/api/v3';

// Tiempo de caché en milisegundos (por defecto 7 días)
const CACHE_DURATION = process.env.CACHE_DURATION || 7 * 24 * 60 * 60 * 1000;

/**
 * Genera un informe detallado de filtraciones para un email
 * @param {string} email - Email a verificar
 * @param {string} userId - ID del usuario (opcional)
 * @param {boolean} includePastes - Incluir pastes en la verificación
 * @returns {Object} Resultado de la verificación con token de acceso
 */
exports.generateDetailedReport = async (email, userId = null, includePastes = false) => {
  try {
    // Verificar si existe un informe reciente en caché
    const cachedVerification = await Verification.findOne({
      where: {
        email,
        reportType: 'detailed',
        isCached: true,
        cachedAt: {
          [Op.gt]: new Date(Date.now() - CACHE_DURATION)
        }
      },
      include: [
        {
          model: Breach,
          through: { attributes: [] }
        }
      ],
      order: [['cachedAt', 'DESC']]
    });

    // Si existe un informe en caché válido, devolverlo
    if (cachedVerification) {
      return {
        verification: cachedVerification,
        token: generateAccessToken(cachedVerification.id),
        fromCache: true
      };
    }

    // Crear una nueva verificación
    const verificationId = uuidv4();
    const verification = await Verification.create({
      id: verificationId,
      userId,
      email,
      sourceId: await getHIBPSourceId(), // Obtener o crear el ID de la fuente HIBP
      status: 'pending',
      reportType: 'detailed',
      isCached: true,
      cachedAt: new Date()
    });

    // Consultar la API de HIBP para obtener las filtraciones
    const breachedAccounts = await fetchBreachedAccounts(email);
    
    // Para cada filtración, obtener detalles completos
    const breachDetails = [];
    for (const breach of breachedAccounts) {
      const detailedBreach = await fetchBreachDetails(breach.Name);
      breachDetails.push(detailedBreach);
    }

    // Consultar pastes si se solicita
    let pastesData = [];
    if (includePastes) {
      pastesData = await fetchPastes(email);
    }

    // Almacenar los resultados en la verificación
    await verification.update({
      status: 'completed',
      result: {
        breaches: breachDetails,
        pastes: pastesData,
        totalBreaches: breachDetails.length,
        totalPastes: pastesData.length,
        includedPastes: includePastes
      }
    });

    // Almacenar las filtraciones en la base de datos y crear relaciones
    for (const breachData of breachDetails) {
      // Buscar si la filtración ya existe en la base de datos
      let breach = await Breach.findOne({
        where: { name: breachData.Name }
      });

      // Si no existe, crearla
      if (!breach) {
        breach = await Breach.create({
          id: uuidv4(),
          name: breachData.Name,
          domain: breachData.Domain,
          breachDate: new Date(breachData.BreachDate),
          addedDate: new Date(breachData.AddedDate),
          description: breachData.Description,
          dataClasses: breachData.DataClasses,
          isVerified: breachData.IsVerified,
          isFabricated: breachData.IsFabricated,
          isSensitive: breachData.IsSensitive,
          isRetired: breachData.IsRetired,
          isSpamList: breachData.IsSpamList
        });
      }

      // Crear relación entre verificación y filtración
      await VerificationBreach.create({
        verificationId: verification.id,
        breachId: breach.id
      });
    }

    // Obtener la verificación completa con sus relaciones
    const completeVerification = await Verification.findByPk(verification.id, {
      include: [
        {
          model: Breach,
          through: { attributes: [] }
        }
      ]
    });

    // Generar token de acceso para consulta posterior
    const token = generateAccessToken(verification.id);

    return {
      verification: completeVerification,
      token,
      fromCache: false
    };
  } catch (error) {
    console.error('Error al generar informe detallado:', error);
    throw error;
  }
};

/**
 * Obtiene un informe detallado mediante token de acceso
 * @param {string} token - Token de acceso al informe
 * @returns {Object} Informe detallado
 */
exports.getReportByToken = async (token) => {
  try {
    // Verificar y decodificar el token
    const verificationId = verifyAccessToken(token);
    
    if (!verificationId) {
      throw new Error('Token de acceso inválido o expirado');
    }

    // Obtener la verificación
    const verification = await Verification.findByPk(verificationId, {
      include: [
        {
          model: Breach,
          through: { attributes: [] }
        }
      ]
    });

    if (!verification) {
      throw new Error('Informe no encontrado');
    }

    return verification;
  } catch (error) {
    console.error('Error al obtener informe por token:', error);
    throw error;
  }
};

/**
 * Genera un informe básico (gratuito) de filtraciones
 * @param {string} email - Email a verificar
 * @param {string} userId - ID del usuario (opcional)
 * @returns {Object} Resultado básico de la verificación
 */
exports.generateBasicReport = async (email, userId = null) => {
  try {
    // Verificar si existe un informe reciente en caché
    const cachedVerification = await Verification.findOne({
      where: {
        email,
        reportType: 'basic',
        isCached: true,
        cachedAt: {
          [Op.gt]: new Date(Date.now() - CACHE_DURATION)
        }
      },
      order: [['cachedAt', 'DESC']]
    });

    // Si existe un informe en caché válido, devolverlo
    if (cachedVerification) {
      return {
        verification: cachedVerification,
        fromCache: true
      };
    }

    // Crear una nueva verificación
    const verificationId = uuidv4();
    const verification = await Verification.create({
      id: verificationId,
      userId,
      email,
      sourceId: await getHIBPSourceId(),
      status: 'pending',
      reportType: 'basic',
      isCached: true,
      cachedAt: new Date()
    });

    // Consultar la API de HIBP para obtener las filtraciones (versión truncada)
    const breachedAccounts = await fetchBreachedAccountsTruncated(email);
    
    // Almacenar los resultados en la verificación
    await verification.update({
      status: 'completed',
      result: {
        breachNames: breachedAccounts.map(breach => breach.Name),
        totalBreaches: breachedAccounts.length
      }
    });

    return {
      verification,
      fromCache: false
    };
  } catch (error) {
    console.error('Error al generar informe básico:', error);
    throw error;
  }
};

/**
 * Obtiene o crea el ID de la fuente HIBP
 * @returns {string} ID de la fuente HIBP
 */
const getHIBPSourceId = async () => {
  // Implementación para obtener o crear el ID de la fuente HIBP
  // Esta función debería buscar en la tabla sources o crear un nuevo registro
  return 'hibp-source-id'; // Placeholder
};

/**
 * Consulta la API de HIBP para obtener las cuentas filtradas (versión completa)
 * @param {string} email - Email a verificar
 * @returns {Array} Lista de filtraciones
 */
const fetchBreachedAccounts = async (email) => {
  try {
    const response = await axios.get(`${HIBP_API_URL}/breachedaccount/${encodeURIComponent(email)}`, {
      headers: {
        'hibp-api-key': HIBP_API_KEY,
        'User-Agent': 'Security Platform'
      }
    });
    
    return response.data || [];
  } catch (error) {
    if (error.response && error.response.status === 404) {
      // No se encontraron filtraciones
      return [];
    }
    throw error;
  }
};

/**
 * Consulta la API de HIBP para obtener las cuentas filtradas (versión truncada)
 * @param {string} email - Email a verificar
 * @returns {Array} Lista de filtraciones truncadas
 */
const fetchBreachedAccountsTruncated = async (email) => {
  try {
    const response = await axios.get(`${HIBP_API_URL}/breachedaccount/${encodeURIComponent(email)}?truncateResponse=true`, {
      headers: {
        'hibp-api-key': HIBP_API_KEY,
        'User-Agent': 'Security Platform'
      }
    });
    
    return response.data || [];
  } catch (error) {
    if (error.response && error.response.status === 404) {
      // No se encontraron filtraciones
      return [];
    }
    throw error;
  }
};

/**
 * Consulta la API de HIBP para obtener detalles de una filtración específica
 * @param {string} breachName - Nombre de la filtración
 * @returns {Object} Detalles de la filtración
 */
const fetchBreachDetails = async (breachName) => {
  try {
    const response = await axios.get(`${HIBP_API_URL}/breach/${encodeURIComponent(breachName)}`, {
      headers: {
        'hibp-api-key': HIBP_API_KEY,
        'User-Agent': 'Security Platform'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error(`Error al obtener detalles de la filtración ${breachName}:`, error);
    throw error;
  }
};

/**
 * Consulta la API de HIBP para obtener pastes
 * @param {string} email - Email a verificar
 * @returns {Array} Lista de pastes
 */
const fetchPastes = async (email) => {
  try {
    const response = await axios.get(`${HIBP_API_URL}/pasteaccount/${encodeURIComponent(email)}`, {
      headers: {
        'hibp-api-key': HIBP_API_KEY,
        'User-Agent': 'Security Platform'
      }
    });
    
    return response.data || [];
  } catch (error) {
    if (error.response && error.response.status === 404) {
      // No se encontraron pastes
      return [];
    }
    throw error;
  }
};

/**
 * Genera un token de acceso para un informe
 * @param {string} verificationId - ID de la verificación
 * @returns {string} Token de acceso
 */
const generateAccessToken = (verificationId) => {
  // Crear un token con el ID de verificación y una fecha de expiración
  const payload = {
    id: verificationId,
    exp: Date.now() + CACHE_DURATION
  };
  
  // Firmar el token con una clave secreta
  const secret = process.env.JWT_SECRET || 'default-secret-key';
  const token = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(payload))
    .digest('hex');
  
  // Combinar el token con el payload codificado
  return Buffer.from(JSON.stringify({
    token,
    payload
  })).toString('base64');
};

/**
 * Verifica un token de acceso
 * @param {string} token - Token de acceso
 * @returns {string|null} ID de la verificación o null si el token es inválido
 */
const verifyAccessToken = (token) => {
  try {
    // Decodificar el token
    const decoded = JSON.parse(Buffer.from(token, 'base64').toString());
    const { token: hash, payload } = decoded;
    
    // Verificar que el token no haya expirado
    if (payload.exp < Date.now()) {
      return null;
    }
    
    // Verificar la firma del token
    const secret = process.env.JWT_SECRET || 'default-secret-key';
    const expectedHash = crypto
      .createHmac('sha256', secret)
      .update(JSON.stringify(payload))
      .digest('hex');
    
    if (hash !== expectedHash) {
      return null;
    }
    
    return payload.id;
  } catch (error) {
    console.error('Error al verificar token de acceso:', error);
    return null;
  }
};
