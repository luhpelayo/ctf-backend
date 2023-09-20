const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contactoController'); // Utiliza require en lugar de import

router.get('/', contactoController.getContactos);

router.post('/', contactoController.addContacto);

router.put('/:id', contactoController.updateContacto);

router.delete('/:id', contactoController.deleteContacto);

module.exports = router; // Exporta el router utilizando module.exports
