// src/routes/vacinasRoutes.js
const express = require('express');
const router = express.Router();

const cadastroVacinaController = require('../vacinas/cadastroVacina');
const edicaoVacinaController = require('../vacinas/edicaoVacina');
const cadastroPeriodoPorAnoController = require('../vacinas/cadastroPeriodoPorAno');
const remocaoPeriodoPorAnoController = require('../vacinas/remocaoPeriodoPorAno');
const cadastroPeriodoPorMesController = require('../vacinas/cadastroPeriodoPorMes');
const remocaoPeriodoPorMesController = require('../vacinas/remocaoPeriodoPorMes');

router.post('/cadastro', cadastroVacinaController);
router.put('/edicao/:id', edicaoVacinaController);
router.post('/cadastroPeriodoPorAno/:id', cadastroPeriodoPorAnoController);
router.delete('/remocaoPeriodoPorAno/:vacinaId/:periodoId', remocaoPeriodoPorAnoController);
router.post('/cadastroPeriodoPorMes/:id', cadastroPeriodoPorMesController);
router.delete('/remocaoPeriodoPorMes/:vacinaId/:periodoId', remocaoPeriodoPorMesController);

module.exports = router;
