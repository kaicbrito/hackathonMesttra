// vacinas/pesquisaPorProtecao.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const vacinas = [
  {
    nome: 'Vacina A',
    protecao: 'Proteção contra doença X',
    periodoDeAplicacao: '2023-01-01 a 2023-12-31',
    rede: 'Rede de Saúde A',
  },
  {
    nome: 'Vacina B',
    protecao: 'Proteção contra doença Y',
    periodoDeAplicacao: '2023-02-01 a 2023-11-30',
    rede: 'Rede de Saúde B',
  },
];

app.get('/vacinas/pesquisaPorProtecao/:protecao', (req, res) => {
  const protecao = req.params.protecao.toLowerCase();

  const vacinasComProtecao = vacinas.filter(
    (vacina) => vacina.protecao.toLowerCase().includes(protecao)
  );

  res.json(vacinasComProtecao);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
