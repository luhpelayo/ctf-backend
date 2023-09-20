const { DataTypes } = require('sequelize');
const sequelize = require('../db.js'); // Importa la instancia de Sequelize

const Rol = sequelize.define('rol', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(255), // Ajusta la longitud según tus necesidades
    allowNull: false,
    unique: true, // Asegura que los nombres de rol sean únicos
  },
}, {
  timestamps: false, // Si no necesitas marcas de tiempo en tu modelo
});

module.exports = Rol;
