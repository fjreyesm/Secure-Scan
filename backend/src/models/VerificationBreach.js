const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Verification = require('./Verification');
const Breach = require('./Breach');

// Tabla intermedia para la relación muchos a muchos entre verificaciones y filtraciones
const VerificationBreach = sequelize.define('VerificationBreach', {
  verificationId: {
    type: DataTypes.UUID,
    field: 'verification_id',
    primaryKey: true,
    references: {
      model: Verification,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  breachId: {
    type: DataTypes.UUID,
    field: 'breach_id',
    primaryKey: true,
    references: {
      model: Breach,
      key: 'id'
    },
    onDelete: 'CASCADE'
  }
}, {
  tableName: 'verification_breaches',
  timestamps: false
});

// Establecer relaciones muchos a muchos
Verification.belongsToMany(Breach, { 
  through: VerificationBreach,
  foreignKey: 'verificationId',
  otherKey: 'breachId'
});

Breach.belongsToMany(Verification, { 
  through: VerificationBreach,
  foreignKey: 'breachId',
  otherKey: 'verificationId'
});

module.exports = VerificationBreach;
