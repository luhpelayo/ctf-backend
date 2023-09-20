const { DataTypes } = require('sequelize');
const sequelize = require('../db.js'); // Importa la instancia de Sequelize
const User = require('./User.js'); // Importa el modelo User

const perfilUsuario = sequelize.define('perfilUsuario', {
  puntaje: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  totalSub: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  ultimaSubHora: {
    type: DataTypes.STRING,
    defaultValue: '00:00',
  },
  hora: {
    type: DataTypes.TIME,
    defaultValue: '00:00',
  },
  iduser: {
    type: DataTypes.INTEGER,
    allowNull: false, // Esto asegura que se requiera un valor válido
  },
}, {
  timestamps: false, // Si no necesitas marcas de tiempo en tu modelo
});

// Define la relación entre perfilUsuario y User
perfilUsuario.belongsTo(User, { foreignKey: 'iduser' });

module.exports = perfilUsuario;
