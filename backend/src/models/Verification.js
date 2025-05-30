const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const { v4: uuidv4 } = require('uuid');
const User = require('./User');
const Source = require('./Source');

const Verification = sequelize.define('Verification', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true
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
  email: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  sourceId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'source_id',
    references: {
      model: Source,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'failed'),
    defaultValue: 'pending'
  },
  result: {
    type: DataTypes.JSON
  },
  reportType: {
    type: DataTypes.ENUM('basic', 'detailed'),
    defaultValue: 'basic',
    field: 'report_type'
  },
  isCached: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'is_cached'
  },
  cachedAt: {
    type: DataTypes.DATE,
    field: 'cached_at'
  }
}, {
  tableName: 'verifications',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  indexes: [
    {
      name: 'idx_verifications_email',
      fields: ['email']
    },
    {
      name: 'idx_verifications_status',
      fields: ['status']
    },
    {
      name: 'idx_verifications_report_type',
      fields: ['report_type']
    },
    {
      name: 'idx_verifications_created_at',
      fields: ['created_at']
    }
  ]
});

// Establecer relaciones
Verification.belongsTo(User, { foreignKey: 'userId' });
Verification.belongsTo(Source, { foreignKey: 'sourceId' });
User.hasMany(Verification, { foreignKey: 'userId' });
Source.hasMany(Verification, { foreignKey: 'sourceId' });

module.exports = Verification;
