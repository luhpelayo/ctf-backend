const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

// Ruta para crear una nueva tarea
router.post('/', categoriaController.createCategoria);

// Ruta para obtener todas las tareas
router.get('/', categoriaController.getAllCategorias);

// Ruta para actualizar una tarea por su ID
router.put('/:id', categoriaController.updateCategoriaById);

// Ruta para eliminar una tarea por su ID
router.delete('/:id', categoriaController.deleteCategoriaById);

module.exports = router;
