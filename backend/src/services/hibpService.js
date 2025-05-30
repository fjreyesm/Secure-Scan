const axios = require('axios');
const redis = require('../config/redis'); // Importa tu cliente Redis configurado

const HIBP_BASE_URL = 'https://haveibeenpwned.com/api/v3';
const HIBP_API_KEY = process.env.HIBP_API_KEY; // Carga la API Key desde las variables de entorno

// Configuración de las cabeceras para las peticiones a HIBP
const HIBP_HEADERS = {
  'hibp-api-key': HIBP_API_KEY,
  'User-Agent': 'TuAplicacion/1.0 (prueba; franklinreyes2003@hotmail.com)' // Reemplaza con datos de tu app
};

/**
 * Consulta la API de HIBP para verificar si un email ha sido comprometido.
 * Utiliza Redis para cachear los resultados.
 * @param {string} email - El email a verificar.
 * @returns {Promise<Array>} - Un array con las brechas encontradas, o un array vacío si no hay o en caso de 404.
 */
async function checkEmail(email) {
  if (!HIBP_API_KEY) {
    console.error('CRITICAL: La HIBP_API_KEY no está configurada en las variables de entorno.');
    throw new Error('Servicio HIBP no disponible por falta de API Key.');
  }

  const cacheKey = `hibp:email:${encodeURIComponent(email)}`; // Clave de caché para este email

  try {
    // 1. Intentar obtener el resultado desde la caché de Redis
    const cachedResult = await redis.get(cacheKey);
    if (cachedResult) {
      console.log(`[HIBP Service] Cache HIT para el email: ${email}`);
      return JSON.parse(cachedResult);
    }

    console.log(`[HIBP Service] Cache MISS para el email: ${email}. Consultando API HIBP...`);

    // 2. Si no está en caché, realizar la petición a la API de HIBP
    const response = await axios.get(
      `${HIBP_BASE_URL}/breachedaccount/${encodeURIComponent(email)}`, // Asegúrate de encodear el email para la URL
      {
        headers: HIBP_HEADERS,
        params: {
          truncateResponse: 'false' // Para obtener la respuesta completa y no solo los nombres de las brechas
        }
      }
    );

    // 3. Guardar la respuesta exitosa en caché (lista de brechas)
    // Cachear por 1 hora para resultados positivos
    await redis.set(cacheKey, JSON.stringify(response.data), 'EX', 60 * 60 * 1); // 1 hora
    console.log(`[HIBP Service] Respuesta de API para ${email} guardada en caché.`);
    return response.data;

  } catch (error) {
    if (error.response && error.response.status === 404) {
      // El email no fue encontrado en ninguna brecha (esto es un resultado válido)
      console.log(`[HIBP Service] Email ${email} no encontrado en brechas (404). Cacheando resultado negativo.`);
      // Cachear el resultado "negativo" (array vacío) por un tiempo más corto para no sobrecargar la API
      await redis.set(cacheKey, JSON.stringify([]), 'EX', 60 * 15); // 15 minutos
      return []; // Devolver un array vacío indica que no se encontraron brechas
    }
    // Otros errores (problemas de red, API key inválida, error del servidor HIBP, etc.)
    console.error(`[HIBP Service] Error al consultar HIBP para ${email}: ${error.message}`);
    // Considera no cachear errores generales para que se reintente la petición más tarde
    throw error; // Relanzar el error para que sea manejado por el controlador de la ruta
  }
}

module.exports = { checkEmail };