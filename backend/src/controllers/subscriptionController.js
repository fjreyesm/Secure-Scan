const Subscription = require('../models/Subscription');
const { v4: uuidv4 } = require('uuid');

// Crear una nueva suscripción
exports.createSubscription = async (subscriptionData) => {
  try {
    // Asignar un UUID si no se proporciona
    if (!subscriptionData.id) {
      subscriptionData.id = uuidv4();
    }
    
    const subscription = await Subscription.create(subscriptionData);
    return subscription;
  } catch (error) {
    console.error('Error al crear suscripción:', error);
    throw error;
  }
};

// Obtener todas las suscripciones (con paginación y filtros)
exports.getAllSubscriptions = async (page = 1, limit = 20, filters = {}) => {
  try {
    const offset = (page - 1) * limit;
    
    const { count, rows } = await Subscription.findAndCountAll({
      where: filters,
      limit,
      offset,
      order: [['createdAt', 'DESC']]
    });
    
    return {
      subscriptions: rows,
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    };
  } catch (error) {
    console.error('Error al obtener suscripciones:', error);
    throw error;
  }
};

// Obtener suscripciones por usuario
exports.getUserSubscriptions = async (userId) => {
  try {
    const subscriptions = await Subscription.findAll({
      where: { userId },
      order: [['createdAt', 'DESC']]
    });
    
    return subscriptions;
  } catch (error) {
    console.error(`Error al obtener suscripciones del usuario ${userId}:`, error);
    throw error;
  }
};

// Obtener suscripción activa de un usuario
exports.getActiveUserSubscription = async (userId) => {
  try {
    const subscription = await Subscription.findOne({
      where: { 
        userId,
        status: 'active',
        endDate: {
          [Op.gt]: new Date()
        }
      }
    });
    
    return subscription;
  } catch (error) {
    console.error(`Error al obtener suscripción activa del usuario ${userId}:`, error);
    throw error;
  }
};

// Obtener una suscripción por ID
exports.getSubscriptionById = async (id) => {
  try {
    const subscription = await Subscription.findByPk(id);
    
    if (!subscription) {
      throw new Error('Suscripción no encontrada');
    }
    
    return subscription;
  } catch (error) {
    console.error(`Error al obtener suscripción con ID ${id}:`, error);
    throw error;
  }
};

// Actualizar una suscripción
exports.updateSubscription = async (id, subscriptionData) => {
  try {
    const subscription = await Subscription.findByPk(id);
    
    if (!subscription) {
      throw new Error('Suscripción no encontrada');
    }
    
    await subscription.update(subscriptionData);
    
    return subscription;
  } catch (error) {
    console.error(`Error al actualizar suscripción con ID ${id}:`, error);
    throw error;
  }
};

// Cancelar una suscripción
exports.cancelSubscription = async (id) => {
  try {
    const subscription = await Subscription.findByPk(id);
    
    if (!subscription) {
      throw new Error('Suscripción no encontrada');
    }
    
    await subscription.update({
      status: 'canceled'
    });
    
    return subscription;
  } catch (error) {
    console.error(`Error al cancelar suscripción con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar una suscripción
exports.deleteSubscription = async (id) => {
  try {
    const subscription = await Subscription.findByPk(id);
    
    if (!subscription) {
      throw new Error('Suscripción no encontrada');
    }
    
    await subscription.destroy();
    
    return { message: 'Suscripción eliminada correctamente' };
  } catch (error) {
    console.error(`Error al eliminar suscripción con ID ${id}:`, error);
    throw error;
  }
};
