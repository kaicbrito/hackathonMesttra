// src/routes/campanhasRoutes.js
const express = require('express');
const router = express.Router();

const cadastroCampanhaController = require('../campanhas/cadastroCampanha');
const edicaoCampanhaController = require('../campanhas/edicaoCampanha');
const cadastroVacinaEmCampanhaController = require('../campanhas/cadastroVacinaEmCampanha');
const exclusaoVacinaDeCampanhaController = require('../campanhas/exclusaoVacinaDeCampanha');
const pesquisaCampanhaPorDataController = require('../campanhas/pesquisaCampanhaPorData');
const pesquisaCampanhaPorProtecaoController = require('../campanhas/pesquisaCampanhaPorProtecao');

router.post('/cadastro', cadastroCampanhaController);
router.put('/edicao/:id', edicaoCampanhaController);
router.post('/cadastroVacina/:id', cadastroVacinaEmCampanhaController);
router.delete('/exclusaoVacina/:campanhaId/:vacinaId', exclusaoVacinaDeCampanhaController);
router.get('/pesquisaPorData/:data', pesquisaCampanhaPorDataController);
router.get('/pesquisaPorProtecao/:protecao', pesquisaCampanhaPorProtecaoController);

module.exports = router;
