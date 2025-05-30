const ApiLog = require('../models/ApiLog');
const { v4: uuidv4 } = require('uuid');

// Crear un nuevo registro de log de API
exports.createApiLog = async (logData) => {
  try {
    // Asignar un UUID si no se proporciona
    if (!logData.id) {
      logData.id = uuidv4();
    }
    
    const apiLog = await ApiLog.create(logData);
    return apiLog;
  } catch (error) {
    console.error('Error al crear registro de log de API:', error);
    throw error;
  }
};

// Obtener todos los logs de API (con paginación y filtros)
exports.getAllApiLogs = async (page = 1, limit = 20, filters = {}) => {
  try {
    const offset = (page - 1) * limit;
    
    const { count, rows } = await ApiLog.findAndCountAll({
      where: filters,
      limit,
      offset,
      order: [['createdAt', 'DESC']]
    });
    
    return {
      logs: rows,
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    };
  } catch (error) {
    console.error('Error al obtener logs de API:', error);
    throw error;
  }
};

// Obtener logs de API por usuario
exports.getApiLogsByUser = async (userId, page = 1, limit = 20) => {
  try {
    const offset = (page - 1) * limit;
    
    const { count, rows } = await ApiLog.findAndCountAll({
      where: { userId },
      limit,
      offset,
      order: [['createdAt', 'DESC']]
    });
    
    return {
      logs: rows,
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    };
  } catch (error) {
    console.error(`Error al obtener logs de API para el usuario ${userId}:`, error);
    throw error;
  }
};

// Obtener logs de API por endpoint
exports.getApiLogsByEndpoint = async (endpoint, page = 1, limit = 20) => {
  try {
    const offset = (page - 1) * limit;
    
    const { count, rows } = await ApiLog.findAndCountAll({
      where: { endpoint },
      limit,
      offset,
      order: [['createdAt', 'DESC']]
    });
    
    return {
      logs: rows,
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    };
  } catch (error) {
    console.error(`Error al obtener logs de API para el endpoint ${endpoint}:`, error);
    throw error;
  }
};

// Obtener un log de API por ID
exports.getApiLogById = async (id) => {
  try {
    const apiLog = await ApiLog.findByPk(id);
    
    if (!apiLog) {
      throw new Error('Log de API no encontrado');
    }
    
    return apiLog;
  } catch (error) {
    console.error(`Error al obtener log de API con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar logs de API antiguos (por fecha)
exports.deleteOldApiLogs = async (olderThan) => {
  try {
    const result = await ApiLog.destroy({
      where: {
        createdAt: {
          [Op.lt]: olderThan
        }
      }
    });
    
    return { 
      message: 'Logs antiguos eliminados correctamente',
      count: result
    };
  } catch (error) {
    console.error('Error al eliminar logs de API antiguos:', error);
    throw error;
  }
};
