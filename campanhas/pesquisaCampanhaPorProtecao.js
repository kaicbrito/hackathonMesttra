// campanhas/pesquisaCampanhaPorProtecao.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const campanhas = [];

app.get('/campanhas/pesquisaPorProtecao/:protecao', (req, res) => {
  const protecao = req.params.protecao.toLowerCase();

  const campanhasComProtecao = campanhas.filter(
    (campanha) => campanha.protecao.toLowerCase().includes(protecao)
  );

  res.json(campanhasComProtecao);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
