const express = require('express');
const router = express.Router();
const detailedReportService = require('../services/detailedReportService');

/**
 * @route POST /api/reports/detailed
 * @desc Genera un informe detallado de filtraciones para un email
 * @access Private (requiere autenticación)
 */
router.post('/detailed', async (req, res) => {
  try {
    const { email, includePastes } = req.body;
    const userId = req.user ? req.user.id : null;

    if (!email) {
      return res.status(400).json({ error: 'El email es requerido' });
    }

    const result = await detailedReportService.generateDetailedReport(
      email, 
      userId, 
      includePastes || false
    );

    res.json({
      success: true,
      data: {
        verification: result.verification,
        token: result.token,
        fromCache: result.fromCache
      }
    });
  } catch (error) {
    console.error('Error al generar informe detallado:', error);
    res.status(500).json({ 
      error: 'Error al generar informe detallado', 
      message: error.message 
    });
  }
});

/**
 * @route GET /api/reports/detailed/:token
 * @desc Obtiene un informe detallado mediante token de acceso
 * @access Public
 */
router.get('/detailed/:token', async (req, res) => {
  try {
    const { token } = req.params;

    if (!token) {
      return res.status(400).json({ error: 'El token es requerido' });
    }

    const verification = await detailedReportService.getReportByToken(token);

    res.json({
      success: true,
      data: {
        verification
      }
    });
  } catch (error) {
    console.error('Error al obtener informe por token:', error);
    res.status(error.message.includes('inválido') ? 401 : 500).json({ 
      error: 'Error al obtener informe', 
      message: error.message 
    });
  }
});

/**
 * @route POST /api/reports/basic
 * @desc Genera un informe básico (gratuito) de filtraciones
 * @access Public
 */
router.post('/basic', async (req, res) => {
  try {
    const { email } = req.body;
    const userId = req.user ? req.user.id : null;

    if (!email) {
      return res.status(400).json({ error: 'El email es requerido' });
    }

    const result = await detailedReportService.generateBasicReport(email, userId);

    res.json({
      success: true,
      data: {
        verification: result.verification,
        fromCache: result.fromCache
      }
    });
  } catch (error) {
    console.error('Error al generar informe básico:', error);
    res.status(500).json({ 
      error: 'Error al generar informe básico', 
      message: error.message 
    });
  }
});

module.exports = router;
