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

app.get('/vacinas/pesquisaPorMes/ate/:mes', (req, res) => {
  const mesLimite = req.params.mes;

  const vacinasAteMes = vacinas.filter((vacina) => {
    const mesFinal = vacina.periodoDeAplicacao.split(' ')[1];
    return mesFinal <= mesLimite;
  });

  res.json(vacinasAteMes);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
