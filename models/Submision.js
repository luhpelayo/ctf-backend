const { DataTypes } = require('sequelize');
const sequelize = require('../db.js'); // Importa la instancia de Sequelize
const Preguntas = require('./Pregunta.js');
const User = require('./User.js');
// Define el modelo Submisión
const Submision = sequelize.define('submision', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    puntajeActual: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    resuelta: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    horaSub: {
      type: DataTypes.STRING,
      defaultValue: '00:00',
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      idPreguntas: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
}, {
    timestamps: false, // Si no necesitas marcas de tiempo en tu modelo
    });
    Submision.belongsTo(Preguntas, { foreignKey: 'idPreguntas' });
    Submision.belongsTo(User, { foreignKey: 'idUser' });
    module.exports = Submision;
