const { DataTypes } = require('sequelize');
const sequelize = require('../db.js'); // Importa la instancia de Sequelize
const Dificultad = sequelize.define('dificultad', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
}, {
    timestamps: false, // Si no necesitas marcas de tiempo en tu modelo
    });

    module.exports = Dificultad;
