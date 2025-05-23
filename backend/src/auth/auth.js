const { createClient } = require('@supabase/supabase-js');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Configuración de Supabase
const supabaseUrl = process.env.SUPABASE_URL || 'https://example.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY || 'demo-key-for-development';
const jwtSecret = process.env.JWT_SECRET || 'your-secret-key-for-development';

// Cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// Función para registrar un nuevo usuario
exports.registerUser = async (email, password, name) => {
  try {
    // En un entorno de producción, usaríamos la API real de Supabase
    // Para desarrollo/demo, simulamos la respuesta
    
    // Simulación de respuesta para desarrollo
    if (email.includes('error')) {
      return {
        success: false,
        message: 'Error al registrar el usuario. El correo ya está en uso.'
      };
    }
    
    // Simular registro exitoso
    return {
      success: true,
      data: {
        user: {
          id: `user_${Math.random().toString(36).substr(2, 9)}`,
          email,
          name,
          created_at: new Date().toISOString()
        },
        token: jwt.sign({ email }, jwtSecret, { expiresIn: '7d' })
      },
      message: 'Usuario registrado exitosamente'
    };
  } catch (error) {
    console.error('Error en auth.registerUser:', error);
    return {
      success: false,
      message: 'Error al registrar el usuario'
    };
  }
};

// Función para iniciar sesión
exports.loginUser = async (email, password) => {
  try {
    // En un entorno de producción, usaríamos la API real de Supabase
    // Para desarrollo/demo, simulamos la respuesta
    
    // Simulación de respuesta para desarrollo
    if (email.includes('error')) {
      return {
        success: false,
        message: 'Credenciales inválidas'
      };
    }
    
    if (email.includes('locked')) {
      return {
        success: false,
        message: 'Cuenta bloqueada. Por favor, contacte con soporte.'
      };
    }
    
    // Simular login exitoso
    return {
      success: true,
      data: {
        user: {
          id: `user_${Math.random().toString(36).substr(2, 9)}`,
          email,
          name: email.split('@')[0],
          created_at: new Date().toISOString()
        },
        token: jwt.sign({ email }, jwtSecret, { expiresIn: '7d' })
      },
      message: 'Inicio de sesión exitoso'
    };
  } catch (error) {
    console.error('Error en auth.loginUser:', error);
    return {
      success: false,
      message: 'Error al iniciar sesión'
    };
  }
};

// Middleware para verificar token JWT
exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Acceso denegado. Token no proporcionado.'
    });
  }
  
  try {
    const verified = jwt.verify(token, jwtSecret);
    req.user = verified;
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: 'Token inválido o expirado'
    });
  }
};

// Función para cerrar sesión
exports.logoutUser = async (token) => {
  try {
    // En un entorno de producción, invalidaríamos el token en Supabase
    // Para desarrollo/demo, simplemente devolvemos éxito
    return {
      success: true,
      message: 'Sesión cerrada exitosamente'
    };
  } catch (error) {
    console.error('Error en auth.logoutUser:', error);
    return {
      success: false,
      message: 'Error al cerrar sesión'
    };
  }
};

// Función para obtener información del usuario actual
exports.getCurrentUser = async (token) => {
  try {
    // En un entorno de producción, verificaríamos el token con Supabase
    // Para desarrollo/demo, decodificamos el token JWT
    
    const decoded = jwt.verify(token, jwtSecret);
    
    // Simular obtención de datos del usuario
    return {
      success: true,
      data: {
        user: {
          id: `user_${Math.random().toString(36).substr(2, 9)}`,
          email: decoded.email,
          name: decoded.email.split('@')[0],
          created_at: new Date().toISOString()
        }
      }
    };
  } catch (error) {
    console.error('Error en auth.getCurrentUser:', error);
    return {
      success: false,
      message: 'Error al obtener información del usuario'
    };
  }
};
