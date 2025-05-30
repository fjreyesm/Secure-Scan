const Notification = require('../models/Notification');
const { v4: uuidv4 } = require('uuid');

// Crear una nueva notificación
exports.createNotification = async (notificationData) => {
  try {
    // Asignar un UUID si no se proporciona
    if (!notificationData.id) {
      notificationData.id = uuidv4();
    }
    
    const notification = await Notification.create(notificationData);
    return notification;
  } catch (error) {
    console.error('Error al crear notificación:', error);
    throw error;
  }
};

// Obtener todas las notificaciones de un usuario (con paginación)
exports.getUserNotifications = async (userId, page = 1, limit = 10, isRead = null) => {
  try {
    const offset = (page - 1) * limit;
    const where = { userId };
    
    // Si se especifica isRead, filtrar por ese valor
    if (isRead !== null) {
      where.isRead = isRead;
    }
    
    const { count, rows } = await Notification.findAndCountAll({
      where,
      limit,
      offset,
      order: [['createdAt', 'DESC']]
    });
    
    return {
      notifications: rows,
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    };
  } catch (error) {
    console.error(`Error al obtener notificaciones del usuario ${userId}:`, error);
    throw error;
  }
};

// Obtener una notificación por ID
exports.getNotificationById = async (id) => {
  try {
    const notification = await Notification.findByPk(id);
    
    if (!notification) {
      throw new Error('Notificación no encontrada');
    }
    
    return notification;
  } catch (error) {
    console.error(`Error al obtener notificación con ID ${id}:`, error);
    throw error;
  }
};

// Marcar una notificación como leída
exports.markNotificationAsRead = async (id) => {
  try {
    const notification = await Notification.findByPk(id);
    
    if (!notification) {
      throw new Error('Notificación no encontrada');
    }
    
    await notification.update({ isRead: true });
    
    return notification;
  } catch (error) {
    console.error(`Error al marcar notificación con ID ${id} como leída:`, error);
    throw error;
  }
};

// Marcar todas las notificaciones de un usuario como leídas
exports.markAllNotificationsAsRead = async (userId) => {
  try {
    await Notification.update(
      { isRead: true },
      { where: { userId, isRead: false } }
    );
    
    return { message: 'Todas las notificaciones marcadas como leídas' };
  } catch (error) {
    console.error(`Error al marcar todas las notificaciones del usuario ${userId} como leídas:`, error);
    throw error;
  }
};

// Eliminar una notificación
exports.deleteNotification = async (id) => {
  try {
    const notification = await Notification.findByPk(id);
    
    if (!notification) {
      throw new Error('Notificación no encontrada');
    }
    
    await notification.destroy();
    
    return { message: 'Notificación eliminada correctamente' };
  } catch (error) {
    console.error(`Error al eliminar notificación con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar todas las notificaciones de un usuario
exports.deleteAllUserNotifications = async (userId) => {
  try {
    await Notification.destroy({
      where: { userId }
    });
    
    return { message: 'Todas las notificaciones eliminadas correctamente' };
  } catch (error) {
    console.error(`Error al eliminar todas las notificaciones del usuario ${userId}:`, error);
    throw error;
  }
};
