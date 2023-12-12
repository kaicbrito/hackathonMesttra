const express = require('express');
const bodyParser = require('body-parser');
const postosRoutes = require('./routes/postosRoutes.js');
const { Posto } = require('./models/index.js');

const app = express();
const port = 3000;



app.use(bodyParser.json());
app.use('/postos', postosRoutes);

// Exemplo de rota para listar todos os postos
app.get('/postos', async (req, res) => {
  try {
    const postos = await Posto.findAll();
    res.json(postos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar os postos.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
