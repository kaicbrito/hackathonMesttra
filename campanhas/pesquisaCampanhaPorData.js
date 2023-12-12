// campanhas/pesquisaCampanhaPorData.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const campanhas = [];

app.get('/campanhas/pesquisaPorData/:data', (req, res) => {
  const data = req.params.data;

  const campanhasDoDia = campanhas.filter((campanha) => campanha.data === data);

  res.json(campanhasDoDia);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
