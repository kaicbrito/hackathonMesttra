// vacinas/remocaoPeriodoPorMes.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const vacinas = [];

app.delete('/vacinas/remocaoPeriodoPorMes/:vacinaId/:periodoId', (req, res) => {
  const vacinaId = req.params.vacinaId;
  const periodoId = req.params.periodoId;

  const vacinaExistente = vacinas.find((vacina) => vacina.id === vacinaId);

  if (!vacinaExistente) {
    return res.status(404).json({ mensagem: 'Vacina não encontrada.' });
  }

  if (!vacinaExistente.periodosPorMes) {
    return res.json({ mensagem: 'A vacina não possui períodos por mês cadastrados.' });
  }

  vacinaExistente.periodosPorMes = vacinaExistente.periodosPorMes.filter(
    (periodo) => periodo.id !== periodoId
  );

  res.json({ mensagem: 'Período por mês removido com sucesso.' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
