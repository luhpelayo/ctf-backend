const express = require('express');
const router = express.Router();
const rolController = require('../controllers/rolController');

// Ruta para crear una nueva tarea
router.post('/', rolController.createRol);

// Ruta para obtener todas las tareas
router.get('/', rolController.getAllRols);

// Ruta para actualizar una tarea por su ID
router.put('/:id', rolController.updateRolById);

// Ruta para eliminar una tarea por su ID
router.delete('/:id', rolController.deleteRolById);

module.exports = router;