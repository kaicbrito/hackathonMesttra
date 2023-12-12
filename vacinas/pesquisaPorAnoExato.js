// vacinas/pesquisaPorAno.js
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

app.get('/vacinas/pesquisaPorAno/exato/:ano', (req, res) => {
  const ano = req.params.ano;

  const vacinasDoAno = vacinas.filter((vacina) => vacina.periodoDeAplicacao.includes(ano));

  res.json(vacinasDoAno);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

