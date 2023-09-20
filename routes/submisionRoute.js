const express = require('express');
const router = express.Router();
const submisionController = require('../controllers/submisionController');

// Ruta para crear una nueva tarea
router.post('/', submisionController.createSubmision);

// Ruta para obtener todas las tareas
router.get('/', submisionController.getAllSubmisions);

// Ruta para actualizar una tarea por su ID
router.put('/:id', submisionController.updateSubmisionById);

// Ruta para eliminar una tarea por su ID
router.delete('/:id', submisionController.deleteSubmisionById);

module.exports = router;
