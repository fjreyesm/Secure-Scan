const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const { v4: uuidv4 } = require('uuid');

const Source = sequelize.define('Source', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM('API', 'crawler', 'partner'),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  apiEndpoint: {
    type: DataTypes.STRING(255),
    field: 'api_endpoint'
  },
  apiKeyParam: {
    type: DataTypes.STRING(100),
    field: 'api_key_param'
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    field: 'is_active'
  }
}, {
  tableName: 'sources',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  indexes: [
    {
      name: 'idx_sources_type',
      fields: ['type']
    },
    {
      name: 'idx_sources_is_active',
      fields: ['is_active']
    }
  ]
});

module.exports = Source;
