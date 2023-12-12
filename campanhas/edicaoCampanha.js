// campanhas/edicaoCampanha.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const campanhas = [];

app.put('/campanhas/edicao/:id', (req, res) => {
  const campanhaId = req.params.id;
  const dadosAtualizados = req.body;

  const campanhaExistente = campanhas.find((campanha) => campanha.id === campanhaId);

  if (!campanhaExistente) {
    return res.status(404).json({ mensagem: 'Campanha não encontrada.' });
  }

  Object.assign(campanhaExistente, dadosAtualizados);
  res.json({ mensagem: 'Campanha atualizada com sucesso.' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
