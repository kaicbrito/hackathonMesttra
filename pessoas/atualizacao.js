const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const pessoas = [];

app.put('/atualizacao/:id', (req, res) => {
  const pessoaId = req.params.id;
  const dadosAtualizados = req.body;

  const pessoaExistente = pessoas.find((pessoa) => pessoa.id === pessoaId);

  if (!pessoaExistente) {
    return res.status(404).json({ mensagem: 'Pessoa não encontrada.' });
  }

  Object.assign(pessoaExistente, dadosAtualizados);
  res.json({ mensagem: 'Pessoa atualizada com sucesso.' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
