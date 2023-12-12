// vacinas/pesquisaPorPaciente.js
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
    dataAplicacao: '2023-02-10',
    rede: 'Rede de Saúde C',
  },
];

app.get('/vacinas/pesquisaPorPaciente/:idPaciente', (req, res) => {
  const idPaciente = req.params.idPaciente;

  const vacinasDoPaciente = vacinas.filter((vacina) => vacina.idPaciente === idPaciente);

  res.json(vacinasDoPaciente);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
