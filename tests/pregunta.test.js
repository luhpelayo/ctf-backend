
const Pregunta = require('../models/Pregunta'); // Verifica la ruta
const { DataTypes } = require('sequelize');

// Prueba para crear una nueva categoría
test('Crear una nueva pregunta', async () => {
  // Crear una nueva categoría en la base de datos
  const nuevaPregunta = await Pregunta.create({
    titulo: 'Pregunta de prueba',
    descripcion: 'Esta es una pregunta de prueba.',
    idDificultad: 1, // Asegúrate de que el ID de Dificultad exista en tu base de datos
    idCategoria: 1, // Asegúrate de que el ID de Categoría exista en tu base de datos
  });


  // Buscar la categoría recién creada en la base de datos
  const preguntaEncontrada = await Pregunta.findByPk(nuevaPregunta.id);

  // Verificar que la categoría se haya creado correctamente
  expect(preguntaEncontrada).toBeDefined();
    expect(preguntaEncontrada.titulo).toBe('Pregunta de prueba');
    expect(preguntaEncontrada.descripcion).toBe('Esta es una pregunta de prueba.');
    expect(preguntaEncontrada.idDificultad).toBe(1);
    expect(preguntaEncontrada.idCategoria).toBe(1);
});

// Prueba para buscar una categoría existente
test('Buscar una categoría existente', async () => {
  // Buscar una categoría existente en la base de datos
  const preguntaExistente = await Pregunta.findOne({
    where: { titulo: 'Pregunta de prueba' },
  });

  // Verificar que la categoría existente se haya encontrado correctamente
  expect(preguntaExistente).not.toBeNull();
  expect(preguntaExistente.titulo).toBe('Pregunta de prueba');
});
