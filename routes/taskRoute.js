const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Ruta para crear una nueva tarea
router.post('/', taskController.createTask);

// Ruta para obtener todas las tareas
router.get('/', taskController.getAllTasks);

// Ruta para actualizar una tarea por su ID
router.put('/:id', taskController.updateTaskById);

// Ruta para eliminar una tarea por su ID
router.delete('/:id', taskController.deleteTaskById);

module.exports = router;
