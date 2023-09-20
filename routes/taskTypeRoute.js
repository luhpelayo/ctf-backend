const express = require('express');
const router = express.Router();
const taskTypeController = require('../controllers/taskTypeController');

// Ruta para obtener todos los tipos de tarea (GET)
router.get('/', taskTypeController.getAllTaskTypes);

// Ruta para crear un nuevo tipo de tarea (POST)
router.post('/', taskTypeController.createTaskType);

// Ruta para eliminar un tipo de tarea por su ID (DELETE)
router.delete('/:id', taskTypeController.deleteTaskTypeById);

// Ruta para actualizar un tipo de tarea por su ID (PUT)
router.put('/:id', taskTypeController.updateTaskTypeById);

module.exports = router;
