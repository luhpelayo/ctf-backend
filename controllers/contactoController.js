const Usuario = require('../models/Contactos'); 

const getContactos = async (_, res) => {
  try {
    const contactos = await Contacto.findAll();
    return res.status(200).json(contactos);
  } catch (error) {
    return res.json(error);
  }
};

const addContacto = async (req, res) => {
  try {
    const nuevoContacto = await Contacto.create({
      nombre: req.body.nombre,
      email: req.body.email, 
      fone: req.body.fone,  
      data_nascimento: req.body.data_nascimento, 
    });
    return res.status(200).json('Contacto creado con éxito.');
  } catch (error) {
    return res.json(error);
  }
};

const updateContacto = async (req, res) => {
  try {
    const contacto = await Contacto.findByPk(req.params.id);
    if (!contacto) {
      return res.status(404).json('Contacto no encontrado.');
    }

    await contacto.update({
      nombre: req.body.nombre,
      email: req.body.email, 
      fone: req.body.fone,  
      data_nascimento: req.body.data_nascimento, 
    });

    return res.status(200).json('Contacto actualizado con éxito.');
  } catch (error) {
    return res.json(error);
  }
};

const deleteContacto = async (req, res) => {
  try {
    const contacto = await Contacto.findByPk(req.params.id);
    if (!contacto) {
      return res.status(404).json('Contacto no encontrado.');
    }

    await contacto.destroy();

    return res.status(200).json('Contacto eliminado con éxito.');
  } catch (error) {
    return res.json(error);
  }
};

module.exports = { getContactos, addContacto, updateContacto, deleteContacto }; 
