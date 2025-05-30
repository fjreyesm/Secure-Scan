//import('module-alias/register'); // Asegúrate de tener configurado module-alias si lo usas
//hacer todos los imports que necesite server.js
//import('./config/database'); // Importa la configuración de la base de datos



require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { sequelize } = require('./config/database');
const rateLimit = require('express-rate-limit');
const hibpRoutes = require('./routes/hibpRoutes');
// Modelos
require('./models/User');
require('./models/Source');
require('./models/Verification');
require('./models/Breach');
require('./models/VerificationBreach');
require('./models/BlogArticle');
require('./models/Category');
require('./models/ArticleCategory');
require('./models/Tool');
require('./models/Notification');
require('./models/ApiLog');
require('./models/SystemSetting');
require('./models/Subscription');

// Rutas (pendiente implementar en carpetas)
//const userRoutes = require('./routes/users');
//const verificationRoutes = require('./routes/verifications');
// Agrega más según los módulos que tengas

// App
const app = express();

// Seguridad y utilidad
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Montar las rutas de HIBP bajo el prefijo /api/hibp
app.use('/api/hibp', hibpRoutes);

// Rate Limiting (opcional pero recomendable)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Rutas
//app.use('/api/users', userRoutes);
//app.use('/api/verifications', verificationRoutes);
// app.use('/api/tools', toolRoutes); // ejemplo

// Root
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API funcionando 🚀' });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Error interno del servidor'
  });
});

// Sync con Sequelize
const PORT = process.env.PORT || 3008;
sequelize.authenticate()
  .then(() => {
    console.log('🟢 Conexión con la base de datos establecida');
    return sequelize.sync(); // Puedes pasar { alter: true } en desarrollo
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Servidor escuchando en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('🔴 Error al conectar con la base de datos:', err);
  });
