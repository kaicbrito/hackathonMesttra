// vacinas/cadastroPeriodoPorMes.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const vacinas = [];

app.post('/vacinas/cadastroPeriodoPorMes/:id', (req, res) => {
  const vacinaId = req.params.id;
  const novoPeriodoPorMes = req.body;

  const vacinaExistente = vacinas.find((vacina) => vacina.id === vacinaId);

  if (!vacinaExistente) {
    return res.status(404).json({ mensagem: 'Vacina não encontrada.' });
  }

  if (!vacinaExistente.periodosPorMes) {
    vacinaExistente.periodosPorMes = [];
  }

  vacinaExistente.periodosPorMes.push(novoPeriodoPorMes);
  res.json({ mensagem: 'Período por mês cadastrado com sucesso.' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
