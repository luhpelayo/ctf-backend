const express = require('express');
const router = express.Router();
const dificultadController = require('../controllers/dificultadController');

// Ruta para crear una nueva tarea
router.post('/', dificultadController.createDificultad);

// Ruta para obtener todas las tareas
router.get('/', dificultadController.getAllDificultads);

// Ruta para actualizar una tarea por su ID
router.put('/:id', dificultadController.updateDificultadById);

// Ruta para eliminar una tarea por su ID
router.delete('/:id', dificultadController.deleteDificultadById);

module.exports = router;
