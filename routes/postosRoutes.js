// routes/postosRoutes.js
const express = require('express');
const router = express.Router();
const postosController = require('../controllers/postosController.js');

router.post('/cadastro', postosController.cadastrarPosto);
router.get('/pesquisa/:endereco', postosController.pesquisarPostoPorEndereco);

module.exports = router;
