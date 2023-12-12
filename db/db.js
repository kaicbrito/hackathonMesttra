// db.js
const { Sequelize } = require('sequelize');
const PostoModel = require('../models/posto');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: '',
  username: '',
  password: '',
  database: '',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

const Posto = PostoModel(sequelize);

sequelize.sync(); // Isso cria as tabelas no banco de dados se não existirem.

module.exports = { Posto };
