// vacinas/vacinasPendentes.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const vacinas = [
  {
    idPaciente: '123',
    nome: 'Vacina A',
    dataAplicacao: '2023-01-15',
    rede: 'Rede de Saúde A',
  },
  {
    idPaciente: '123',
    nome: 'Vacina B',
    dataAplicacao: '2023-05-20',
    rede: 'Rede de Saúde B',
  },
  {
    idPaciente: '456',
    nome: 'Vacina C',
    rede: 'Rede de Saúde C',
  },
];

app.get('/vacinas/vacinasPendentes/:idPaciente', (req, res) => {
  const idPaciente = req.params.idPaciente;

  const vacinasPendentes = vacinas.filter(
    (vacina) => vacina.idPaciente === idPaciente && !vacina.dataAplicacao
  );

  res.json(vacinasPendentes);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
