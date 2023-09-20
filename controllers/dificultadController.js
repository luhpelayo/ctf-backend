const Dificultad = require('../models/Dificultad');

// Controlador para crear una nueva Dificultad
const createDificultad = async (req, res) => {
  try {
    const newDificultad = req.body;
    const dificultad = await Dificultad.create(newDificultad);
    res.status(201).json(dificultad);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo crear la Dificultad' });
  }
};

// Controlador para obtener todas las Dificultads
const getAllDificultads = async (req, res) => {
  try {
    const allDificultads = await Dificultad.findAll();
    res.json(allDificultads);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron obtener las Dificultads' });
  }
};

// Controlador para actualizar una Dificultad por su ID
const updateDificultadById = async (req, res) => {
  try {
    const dificultadId = req.params.id;
    const updatedDificultadData = req.body;

    const dificultad = await Dificultad.findByPk(dificultadId);

    if (!dificultad) {
      return res.status(404).json({ error: 'Tarea no encontrada.' });
    }

    await dificultad.update(updatedDificultadData);

    return res.status(200).json({ message: 'Tarea actualizada con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la Dificultad.' });
  }
};

// Controlador para eliminar una Dificultad por su ID
const deleteDificultadById = async (req, res) => {
  try {
    const dificultadId = req.params.id;

    const dificultad = await Dificultad.findByPk(dificultadId);

    if (!dificultad) {
      return res.status(404).json({ error: 'Tarea no encontrada.' });
    }

    await dificultad.destroy();

    return res.status(200).json({ message: 'Tarea eliminada con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la Dificultad.' });
  }
};

module.exports = {
  createDificultad,
  getAllDificultads,
  updateDificultadById,
  deleteDificultadById,
};
