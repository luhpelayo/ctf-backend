const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const User = require('../models/User');

dotenv.config();
const { JWT_TOKEN } = process.env;
const jwtSecret = JWT_TOKEN;

async function registerUser(req, res) {
  try {
    const { username, password, email, idRol } = req.body;

    const existingUserEmail = await User.findOne({ where: { email } });
    const existingUserUsername = await User.findOne({ where: { username } });

    if (existingUserUsername) {
      return res.status(400).json({ error: 'El nombre de usuario ya está registrado' });
    }
    if (existingUserEmail) {
      return res.status(400).json({ error: 'El correo electrónico ya está registrado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password: hashedPassword, email, idRol });

    const token = jwt.sign({ user: newUser }, jwtSecret, { expiresIn: '1h' });

    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudo registrar el usuario' });
  }
}

async function loginUser(req, res) {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('Contraseña enviada:', password);
    console.log('Contraseña enviada:', user.password);

    if (isPasswordValid) {
      const token = jwt.sign({ user }, jwtSecret, { expiresIn: '1h' });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: 'Credenciales incorrectas password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el inicio de sesión' });
  }
}

function protectedRoute(req, res) {
  res.json({ message: 'Ruta protegida, solo para usuarios autenticados' });
}

module.exports = { registerUser, loginUser, protectedRoute };
