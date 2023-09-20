const Submision = require('../models/Submision');

// Controlador para crear una nueva submision
const createSubmision = async (req, res) => {
  try {
    const newSubmision = req.body;
    const submision = await Submision.create(newSubmision);
    res.status(201).json(submision);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo crear la submision' });
  }
};

// Controlador para obtener todas las submisions
const getAllSubmisions = async (req, res) => {
  try {
    const allSubmisions = await Submision.findAll();
    res.json(allSubmisions);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron obtener las submisions' });
  }
};

// Controlador para actualizar una submision por su ID
const updateSubmisionById = async (req, res) => {
  try {
    const submisionId = req.params.id;
    const updatedSubmisionData = req.body;

    const submision = await Submision.findByPk(submisionId);

    if (!submision) {
      return res.status(404).json({ error: 'Tarea no encontrada.' });
    }

    await submision.update(updatedSubmisionData);

    return res.status(200).json({ message: 'Tarea actualizada con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la submision.' });
  }
};

// Controlador para eliminar una submision por su ID
const deleteSubmisionById = async (req, res) => {
  try {
    const submisionId = req.params.id;

    const submision = await Submision.findByPk(submisionId);

    if (!submision) {
      return res.status(404).json({ error: 'Tarea no encontrada.' });
    }

    await submision.destroy();

    return res.status(200).json({ message: 'Tarea eliminada con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la submision.' });
  }
};

module.exports = {
  createSubmision,
  getAllSubmisions,
  updateSubmisionById,
  deleteSubmisionById,
};
