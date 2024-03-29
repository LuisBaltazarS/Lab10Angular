//Rutas producto
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//api/usuario
router.post('/create', userController.crearUsuario);
router.post('/', userController.obtenerUsuario);

module.exports = router;