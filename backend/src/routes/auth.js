const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const authController = require('../controllers/authController');
const auth = require('../auth/auth');

// Ruta para registrar un nuevo usuario
router.post(
  '/register',
  [
    // Validación de campos
    body('email').isEmail().withMessage('Debe proporcionar un correo electrónico válido'),
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    body('name').notEmpty().withMessage('El nombre es requerido')
  ],
  authController.register
);

// Ruta para iniciar sesión
router.post(
  '/login',
  [
    // Validación de campos
    body('email').isEmail().withMessage('Debe proporcionar un correo electrónico válido'),
    body('password').notEmpty().withMessage('La contraseña es requerida')
  ],
  authController.login
);

// Ruta para cerrar sesión
router.post('/logout', auth.authenticateToken, authController.logout);

// Ruta para obtener información del usuario actual
router.get('/me', auth.authenticateToken, authController.getCurrentUser);

module.exports = router;
