const Task = require('../models/Task');

// Controlador para crear una nueva tarea
const createTask = async (req, res) => {
  try {
    const newTask = req.body;
    const task = await Task.create(newTask);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo crear la tarea' });
  }
};

// Controlador para obtener todas las tareas
const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.findAll();
    res.json(allTasks);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron obtener las tareas' });
  }
};

// Controlador para actualizar una tarea por su ID
const updateTaskById = async (req, res) => {
  try {
    const taskId = req.params.id;
    const updatedTaskData = req.body;

    const task = await Task.findByPk(taskId);

    if (!task) {
      return res.status(404).json({ error: 'Tarea no encontrada.' });
    }

    await task.update(updatedTaskData);

    return res.status(200).json({ message: 'Tarea actualizada con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la tarea.' });
  }
};

// Controlador para eliminar una tarea por su ID
const deleteTaskById = async (req, res) => {
  try {
    const taskId = req.params.id;

    const task = await Task.findByPk(taskId);

    if (!task) {
      return res.status(404).json({ error: 'Tarea no encontrada.' });
    }

    await task.destroy();

    return res.status(200).json({ message: 'Tarea eliminada con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la tarea.' });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  updateTaskById,
  deleteTaskById,
};
