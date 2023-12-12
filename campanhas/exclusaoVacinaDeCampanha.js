// campanhas/exclusaoVacinaDeCampanha.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const campanhas = [];

app.delete('/campanhas/exclusaoVacina/:campanhaId/:vacinaId', (req, res) => {
  const campanhaId = req.params.campanhaId;
  const vacinaId = req.params.vacinaId;

  const campanhaExistente = campanhas.find((campanha) => campanha.id === campanhaId);

  if (!campanhaExistente) {
    return res.status(404).json({ mensagem: 'Campanha não encontrada.' });
  }

  if (!campanhaExistente.vacinas) {
    return res.json({ mensagem: 'A campanha não possui vacinas cadastradas.' });
  }

  campanhaExistente.vacinas = campanhaExistente.vacinas.filter((vacina) => vacina.id !== vacinaId);

  res.json({ mensagem: 'Vacina removida da campanha com sucesso.' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
