// vacinas/cadastro.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const pessoas = [];

app.post('/pessoas/:id/vacinas/cadastro', (req, res) => {
  const pessoaId = req.params.id;
  const novaVacina = req.body;

  const pessoaExistente = pessoas.find((pessoa) => pessoa.id === pessoaId);

  if (!pessoaExistente) {
    return res.status(404).json({ mensagem: 'Pessoa não encontrada.' });
  }

  if (!pessoaExistente.vacinas) {
    pessoaExistente.vacinas = [];
  }

  pessoaExistente.vacinas.push(novaVacina);
  res.json({ mensagem: 'Vacina cadastrada com sucesso.' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
