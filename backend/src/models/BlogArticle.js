const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const { v4: uuidv4 } = require('uuid');
const User = require('./User');

const BlogArticle = sequelize.define('BlogArticle', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true
  },
  authorId: {
    type: DataTypes.UUID,
    field: 'author_id',
    references: {
      model: User,
      key: 'id'
    },
    onDelete: 'SET NULL'
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  excerpt: {
    type: DataTypes.TEXT
  },
  featuredImage: {
    type: DataTypes.STRING(255),
    field: 'featured_image'
  },
  status: {
    type: DataTypes.ENUM('draft', 'published', 'archived'),
    defaultValue: 'draft'
  },
  publishedAt: {
    type: DataTypes.DATE,
    field: 'published_at'
  }
}, {
  tableName: 'blog_articles',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  indexes: [
    {
      name: 'idx_blog_articles_slug',
      fields: ['slug']
    },
    {
      name: 'idx_blog_articles_status',
      fields: ['status']
    },
    {
      name: 'idx_blog_articles_published_at',
      fields: ['published_at']
    }
  ]
});

// Establecer relaciones  
//BlogArticle.belongsTo(User, { as: 'author', foreignKey: 'authorId' });
//User.hasMany(BlogArticle, { foreignKey: 'authorId' });

module.exports = BlogArticle;
