const Pregunta = require('../models/Pregunta');

// Controlador para crear una nueva tarea
const createPregunta = async (req, res) => {
  try {
    const newPregunta = req.body;
    const pregunta = await Pregunta.create(newPregunta);
    res.status(201).json(pregunta);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo crear la tarea' });
  }
};

// Controlador para obtener todas las tareas
const getAllPreguntas = async (req, res) => {
  try {
    const allPreguntas = await Pregunta.findAll();
    res.json(allPreguntas);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron obtener las tareas' });
  }
};

// Controlador para actualizar una tarea por su ID
const updatePreguntaById = async (req, res) => {
  try {
    const preguntaId = req.params.id;
    const updatedPreguntaData = req.body;

    const pregunta = await Pregunta.findByPk(preguntaId);

    if (!pregunta) {
      return res.status(404).json({ error: 'pregunta no encontrada.' });
    }

    await pregunta.update(updatedPreguntaData);

    return res.status(200).json({ message: 'pregunta actualizada con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la tarea.' });
  }
};

// Controlador para eliminar una tarea por su ID
const deletePreguntaById = async (req, res) => {
  try {
    const preguntaId = req.params.id;

    const pregunta = await Pregunta.findByPk(preguntaId);

    if (!pregunta) {
      return res.status(404).json({ error: 'pregunta no encontrada.' });
    }

    await pregunta.destroy();

    return res.status(200).json({ message: 'pregunta eliminada con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la tarea.' });
  }
};

module.exports = {
  createPregunta,
  getAllPreguntas,
  updatePreguntaById,
  deletePreguntaById,
};
