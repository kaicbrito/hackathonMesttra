const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const pessoas = [];

app.post('/cadastro', (req, res) => {
  const novaPessoa = req.body;
  pessoas.push(novaPessoa);
  res.json({ mensagem: 'Pessoa cadastrada com sucesso.' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
