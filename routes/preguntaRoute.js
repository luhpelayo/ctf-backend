const express = require('express');
const router = express.Router();
const preguntaController = require('../controllers/preguntaController');

// Ruta para crear una nueva tarea
router.post('/', preguntaController.createPregunta);

// Ruta para obtener todas las tareas
router.get('/', preguntaController.getAllPreguntas);

// Ruta para actualizar una tarea por su ID
router.put('/:id', preguntaController.updatePreguntaById);

// Ruta para eliminar una tarea por su ID
router.delete('/:id', preguntaController.deletePreguntaById);

module.exports = router;
