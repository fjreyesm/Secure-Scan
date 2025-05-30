const Tool = require('../models/Tool');
const { v4: uuidv4 } = require('uuid');

// Crear una nueva herramienta
exports.createTool = async (toolData) => {
  try {
    // Asignar un UUID si no se proporciona
    if (!toolData.id) {
      toolData.id = uuidv4();
    }
    
    const tool = await Tool.create(toolData);
    return tool;
  } catch (error) {
    console.error('Error al crear herramienta:', error);
    throw error;
  }
};

// Obtener todas las herramientas (con filtros opcionales)
exports.getAllTools = async (filters = {}) => {
  try {
    const tools = await Tool.findAll({
      where: filters,
      order: [['name', 'ASC']]
    });
    
    return tools;
  } catch (error) {
    console.error('Error al obtener herramientas:', error);
    throw error;
  }
};

// Obtener herramientas activas
exports.getActiveTools = async (isPremium = null) => {
  try {
    const where = { isActive: true };
    
    // Si se especifica isPremium, filtrar por ese valor
    if (isPremium !== null) {
      where.isPremium = isPremium;
    }
    
    const tools = await Tool.findAll({
      where,
      order: [['name', 'ASC']]
    });
    
    return tools;
  } catch (error) {
    console.error('Error al obtener herramientas activas:', error);
    throw error;
  }
};

// Obtener una herramienta por ID
exports.getToolById = async (id) => {
  try {
    const tool = await Tool.findByPk(id);
    
    if (!tool) {
      throw new Error('Herramienta no encontrada');
    }
    
    return tool;
  } catch (error) {
    console.error(`Error al obtener herramienta con ID ${id}:`, error);
    throw error;
  }
};

// Obtener una herramienta por slug
exports.getToolBySlug = async (slug) => {
  try {
    const tool = await Tool.findOne({
      where: { slug }
    });
    
    if (!tool) {
      throw new Error('Herramienta no encontrada');
    }
    
    return tool;
  } catch (error) {
    console.error(`Error al obtener herramienta con slug ${slug}:`, error);
    throw error;
  }
};

// Actualizar una herramienta
exports.updateTool = async (id, toolData) => {
  try {
    const tool = await Tool.findByPk(id);
    
    if (!tool) {
      throw new Error('Herramienta no encontrada');
    }
    
    await tool.update(toolData);
    
    return tool;
  } catch (error) {
    console.error(`Error al actualizar herramienta con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar una herramienta
exports.deleteTool = async (id) => {
  try {
    const tool = await Tool.findByPk(id);
    
    if (!tool) {
      throw new Error('Herramienta no encontrada');
    }
    
    await tool.destroy();
    
    return { message: 'Herramienta eliminada correctamente' };
  } catch (error) {
    console.error(`Error al eliminar herramienta con ID ${id}:`, error);
    throw error;
  }
};
