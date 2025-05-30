const Category = require('../models/Category');
const { v4: uuidv4 } = require('uuid');

// Crear una nueva categoría
exports.createCategory = async (categoryData) => {
  try {
    // Asignar un UUID si no se proporciona
    if (!categoryData.id) {
      categoryData.id = uuidv4();
    }
    
    const category = await Category.create(categoryData);
    return category;
  } catch (error) {
    console.error('Error al crear categoría:', error);
    throw error;
  }
};

// Obtener todas las categorías
exports.getAllCategories = async () => {
  try {
    const categories = await Category.findAll({
      order: [['name', 'ASC']]
    });
    
    return categories;
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    throw error;
  }
};

// Obtener una categoría por ID
exports.getCategoryById = async (id) => {
  try {
    const category = await Category.findByPk(id);
    
    if (!category) {
      throw new Error('Categoría no encontrada');
    }
    
    return category;
  } catch (error) {
    console.error(`Error al obtener categoría con ID ${id}:`, error);
    throw error;
  }
};

// Obtener una categoría por slug
exports.getCategoryBySlug = async (slug) => {
  try {
    const category = await Category.findOne({
      where: { slug }
    });
    
    if (!category) {
      throw new Error('Categoría no encontrada');
    }
    
    return category;
  } catch (error) {
    console.error(`Error al obtener categoría con slug ${slug}:`, error);
    throw error;
  }
};

// Actualizar una categoría
exports.updateCategory = async (id, categoryData) => {
  try {
    const category = await Category.findByPk(id);
    
    if (!category) {
      throw new Error('Categoría no encontrada');
    }
    
    await category.update(categoryData);
    
    return category;
  } catch (error) {
    console.error(`Error al actualizar categoría con ID ${id}:`, error);
    throw error;
  }
};

// Eliminar una categoría
exports.deleteCategory = async (id) => {
  try {
    const category = await Category.findByPk(id);
    
    if (!category) {
      throw new Error('Categoría no encontrada');
    }
    
    await category.destroy();
    
    return { message: 'Categoría eliminada correctamente' };
  } catch (error) {
    console.error(`Error al eliminar categoría con ID ${id}:`, error);
    throw error;
  }
};
