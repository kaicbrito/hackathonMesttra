// vacinas/pesquisa.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const pessoas = [];

app.get('/pessoas/:id/vacinas/pesquisa', (req, res) => {
  const pessoaId = req.params.id;

  const pessoaExistente = pessoas.find((pessoa) => pessoa.id === pessoaId);

  if (!pessoaExistente) {
    return res.status(404).json({ mensagem: 'Pessoa não encontrada.' });
  }

  const vacinasDaPessoa = pessoaExistente.vacinas || [];

  res.json(vacinasDaPessoa);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
