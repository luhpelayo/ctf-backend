

// initData.js

const { DataTypes } = require('sequelize');
const Categoria = require('./models/Categoria.js');
const Dificultad = require('./models/Dificultad.js');
const Rol = require('./models/Rol.js');
// Define una función para inicializar datos
async function initData() {
  try {
    // Agregar categorías a la base de datos
    await Categoria.bulkCreate([
      { nombre: 'category_web', descripcion: 'Categoría de desafíos web' },
      { nombre: 'category_reversing', descripcion: 'Categoría de desafíos de reversing' },
      { nombre: 'category_steg', descripcion: 'Categoría de desafíos de esteganografía' },
      { nombre: 'category_pwning', descripcion: 'Categoría de desafíos de pwning' },
      { nombre: 'category_misc', descripcion: 'Categoría de desafíos variados' },
      { nombre: 'category_crypt', descripcion: 'Categoría de desafíos de criptografía' },
      // ... otras categorías ...
    ]);

    // Agregar dificultades a la base de datos
    await Dificultad.bulkCreate([
      { nombre: 'E', descripcion: 'Fácil' },
      { nombre: 'M', descripcion: 'Medio' },
      { nombre: 'H', descripcion: 'Difícil' },
      // ... otras dificultades ...
    ]);

        // Agregar roles a la base de datos
        await Rol.bulkCreate([
          { nombre: 'admin' },
          { nombre: 'participante' },
        ]);

    console.log('Datos iniciales agregados con éxito.');
  } catch (error) {
    console.error('Error al agregar datos iniciales:', error);
  }
}

module.exports = initData;
