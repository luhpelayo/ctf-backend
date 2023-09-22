const Categoria = require('../models/Categoria'); // Verifica la ruta
const { DataTypes } = require('sequelize');

// Prueba para crear una nueva categoría
test('Crear una nueva categoría', async () => {
  // Crear una nueva categoría en la base de datos
  const nuevaCategoria = await Categoria.create({
    nombre: 'NuevaCategoría',
    descripcion: 'Descripción de la nueva categoría',
  });

  // Buscar la categoría recién creada en la base de datos
  const categoriaEncontrada = await Categoria.findByPk(nuevaCategoria.id);

  // Verificar que la categoría se haya creado correctamente
  expect(categoriaEncontrada).not.toBeNull();
  expect(categoriaEncontrada.nombre).toBe('NuevaCategoría');
  expect(categoriaEncontrada.descripcion).toBe('Descripción de la nueva categoría');
});

// Prueba para buscar una categoría existente
test('Buscar una categoría existente', async () => {
  // Buscar una categoría existente en la base de datos
  const categoriaExistente = await Categoria.findOne({
    where: { nombre: 'NuevaCategoría' },
  });

  // Verificar que la categoría existente se haya encontrado correctamente
  expect(categoriaExistente).not.toBeNull();
  expect(categoriaExistente.nombre).toBe('NuevaCategoría');
});
