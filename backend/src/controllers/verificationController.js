const Verification = require('../models/Verification');
const Breach = require('../models/Breach');
const VerificationBreach = require('../models/VerificationBreach');
const { v4: uuidv4 } = require('uuid');

// Crear una nueva verificación
exports.createVerification = async (verificationData) => {
  try {
    // Asignar un UUID si no se proporciona
    if (!verificationData.id) {
      verificationData.id = uuidv4();
    }
    
    const verification = await Verification.create(verificationData);
    
    // Si hay filtraciones asociadas, crear las relaciones
    if (verificationData.breaches && Array.isArray(verificationData.breaches)) {
      const breachRelations = verificationData.breaches.map(breachId => ({
        verificationId: verification.id,
        breachId
      }));
      
      await VerificationBreach.bulkCreate(breachRelations);
    }
    
    return verification;
  } catch (error) {
    console.error('Error al crear verificación:', error);
    throw error;
  }
};

// Obtener todas las verificaciones (con paginación)
exports.getAllVerifications = async (page = 1, limit = 10, filters = {}) => {
  try {
    const offset = (page - 1) * limit;
    
    const { count, rows } = await Verification.findAndCountAll({
      where: filters,
      limit,
      offset,
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: Breach,
          through: { attributes: [] } // No incluir atributos de la tabla intermedia
        }
      ]
    });
    
    return {
      verifications: rows,
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    };
  } catch (error) {
    console.error('Error al obtener verificaciones:', error);
    throw error;
  }
};

// Obtener verificaciones por email
exports.getVerificationsByEmail = async (email, page = 1, limit = 10) => {
  try {
    const offset = (page - 1) * limit;
    
    const { count, rows } = await Verification.findAndCountAll({
      where: { email },
      limit,
      offset,
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: Breach,
          through: { attributes: [] }
        }
      ]
    });
    
    return {
      verifications: rows,
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    };
  } catch (error) {
    console.error(`Error al obtener verificaciones para el email ${email}:`, error);
    throw error;
  }
};

// Obtener una verificación por ID
exports.getVerificationById = async (id) => {
  try {
    const verification = await Verification.findByPk(id, {
      include: [
        {
          model: Breach,
          through: { attributes: [] }
        }
      ]
    });
    
    if (!verification) {
      throw new Error('Verificación no encontrada');
    }
    
    return verification;
  } catch (error) {
    console.error(`Error al obtener verificación con ID ${id}:`, error);
    throw error;
  }
};

// Actualizar una verificación
exports.updateVerification = async (id, verificationData) => {
  try {
    const verification = await Verification.findByPk(id);
    
    if (!verification) {
      throw new Error('Verificación no encontrada');
    }
    
    await verification.update(verificationData);
    
    // Si hay filtraciones asociadas, actualizar las relaciones
    if (verificationData.breaches && Array.isArray(verificationData.breaches)) {
      // Eliminar relaciones existentes
      await VerificationBreach.destroy({
        where: { verificationId: id }
      });
      
      // Crear nuevas relaciones
      const breachRelations = verificationData.breaches.map(breachId => ({
        verificationId: id,
        breachId
      }));
      
      await VerificationBreach.bulkCreate(breachRelations);
    }
    
    // Obtener la verificación actualizada con sus relaciones
    const updatedVerification = await Verification.findByPk(id, {
      include: [
        {
          model: Breach,
          through: { attributes: [] }
        }
      ]
    });
    
    return updatedVerification;
  } catch (error) {
    console.error(`Error al actualizar verificación con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar una verificación
exports.deleteVerification = async (id) => {
  try {
    const verification = await Verification.findByPk(id);
    
    if (!verification) {
      throw new Error('Verificación no encontrada');
    }
    
    await verification.destroy();
    
    return { message: 'Verificación eliminada correctamente' };
  } catch (error) {
    console.error(`Error al eliminar verificación con ID ${id}:`, error);
    throw error;
  }
};
