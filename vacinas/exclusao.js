// vacinas/exclusao.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const pessoas = [];

app.delete('/pessoas/:id/vacinas/exclusao', (req, res) => {
  const pessoaId = req.params.id;
  const vacinaParaExcluir = req.body;

  const pessoaExistente = pessoas.find((pessoa) => pessoa.id === pessoaId);

  if (!pessoaExistente) {
    return res.status(404).json({ mensagem: 'Pessoa não encontrada.' });
  }

  if (!pessoaExistente.vacinas) {
    return res.json({ mensagem: 'A pessoa não possui vacinas cadastradas.' });
  }

  pessoaExistente.vacinas = pessoaExistente.vacinas.filter(
    (vacina) => vacina.nome !== vacinaParaExcluir.nome
  );

  res.json({ mensagem: 'Vacina excluída com sucesso.' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
