const User = require('../models/User'); // Asegúrate de que la ruta sea correcta
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

// Prueba para crear un nuevo usuario
test('Crear un nuevo usuario', async () => {
  // Crear un nuevo usuario en la base de datos
  const nuevoUsuario = await User.create({
    username: 'NuevoUsuario',
    email: 'nuevousuario@example.com',
    password: 'password123', // Debes proporcionar una contraseña válida
    idRol: 1, // Debes proporcionar un ID de rol válido
  });

  // Buscar el usuario recién creado en la base de datos
  const usuarioEncontrado = await User.findByPk(nuevoUsuario.id);

  // Verificar que el usuario se haya creado correctamente
  expect(usuarioEncontrado).not.toBeNull();
  expect(usuarioEncontrado.username).toBe('NuevoUsuario');
  expect(usuarioEncontrado.email).toBe('nuevousuario@example.com');
});

// Prueba para buscar un usuario existente por nombre de usuario
test('Buscar un usuario existente por nombre de usuario', async () => {
  // Buscar un usuario existente por nombre de usuario en la base de datos
  const usuarioExistente = await User.findOne({
    where: { username: 'NuevoUsuario' },
  });

  // Verificar que el usuario existente se haya encontrado correctamente
  expect(usuarioExistente).not.toBeNull();
  expect(usuarioExistente.username).toBe('NuevoUsuario');
});

// Prueba para verificar la contraseña de un usuario
test('Verificar contraseña de usuario', async () => {
  // Buscar un usuario existente por nombre de usuario en la base de datos
  const usuarioExistente = await User.findOne({
    where: { username: 'NuevoUsuario' },
  });

  // Verificar que la contraseña sea válida
  const contraseñaValida = await bcrypt.compare('password123', usuarioExistente.password);
  expect(contraseñaValida).toBe(true);
});
