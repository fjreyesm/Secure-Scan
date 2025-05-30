const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const { v4: uuidv4 } = require('uuid');

const Breach = sequelize.define('Breach', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  domain: {
    type: DataTypes.STRING(255)
  },
  breachDate: {
    type: DataTypes.DATEONLY,
    field: 'breach_date'
  },
  addedDate: {
    type: DataTypes.DATE,
    field: 'added_date'
  },
  description: {
    type: DataTypes.TEXT
  },
  dataClasses: {
    type: DataTypes.JSON,
    field: 'data_classes'
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    field: 'is_verified'
  },
  isFabricated: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'is_fabricated'
  },
  isSensitive: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'is_sensitive'
  },
  isRetired: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'is_retired'
  },
  isSpamList: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'is_spam_list'
  }
}, {
  tableName: 'breaches',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  indexes: [
    {
      name: 'idx_breaches_name',
      fields: ['name']
    },
    {
      name: 'idx_breaches_domain',
      fields: ['domain']
    },
    {
      name: 'idx_breaches_breach_date',
      fields: ['breach_date']
    },
    {
      name: 'idx_breaches_is_sensitive',
      fields: ['is_sensitive']
    }
  ]
});

module.exports = Breach;
