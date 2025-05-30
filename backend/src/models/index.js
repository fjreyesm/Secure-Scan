const { Sequelize } = require('sequelize');
const { sequelize } = require('../config/database');

// Importar todos los modelos
const User = require('./User');
const Source = require('./Source');
const Verification = require('./Verification');
const Breach = require('./Breach');
const VerificationBreach = require('./VerificationBreach');
const BlogArticle = require('./BlogArticle');
const Category = require('./Category');
const ArticleCategory = require('./ArticleCategory');
const Tool = require('./Tool');
const Notification = require('./Notification');
const ApiLog = require('./ApiLog');
const SystemSetting = require('./SystemSetting');
const Subscription = require('./Subscription');

// Definir relaciones entre modelos

// Relaciones User
User.hasMany(Verification, { foreignKey: 'userId' });
User.hasMany(BlogArticle, { foreignKey: 'authorId', as: 'articles' });
User.hasMany(Notification, { foreignKey: 'userId' });
User.hasMany(ApiLog, { foreignKey: 'userId' });
User.hasMany(Subscription, { foreignKey: 'userId' });

// Relaciones Source
Source.hasMany(Verification, { foreignKey: 'sourceId' });

// Relaciones Verification
Verification.belongsTo(User, { foreignKey: 'userId' });
Verification.belongsTo(Source, { foreignKey: 'sourceId' });
Verification.belongsToMany(Breach, { through: VerificationBreach, foreignKey: 'verificationId', otherKey: 'breachId' });

// Relaciones Breach
Breach.belongsToMany(Verification, { through: VerificationBreach, foreignKey: 'breachId', otherKey: 'verificationId' });

// Relaciones BlogArticle
BlogArticle.belongsTo(User, { foreignKey: 'authorId', as: 'author' });
BlogArticle.belongsToMany(Category, { through: ArticleCategory, foreignKey: 'articleId', otherKey: 'categoryId' });

// Relaciones Category
Category.belongsToMany(BlogArticle, { through: ArticleCategory, foreignKey: 'categoryId', otherKey: 'articleId' });

// Relaciones Notification
Notification.belongsTo(User, { foreignKey: 'userId' });

// Relaciones ApiLog
ApiLog.belongsTo(User, { foreignKey: 'userId' });

// Relaciones Subscription
Subscription.belongsTo(User, { foreignKey: 'userId' });

// Función para validar todas las relaciones
const validateRelations = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');
    
    // Verificar que todos los modelos estén sincronizados con la base de datos
    // Nota: En producción, usar migraciones en lugar de sync
    await sequelize.sync({ alter: false });
    console.log('Todos los modelos están sincronizados con la base de datos.');
    
    return true;
  } catch (error) {
    console.error('Error al validar relaciones:', error);
    return false;
  }
};

module.exports = {
  sequelize,
  validateRelations,
  models: {
    User,
    Source,
    Verification,
    Breach,
    VerificationBreach,
    BlogArticle,
    Category,
    ArticleCategory,
    Tool,
    Notification,
    ApiLog,
    SystemSetting,
    Subscription
  }
};
