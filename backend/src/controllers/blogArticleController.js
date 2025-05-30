const BlogArticle = require('../models/BlogArticle');
const Category = require('../models/Category');
const ArticleCategory = require('../models/ArticleCategory');
const { v4: uuidv4 } = require('uuid');

// Crear un nuevo artículo del blog
exports.createBlogArticle = async (articleData) => {
  try {
    // Asignar un UUID si no se proporciona
    if (!articleData.id) {
      articleData.id = uuidv4();
    }
    
    // Extraer categorías si existen
    const categories = articleData.categories || [];
    delete articleData.categories;
    
    const article = await BlogArticle.create(articleData);
    
    // Si hay categorías asociadas, crear las relaciones
    if (categories.length > 0) {
      const categoryRelations = categories.map(categoryId => ({
        articleId: article.id,
        categoryId
      }));
      
      await ArticleCategory.bulkCreate(categoryRelations);
    }
    
    // Obtener el artículo con sus categorías
    const createdArticle = await BlogArticle.findByPk(article.id, {
      include: [
        {
          model: Category,
          through: { attributes: [] }
        }
      ]
    });
    
    return createdArticle;
  } catch (error) {
    console.error('Error al crear artículo del blog:', error);
    throw error;
  }
};

// Obtener todos los artículos del blog (con paginación)
exports.getAllBlogArticles = async (page = 1, limit = 10, status = null) => {
  try {
    const offset = (page - 1) * limit;
    const where = {};
    
    if (status) {
      where.status = status;
    }
    
    const { count, rows } = await BlogArticle.findAndCountAll({
      where,
      limit,
      offset,
      order: [['publishedAt', 'DESC']],
      include: [
        {
          model: Category,
          through: { attributes: [] }
        }
      ]
    });
    
    return {
      articles: rows,
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    };
  } catch (error) {
    console.error('Error al obtener artículos del blog:', error);
    throw error;
  }
};

// Obtener un artículo del blog por ID
exports.getBlogArticleById = async (id) => {
  try {
    const article = await BlogArticle.findByPk(id, {
      include: [
        {
          model: Category,
          through: { attributes: [] }
        }
      ]
    });
    
    if (!article) {
      throw new Error('Artículo no encontrado');
    }
    
    return article;
  } catch (error) {
    console.error(`Error al obtener artículo con ID ${id}:`, error);
    throw error;
  }
};

// Obtener un artículo del blog por slug
exports.getBlogArticleBySlug = async (slug) => {
  try {
    const article = await BlogArticle.findOne({
      where: { slug },
      include: [
        {
          model: Category,
          through: { attributes: [] }
        }
      ]
    });
    
    if (!article) {
      throw new Error('Artículo no encontrado');
    }
    
    return article;
  } catch (error) {
    console.error(`Error al obtener artículo con slug ${slug}:`, error);
    throw error;
  }
};

// Actualizar un artículo del blog
exports.updateBlogArticle = async (id, articleData) => {
  try {
    const article = await BlogArticle.findByPk(id);
    
    if (!article) {
      throw new Error('Artículo no encontrado');
    }
    
    // Extraer categorías si existen
    const categories = articleData.categories || [];
    delete articleData.categories;
    
    await article.update(articleData);
    
    // Si hay categorías asociadas, actualizar las relaciones
    if (categories.length > 0) {
      // Eliminar relaciones existentes
      await ArticleCategory.destroy({
        where: { articleId: id }
      });
      
      // Crear nuevas relaciones
      const categoryRelations = categories.map(categoryId => ({
        articleId: id,
        categoryId
      }));
      
      await ArticleCategory.bulkCreate(categoryRelations);
    }
    
    // Obtener el artículo actualizado con sus categorías
    const updatedArticle = await BlogArticle.findByPk(id, {
      include: [
        {
          model: Category,
          through: { attributes: [] }
        }
      ]
    });
    
    return updatedArticle;
  } catch (error) {
    console.error(`Error al actualizar artículo con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar un artículo del blog
exports.deleteBlogArticle = async (id) => {
  try {
    const article = await BlogArticle.findByPk(id);
    
    if (!article) {
      throw new Error('Artículo no encontrado');
    }
    
    await article.destroy();
    
    return { message: 'Artículo eliminado correctamente' };
  } catch (error) {
    console.error(`Error al eliminar artículo con ID ${id}:`, error);
    throw error;
  }
};
