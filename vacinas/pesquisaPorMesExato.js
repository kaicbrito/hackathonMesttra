// vacinas/pesquisaPorMes.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const vacinas = [
  {
    nome: 'Vacina A',
    periodoDeAplicacao: '2023-01-01 a 2023-12-31',
    rede: 'Rede de Saúde A',
  },
  {
    nome: 'Vacina B',
    periodoDeAplicacao: '2023-02-01 a 2023-11-30',
    rede: 'Rede de Saúde B',
  },
];

app.get('/vacinas/pesquisaPorMes/exato/:mes', (req, res) => {
  const mes = req.params.mes;

  const vacinasDoMes = vacinas.filter((vacina) => vacina.periodoDeAplicacao.includes(`-${mes}-`));

  res.json(vacinasDoMes);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
