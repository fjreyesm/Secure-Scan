const User = require('../models/User');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');

// Crear un nuevo usuario
exports.createUser = async (userData) => {
  try {
    // Generar hash de la contraseña
    if (userData.password) {
      const salt = await bcrypt.genSalt(10);
      userData.password = await bcrypt.hash(userData.password, salt);
    }
    
    // Asignar un UUID si no se proporciona
    if (!userData.id) {
      userData.id = uuidv4();
    }
    
    const user = await User.create(userData);
    return user;
  } catch (error) {
    console.error('Error al crear usuario:', error);
    throw error;
  }
};

// Obtener todos los usuarios (con paginación)
exports.getAllUsers = async (page = 1, limit = 10) => {
  try {
    const offset = (page - 1) * limit;
    
    const { count, rows } = await User.findAndCountAll({
      limit,
      offset,
      attributes: { exclude: ['password'] },
      order: [['createdAt', 'DESC']]
    });
    
    return {
      users: rows,
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    };
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw error;
  }
};

// Obtener un usuario por ID
exports.getUserById = async (id) => {
  try {
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] }
    });
    
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    
    return user;
  } catch (error) {
    console.error(`Error al obtener usuario con ID ${id}:`, error);
    throw error;
  }
};

// Obtener un usuario por email
exports.getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({
      where: { email },
      attributes: { exclude: ['password'] }
    });
    
    return user;
  } catch (error) {
    console.error(`Error al obtener usuario con email ${email}:`, error);
    throw error;
  }
};

// Actualizar un usuario
exports.updateUser = async (id, userData) => {
  try {
    const user = await User.findByPk(id);
    
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    
    // Si se actualiza la contraseña, generar hash
    if (userData.password) {
      const salt = await bcrypt.genSalt(10);
      userData.password = await bcrypt.hash(userData.password, salt);
    }
    
    await user.update(userData);
    
    // Excluir la contraseña de la respuesta
    const updatedUser = await User.findByPk(id, {
      attributes: { exclude: ['password'] }
    });
    
    return updatedUser;
  } catch (error) {
    console.error(`Error al actualizar usuario con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar un usuario
exports.deleteUser = async (id) => {
  try {
    const user = await User.findByPk(id);
    
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    
    await user.destroy();
    
    return { message: 'Usuario eliminado correctamente' };
  } catch (error) {
    console.error(`Error al eliminar usuario con ID ${id}:`, error);
    throw error;
  }
};

// Verificar email de usuario
exports.verifyUserEmail = async (token) => {
  try {
    const user = await User.findOne({
      where: { verificationToken: token }
    });
    
    if (!user) {
      throw new Error('Token de verificación inválido');
    }
    
    await user.update({
      emailVerified: true,
      verificationToken: null
    });
    
    return { message: 'Email verificado correctamente' };
  } catch (error) {
    console.error('Error al verificar email:', error);
    throw error;
  }
};

// Cambiar tipo de plan de usuario
exports.changeUserPlan = async (id, planType) => {
  try {
    const user = await User.findByPk(id);
    
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    
    await user.update({ planType });
    
    return { message: `Plan actualizado a ${planType}` };
  } catch (error) {
    console.error(`Error al cambiar plan de usuario con ID ${id}:`, error);
    throw error;
  }
};
