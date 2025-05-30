const Redis = require('ioredis');

const redis = new Redis({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: process.env.REDIS_PORT || 6379,
  // password: process.env.REDIS_PASSWORD, // Descomenta y configura si tu Redis tiene contraseña
});

redis.on('connect', () => {
  console.log('🟢 Conectado a Redis');
});

redis.on('error', (err) => {
  console.error('🔴 Error de conexión con Redis:', err);
});

module.exports = redis;