const { DataTypes } = require('sequelize');
const sequelize = require('../db.js'); // Importa la instancia de Sequelize
const TaskType = sequelize.define('task_type', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  tiptask: {
    type: DataTypes.STRING(255), // O el tipo de dato adecuado para tiptask
    allowNull: false,
  },
}, {
  timestamps: false, // Si no necesitas marcas de tiempo en tu modelo
});



module.exports = TaskType;