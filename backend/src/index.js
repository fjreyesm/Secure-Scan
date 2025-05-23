require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { body, validationResult } = require('express-validator');

// Importar rutas
const hibpRoutes = require('./routes/hibp');
const authRoutes = require('./routes/auth');

// Inicializar la aplicación Express
const app = express();
const PORT = process.env.PORT || 3001;

// Configuración CORS más permisiva
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
})); // Seguridad con configuración más permisiva
app.use(express.json()); // Parsear JSON
app.use(morgan('dev')); // Logging

// Middleware para verificar solicitudes
app.use((req, res, next) => {
  console.log(`Solicitud recibida: ${req.method} ${req.url}`);
  console.log('Headers:', req.headers);
  next();
});

// Rutas
app.use('/api/hibp', hibpRoutes);
app.use('/api/auth', authRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API de SecureCheck funcionando correctamente' });
});

// Ruta de prueba CORS
app.get('/test-cors', (req, res) => {
  res.json({ success: true, message: 'CORS está configurado correctamente' });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error('Error en la aplicación:', err.stack);
  res.status(500).json({
    success: false,
    message: 'Error interno del servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Iniciar el servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
  console.log(`Accesible en http://localhost:${PORT}`);
});

module.exports = app;
