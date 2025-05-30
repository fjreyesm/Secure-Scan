const express = require('express');
const { checkEmail } = require('../services/hibpService'); // Importa la función del servicio

const router = express.Router();

// GET /api/hibp/email/:email
router.get('/email/:email', async (req, res, next) => {
  const { email } = req.params;

  // Validación básica del formato del email (puedes usar una librería más robusta como validator.js)
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Formato de email inválido o no proporcionado.'
    });
  }

  try {
    const breaches = await checkEmail(email);
    res.status(200).json({
      success: true,
      email: email,
      pwned: breaches.length > 0,
      breaches_count: breaches.length,
      breaches: breaches
    });
  } catch (error) {
    // Pasa el error al manejador de errores global de Express
    // El error ya debería haber sido logueado por el servicio HIBP
    next(error);
  }
});

module.exports = router;