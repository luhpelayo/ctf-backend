const perfilUsuario = require('../models/perfilUsuario');

// Controlador para crear una nueva tarea
const createperfilUsuario = async (req, res) => {
  try {
    const newperfilUsuario = req.body;
    const perfilUsuario = await perfilUsuario.create(newperfilUsuario);
    res.status(201).json(perfilUsuario);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo crear la tarea' });
  }
};

// Controlador para obtener todas las tareas
const getAllperfilUsuarios = async (req, res) => {
  try {
    const allperfilUsuarios = await perfilUsuario.findAll();
    res.json(allperfilUsuarios);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron obtener las tareas' });
  }
};

// Controlador para actualizar una tarea por su ID
const updateperfilUsuarioById = async (req, res) => {
  try {
    const perfilUsuarioId = req.params.id;
    const updatedperfilUsuarioData = req.body;

    const perfilUsuario = await perfilUsuario.findByPk(perfilUsuarioId);

    if (!perfilUsuario) {
      return res.status(404).json({ error: 'perfilUsuario no encontrada.' });
    }

    await perfilUsuario.update(updatedperfilUsuarioData);

    return res.status(200).json({ message: 'perfilUsuario actualizada con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la tarea.' });
  }
};

// Controlador para eliminar una tarea por su ID
const deleteperfilUsuarioById = async (req, res) => {
  try {
    const perfilUsuarioId = req.params.id;

    const perfilUsuario = await perfilUsuario.findByPk(perfilUsuarioId);

    if (!perfilUsuario) {
      return res.status(404).json({ error: 'perfilUsuario no encontrada.' });
    }

    await perfilUsuario.destroy();

    return res.status(200).json({ message: 'perfilUsuario eliminada con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la tarea.' });
  }
};

module.exports = {
  createperfilUsuario,
  getAllperfilUsuarios,
  updateperfilUsuarioById,
  deleteperfilUsuarioById,
};
