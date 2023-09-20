const { DataTypes } = require('sequelize');
const sequelize = require('../db.js'); // Importa la instancia de Sequelize
const User = require('./User.js'); // Importa el modelo User
const TaskType = require('./taskType.js');

const Task = sequelize.define('task', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  deadline: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  priority: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  userId: { // Cambiado el nombre de id_tipo_de_task a userId
    type: DataTypes.INTEGER,
    allowNull: false,
  },
taskTypeId: {
  type: DataTypes.INTEGER,
  allowNull: false,
},
}, {
timestamps: false, // Si no necesitas marcas de tiempo en tu modelo
});

Task.belongsTo(User, { foreignKey: 'userId' });
Task.belongsTo(TaskType, { foreignKey: 'taskTypeId' });


module.exports = Task;
