const { DataTypes } = require('sequelize');
const sequelize = require('../db.js'); // Importa la instancia de Sequelize
const Categoria = require('./Categoria.js');
const Dificultad = require('./Dificultad.js');
// Define el modelo Preguntas
const Preguntas = sequelize.define('preguntas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    titulo: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.STRING(1000),
    },
    Pista: {
      type: DataTypes.STRING(500),
      defaultValue: 'La pista está ----',
    },
    Facil: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    Medio: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    Dificil: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    bandera: {
      type: DataTypes.STRING(100),
      defaultValue: 'pict_CTF{}',
    },
    puntos: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    resueltasPor: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    archivo: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    idDificultad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idCategoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
}, {
    timestamps: false, // Si no necesitas marcas de tiempo en tu modelo
    });
    Preguntas.belongsTo(Categoria, { foreignKey: 'idCategoria' });
    Preguntas.belongsTo(Dificultad, { foreignKey: 'idDificultad' });
    module.exports = Preguntas;
