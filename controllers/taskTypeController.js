const TaskType = require('../models/taskType');

// Controlador para obtener todos los tipos de tarea
const getAllTaskTypes = async (req, res) => {
  try {
    const taskTypes = await TaskType.findAll();
    res.json(taskTypes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los tipos de tarea' });
  }
};

// Controlador para crear un nuevo tipo de tarea
const createTaskType = async (req, res) => {
  try {
    const { tiptask } = req.body;
    const newTaskType = await TaskType.create({ tiptask });
    res.status(201).json(newTaskType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el tipo de tarea' });
  }
};

// Controlador para eliminar un tipo de tarea por su ID
const deleteTaskTypeById = async (req, res) => {
  try {
    const taskTypeId = req.params.id;
    const taskType = await TaskType.findByPk(taskTypeId);

    if (!taskType) {
      return res.status(404).json({ error: 'Tipo de tarea no encontrado.' });
    }

    await taskType.destroy();

    return res.status(200).json({ message: 'Tipo de tarea eliminado con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el tipo de tarea.' });
  }
};

// Controlador para actualizar un tipo de tarea por su ID
const updateTaskTypeById = async (req, res) => {
  try {
    const taskTypeId = req.params.id;
    const taskType = await TaskType.findByPk(taskTypeId);

    if (!taskType) {
      return res.status(404).json({ error: 'Tipo de tarea no encontrado.' });
    }

    const { tiptask } = req.body;

    // Actualiza el tipo de tarea con los nuevos datos
    await taskType.update({ tiptask });

    return res.status(200).json({ message: 'Tipo de tarea actualizado con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el tipo de tarea.' });
  }
};

module.exports = {
  getAllTaskTypes,
  createTaskType,
  deleteTaskTypeById,
  updateTaskTypeById,
};
