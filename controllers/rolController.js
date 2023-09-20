const Rol = require('../models/Rol');

// Controlador para crear una nueva Rol
const createRol = async (req, res) => {
  try {
    const newRol = req.body;
    const rol = await Rol.create(newRol);
    res.status(201).json(rol);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo crear la Rol' });
  }
};

// Controlador para obtener todas las Rols
const getAllRols = async (req, res) => {
  try {
    const allRols = await Rol.findAll();
    res.json(allRols);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron obtener las Rols' });
  }
};

// Controlador para actualizar una Rol por su ID
const updateRolById = async (req, res) => {
  try {
    const rolId = req.params.id;
    const updatedRolData = req.body;

    const rol = await Rol.findByPk(rolId);

    if (!rol) {
      return res.status(404).json({ error: 'Tarea no encontrada.' });
    }

    await rol.update(updatedRolData);

    return res.status(200).json({ message: 'Tarea actualizada con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la Rol.' });
  }
};

// Controlador para eliminar una Rol por su ID
const deleteRolById = async (req, res) => {
  try {
    const rolId = req.params.id;

    const rol = await Rol.findByPk(rolId);

    if (!rol) {
      return res.status(404).json({ error: 'Tarea no encontrada.' });
    }

    await rol.destroy();

    return res.status(200).json({ message: 'Tarea eliminada con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la Rol.' });
  }
};

module.exports = {
  createRol,
  getAllRols,
  updateRolById,
  deleteRolById,
};
