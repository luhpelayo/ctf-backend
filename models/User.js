const { DataTypes } = require('sequelize');
const sequelize = require('../db.js'); // Importa la instancia de Sequelize
const bcrypt = require('bcrypt');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255), // Ajusta la longitud según tus necesidades
    allowNull: false,
    unique: true, // Asegura que los correos electrónicos sean únicos
    validate: {
      isEmail: true, // Valida que el valor sea un correo electrónico válido
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(password) {
      // Hash y salting de la contraseña antes de almacenarla en la base de datos
      const saltRounds = 10;
      const hashedPassword = bcrypt.hashSync(password, saltRounds);
      this.setDataValue('password', hashedPassword);
    },
  },
}, {
  timestamps: false, // Si no necesitas marcas de tiempo en tu modelo
});

module.exports = User;
