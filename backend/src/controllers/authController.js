const { validationResult } = require('express-validator');
const auth = require('../auth/auth');

// Controlador para registrar un nuevo usuario
exports.register = async (req, res) => {
  try {
    // Validar entrada
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array() 
      });
    }

    const { email, password, name } = req.body;

    // Llamar al servicio de autenticación para registrar al usuario
    const result = await auth.registerUser(email, password, name);

    // Si hay un error en el servicio
    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: result.message || 'Error al registrar el usuario'
      });
    }

    // Devolver resultado exitoso
    return res.status(201).json({
      success: true,
      data: result.data,
      message: result.message || 'Usuario registrado exitosamente'
    });

  } catch (error) {
    console.error('Error en authController.register:', error);
    return res.status(500).json({
      success: false,
      message: 'Error interno del servidor al registrar el usuario'
    });
  }
};

// Controlador para iniciar sesión
exports.login = async (req, res) => {
  try {
    // Validar entrada
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array() 
      });
    }

    const { email, password } = req.body;

    // Llamar al servicio de autenticación para iniciar sesión
    const result = await auth.loginUser(email, password);

    // Si hay un error en el servicio
    if (!result.success) {
      return res.status(401).json({
        success: false,
        message: result.message || 'Credenciales inválidas'
      });
    }

    // Devolver resultado exitoso
    return res.status(200).json({
      success: true,
      data: result.data,
      message: result.message || 'Inicio de sesión exitoso'
    });

  } catch (error) {
    console.error('Error en authController.login:', error);
    return res.status(500).json({
      success: false,
      message: 'Error interno del servidor al iniciar sesión'
    });
  }
};

// Controlador para cerrar sesión
exports.logout = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    // Llamar al servicio de autenticación para cerrar sesión
    const result = await auth.logoutUser(token);

    // Si hay un error en el servicio
    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: result.message || 'Error al cerrar sesión'
      });
    }

    // Devolver resultado exitoso
    return res.status(200).json({
      success: true,
      message: result.message || 'Sesión cerrada exitosamente'
    });

  } catch (error) {
    console.error('Error en authController.logout:', error);
    return res.status(500).json({
      success: false,
      message: 'Error interno del servidor al cerrar sesión'
    });
  }
};

// Controlador para obtener información del usuario actual
exports.getCurrentUser = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    // Llamar al servicio de autenticación para obtener información del usuario
    const result = await auth.getCurrentUser(token);

    // Si hay un error en el servicio
    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: result.message || 'Error al obtener información del usuario'
      });
    }

    // Devolver resultado exitoso
    return res.status(200).json({
      success: true,
      data: result.data,
      message: 'Información del usuario obtenida exitosamente'
    });

  } catch (error) {
    console.error('Error en authController.getCurrentUser:', error);
    return res.status(500).json({
      success: false,
      message: 'Error interno del servidor al obtener información del usuario'
    });
  }
};
