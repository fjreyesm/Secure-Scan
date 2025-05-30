const Breach = require('../models/Breach');
const { v4: uuidv4 } = require('uuid');

// Crear una nueva filtración
exports.createBreach = async (breachData) => {
  try {
    // Asignar un UUID si no se proporciona
    if (!breachData.id) {
      breachData.id = uuidv4();
    }
    
    const breach = await Breach.create(breachData);
    return breach;
  } catch (error) {
    console.error('Error al crear filtración:', error);
    throw error;
  }
};

// Obtener todas las filtraciones (con paginación)
exports.getAllBreaches = async (page = 1, limit = 10, filters = {}) => {
  try {
    const offset = (page - 1) * limit;
    
    const { count, rows } = await Breach.findAndCountAll({
      where: filters,
      limit,
      offset,
      order: [['breachDate', 'DESC']]
    });
    
    return {
      breaches: rows,
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    };
  } catch (error) {
    console.error('Error al obtener filtraciones:', error);
    throw error;
  }
};

// Obtener una filtración por ID
exports.getBreachById = async (id) => {
  try {
    const breach = await Breach.findByPk(id);
    
    if (!breach) {
      throw new Error('Filtración no encontrada');
    }
    
    return breach;
  } catch (error) {
    console.error(`Error al obtener filtración con ID ${id}:`, error);
    throw error;
  }
};

// Obtener filtraciones por dominio
exports.getBreachesByDomain = async (domain, page = 1, limit = 10) => {
  try {
    const offset = (page - 1) * limit;
    
    const { count, rows } = await Breach.findAndCountAll({
      where: { domain },
      limit,
      offset,
      order: [['breachDate', 'DESC']]
    });
    
    return {
      breaches: rows,
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    };
  } catch (error) {
    console.error(`Error al obtener filtraciones para el dominio ${domain}:`, error);
    throw error;
  }
};

// Actualizar una filtración
exports.updateBreach = async (id, breachData) => {
  try {
    const breach = await Breach.findByPk(id);
    
    if (!breach) {
      throw new Error('Filtración no encontrada');
    }
    
    await breach.update(breachData);
    
    return breach;
  } catch (error) {
    console.error(`Error al actualizar filtración con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar una filtración
exports.deleteBreach = async (id) => {
  try {
    const breach = await Breach.findByPk(id);
    
    if (!breach) {
      throw new Error('Filtración no encontrada');
    }
    
    await breach.destroy();
    
    return { message: 'Filtración eliminada correctamente' };
  } catch (error) {
    console.error(`Error al eliminar filtración con ID ${id}:`, error);
    throw error;
  }
};
