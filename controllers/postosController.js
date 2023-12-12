// controllers/postosController.js
const { Posto } = require('../db/db');

// Cadastro de posto
const cadastrarPosto = async (req, res) => {
  try {
    const { endereco, rede } = req.body;
    const novoPosto = await Posto.create({ endereco, rede });
    res.status(201).json(novoPosto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao cadastrar o posto.' });
  }
};

// Pesquisa de posto por endereço
const pesquisarPostoPorEndereco = async (req, res) => {
  try {
    const endereco = req.params.endereco;
    const posto = await Posto.findOne({ where: { endereco } });

    if (!posto) {
      return res.status(404).json({ mensagem: 'Posto não encontrado.' });
    }

    res.json(posto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao pesquisar o posto.' });
  }
};

module.exports = { cadastrarPosto, pesquisarPostoPorEndereco };
