const SystemSetting = require('../models/SystemSetting');
const { v4: uuidv4 } = require('uuid');

// Crear una nueva configuración del sistema
exports.createSystemSetting = async (settingData) => {
  try {
    // Asignar un UUID si no se proporciona
    if (!settingData.id) {
      settingData.id = uuidv4();
    }
    
    const setting = await SystemSetting.create(settingData);
    return setting;
  } catch (error) {
    console.error('Error al crear configuración del sistema:', error);
    throw error;
  }
};

// Obtener todas las configuraciones del sistema
exports.getAllSystemSettings = async () => {
  try {
    const settings = await SystemSetting.findAll({
      order: [['settingKey', 'ASC']]
    });
    
    return settings;
  } catch (error) {
    console.error('Error al obtener configuraciones del sistema:', error);
    throw error;
  }
};

// Obtener una configuración del sistema por clave
exports.getSystemSettingByKey = async (settingKey) => {
  try {
    const setting = await SystemSetting.findOne({
      where: { settingKey }
    });
    
    if (!setting) {
      throw new Error('Configuración no encontrada');
    }
    
    return setting;
  } catch (error) {
    console.error(`Error al obtener configuración con clave ${settingKey}:`, error);
    throw error;
  }
};

// Obtener una configuración del sistema por ID
exports.getSystemSettingById = async (id) => {
  try {
    const setting = await SystemSetting.findByPk(id);
    
    if (!setting) {
      throw new Error('Configuración no encontrada');
    }
    
    return setting;
  } catch (error) {
    console.error(`Error al obtener configuración con ID ${id}:`, error);
    throw error;
  }
};

// Actualizar una configuración del sistema por clave
exports.updateSystemSettingByKey = async (settingKey, settingValue) => {
  try {
    const setting = await SystemSetting.findOne({
      where: { settingKey }
    });
    
    if (!setting) {
      throw new Error('Configuración no encontrada');
    }
    
    await setting.update({ settingValue });
    
    return setting;
  } catch (error) {
    console.error(`Error al actualizar configuración con clave ${settingKey}:`, error);
    throw error;
  }
};

// Actualizar una configuración del sistema por ID
exports.updateSystemSetting = async (id, settingData) => {
  try {
    const setting = await SystemSetting.findByPk(id);
    
    if (!setting) {
      throw new Error('Configuración no encontrada');
    }
    
    await setting.update(settingData);
    
    return setting;
  } catch (error) {
    console.error(`Error al actualizar configuración con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar una configuración del sistema
exports.deleteSystemSetting = async (id) => {
  try {
    const setting = await SystemSetting.findByPk(id);
    
    if (!setting) {
      throw new Error('Configuración no encontrada');
    }
    
    await setting.destroy();
    
    return { message: 'Configuración eliminada correctamente' };
  } catch (error) {
    console.error(`Error al eliminar configuración con ID ${id}:`, error);
    throw error;
  }
};
