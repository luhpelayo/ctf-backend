


const Submision = require('../models/Submision'); // Verifica la ruta
const { DataTypes } = require('sequelize');

// Prueba para crear una nueva submision
test('Crear una nueva submision', async () => {
  // Crear una nueva submision en la base de datos
  const nuevaSubmision = await Submision.create({
    puntajeActual: 0,
    resuelta: 0,
    horaSub: '00:00',
    idUser: 4, // Asegúrate de que el ID de Usuario exista en tu base de datos
    idPreguntas: 1, // Asegúrate de que el ID de Pregunta exista en tu base de datos
  });

  // Buscar la submision recién creada en la base de datos
  const submisionEncontrada = await Submision.findByPk(nuevaSubmision.id);

  // Verificar que la submision se haya creado correctamente
  expect(submisionEncontrada).toBeDefined();
  expect(submisionEncontrada.puntajeActual).toBe(0);
  expect(submisionEncontrada.resuelta).toBe(0);
  expect(submisionEncontrada.horaSub).toBe('00:00');
  expect(submisionEncontrada.idUser).toBe(4);
  expect(submisionEncontrada.idPreguntas).toBe(1);
});

// Prueba para buscar una submision existente
test('Buscar una submision existente', async () => {
  // Buscar una submision existente en la base de datos
  const submisionExistente = await Submision.findOne({
    where: { idUser: 4 },
  });

  // Verificar que la submision existente se haya encontrado correctamente
  expect(submisionExistente).not.toBeNull();
  expect(submisionExistente.idUser).toBe(4);
});
