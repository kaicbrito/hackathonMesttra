// campanhas/cadastroVacinaEmCampanha.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const campanhas = [];

app.post('/campanhas/cadastroVacina/:id', (req, res) => {
  const campanhaId = req.params.id;
  const novaVacina = req.body;

  const campanhaExistente = campanhas.find((campanha) => campanha.id === campanhaId);

  if (!campanhaExistente) {
    return res.status(404).json({ mensagem: 'Campanha não encontrada.' });
  }

  if (!campanhaExistente.vacinas) {
    campanhaExistente.vacinas = [];
  }

  campanhaExistente.vacinas.push(novaVacina);
  res.json({ mensagem: 'Vacina adicionada à campanha com sucesso.' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
