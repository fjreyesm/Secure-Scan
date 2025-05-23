const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const hibpController = require('../controllers/hibpController');

// Ruta para verificar un correo electrónico
router.post(
  '/check-email',
  [
    // Validación del correo electrónico
    body('email').isEmail().withMessage('Debe proporcionar un correo electrónico válido'),
    // Validación del consentimiento
    body('consent').isBoolean().equals('true').withMessage('Debe aceptar los términos de consentimiento')
  ],
  hibpController.checkEmail
);

module.exports = router;
