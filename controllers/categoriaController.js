const Categoria = require('../models/Categoria');

// Controlador para crear una nueva Categoria
const createCategoria = async (req, res) => {
  try {
    const newCategoria = req.body;
    const categoria = await Categoria.create(newCategoria);
    res.status(201).json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo crear la Categoria' });
  }
};

// Controlador para obtener todas las Categorias
const getAllCategorias = async (req, res) => {
  try {
    const allCategorias = await Categoria.findAll();
    res.json(allCategorias);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron obtener las Categorias' });
  }
};

// Controlador para actualizar una Categoria por su ID
const updateCategoriaById = async (req, res) => {
  try {
    const categoriaId = req.params.id;
    const updatedCategoriaData = req.body;

    const categoria = await Categoria.findByPk(categoriaId);

    if (!categoria) {
      return res.status(404).json({ error: 'Tarea no encontrada.' });
    }

    await categoria.update(updatedCategoriaData);

    return res.status(200).json({ message: 'Tarea actualizada con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la Categoria.' });
  }
};

// Controlador para eliminar una Categoria por su ID
const deleteCategoriaById = async (req, res) => {
  try {
    const categoriaId = req.params.id;

    const categoria = await Categoria.findByPk(categoriaId);

    if (!categoria) {
      return res.status(404).json({ error: 'Tarea no encontrada.' });
    }

    await categoria.destroy();

    return res.status(200).json({ message: 'Tarea eliminada con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la Categoria.' });
  }
};

module.exports = {
  createCategoria,
  getAllCategorias,
  updateCategoriaById,
  deleteCategoriaById,
};
