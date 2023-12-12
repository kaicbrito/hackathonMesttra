// campanhas/cadastroCampanha.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const campanhas = [];

app.post('/campanhas/cadastro', (req, res) => {
  const novaCampanha = req.body;
  campanhas.push(novaCampanha);
  res.json({ mensagem: 'Campanha cadastrada com sucesso.' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
