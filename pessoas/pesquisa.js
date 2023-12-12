const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const pessoas = [];

app.get('/pesquisa', (req, res) => {
  const criterios = req.query;

  if (Object.keys(criterios).length === 0) {
    return res.status(400).json({ mensagem: 'Fornecer critérios de pesquisa válidos.' });
  }

  const resultados = pessoas.filter((pessoa) => {
    return Object.keys(criterios).every((criterio) => pessoa[criterio] === criterios[criterio]);
  });

  res.json(resultados);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
