const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const { v4: uuidv4 } = require('uuid');
const User = require('./User');

const Subscription = sequelize.define('Subscription', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'user_id',
    references: {
      model: User,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  planId: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'plan_id'
  },
  status: {
    type: DataTypes.ENUM('active', 'canceled', 'expired', 'pending'),
    defaultValue: 'pending'
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'start_date'
  },
  endDate: {
    type: DataTypes.DATE,
    field: 'end_date'
  },
  paymentMethod: {
    type: DataTypes.STRING(50),
    field: 'payment_method'
  },
  paymentId: {
    type: DataTypes.STRING(255),
    field: 'payment_id'
  }
}, {
  tableName: 'subscriptions',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  indexes: [
    {
      name: 'idx_subscriptions_user_id',
      fields: ['user_id']
    },
    {
      name: 'idx_subscriptions_status',
      fields: ['status']
    },
    {
      name: 'idx_subscriptions_end_date',
      fields: ['end_date']
    }
  ]
});

// Establecer relaciones
Subscription.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Subscription, { foreignKey: 'userId' });

module.exports = Subscription;
