const express = require('express');
const router = express.Router();
const perfilUsuarioController = require('../controllers/perfilUsuarioController');

// Ruta para crear una nueva tarea
router.post('/', perfilUsuarioController.createperfilUsuario);

// Ruta para obtener todas las tareas
router.get('/', perfilUsuarioController.getAllperfilUsuarios);

// Ruta para actualizar una tarea por su ID
router.put('/:id', perfilUsuarioController.updateperfilUsuarioById);

// Ruta para eliminar una tarea por su ID
router.delete('/:id', perfilUsuarioController.deleteperfilUsuarioById);

module.exports = router;
