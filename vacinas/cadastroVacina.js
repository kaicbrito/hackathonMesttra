// vacinas/cadastroVacina.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const vacinas = [];

app.post('/vacinas/cadastro', (req, res) => {
  const novaVacina = req.body;
  vacinas.push(novaVacina);
  res.json({ mensagem: 'Vacina cadastrada com sucesso.' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
