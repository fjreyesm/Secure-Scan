// Importar el servicio
const hibpService = require('../services/hibpService');

// Controlador para verificar email
exports.checkEmail = async (req, res) => {
  try {
    const { email, consent } = req.body;
    
    // Validación básica
    if (!email) {
      return res.status(400).json({ 
        success: false, 
        message: 'El correo electrónico es requerido' 
      });
    }
    
    if (!consent) {
      return res.status(400).json({ 
        success: false, 
        message: 'Debe aceptar los términos y condiciones' 
      });
    }
    
    // Llamar al servicio para verificar el email
    const result = await hibpService.checkEmailBreached(email);
    
    return res.status(200).json(result);
  } catch (error) {
    console.error('Error en hibpController.checkEmail:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error interno del servidor al verificar el correo electrónico' 
    });
  }
};
