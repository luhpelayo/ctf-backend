const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para registrar un usuario
router.post('/register', authController.registerUser);

// Ruta para iniciar sesión y obtener un token JWT
router.post('/login', authController.loginUser);

// Ejemplo de ruta protegida con autenticación
router.get('/protected-route', authController.protectedRoute);

module.exports = router;
