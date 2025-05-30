const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const BlogArticle = require('./BlogArticle');
const Category = require('./Category');

// Tabla intermedia para la relación muchos a muchos entre artículos y categorías
const ArticleCategory = sequelize.define('ArticleCategory', {
  articleId: {
    type: DataTypes.UUID,
    field: 'article_id',
    primaryKey: true,
    references: {
      model: BlogArticle,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  categoryId: {
    type: DataTypes.UUID,
    field: 'category_id',
    primaryKey: true,
    references: {
      model: Category,
      key: 'id'
    },
    onDelete: 'CASCADE'
  }
}, {
  tableName: 'article_categories',
  timestamps: false
});

// Establecer relaciones muchos a muchos
BlogArticle.belongsToMany(Category, { 
  through: ArticleCategory,
  foreignKey: 'articleId',
  otherKey: 'categoryId'
});

Category.belongsToMany(BlogArticle, { 
  through: ArticleCategory,
  foreignKey: 'categoryId',
  otherKey: 'articleId'
});

module.exports = ArticleCategory;
