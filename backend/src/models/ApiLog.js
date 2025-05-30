const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const { v4: uuidv4 } = require('uuid');
const User = require('./User');

const ApiLog = sequelize.define('ApiLog', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true
  },
  endpoint: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  userId: {
    type: DataTypes.UUID,
    field: 'user_id',
    references: {
      model: User,
      key: 'id'
    },
    onDelete: 'SET NULL'
  },
  ipAddress: {
    type: DataTypes.STRING(45),
    field: 'ip_address'
  },
  emailChecked: {
    type: DataTypes.STRING(255),
    field: 'email_checked'
  },
  requestData: {
    type: DataTypes.JSON,
    field: 'request_data'
  },
  responseData: {
    type: DataTypes.JSON,
    field: 'response_data'
  },
  isSuccessful: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    field: 'is_successful'
  },
  statusCode: {
    type: DataTypes.INTEGER,
    field: 'status_code'
  },
  errorMessage: {
    type: DataTypes.TEXT,
    field: 'error_message'
  },
  responseTime: {
    type: DataTypes.INTEGER,
    field: 'response_time'
  }
}, {
  tableName: 'api_logs',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
  indexes: [
    {
      name: 'idx_api_logs_endpoint',
      fields: ['endpoint']
    },
    {
      name: 'idx_api_logs_user_id',
      fields: ['user_id']
    },
    {
      name: 'idx_api_logs_is_successful',
      fields: ['is_successful']
    },
    {
      name: 'idx_api_logs_created_at',
      fields: ['created_at']
    }
  ]
});

// Establecer relaciones
ApiLog.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(ApiLog, { foreignKey: 'userId' });

module.exports = ApiLog;
