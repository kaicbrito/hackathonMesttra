// src/routes/pessoasRoutes.js
const express = require('express');
const router = express.Router();

const cadastroController = require('../pessoas/cadastro');
const atualizacaoController = require('../pessoas/atualizacao');
const pesquisaController = require('../pessoas/pesquisa');
const pesquisaPorPacienteController = require('../pessoas/pesquisaPorPaciente');
const vacinasPendentesController = require('../pessoas/vacinasPendentes');
const consultaController = require('../pessoas/consulta');
const pesquisaPorProtecaoController = require('../pessoas/pesquisaPorProtecao');

router.post('/cadastro', cadastroController);
router.put('/atualizacao/:id', atualizacaoController);
router.get('/pesquisa/:id', pesquisaController);
router.get('/pesquisaPorPaciente/:idPaciente', pesquisaPorPacienteController);
router.get('/vacinasPendentes/:idPaciente', vacinasPendentesController);
router.get('/consulta/:id', consultaController);
router.get('/pesquisaPorProtecao/:protecao', pesquisaPorProtecaoController);

module.exports = router;
