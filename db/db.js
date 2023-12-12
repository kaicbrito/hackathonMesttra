// db.js
const { Sequelize } = require('sequelize');
const PostoModel = require('../models/posto');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'itcpostgresql.postgres.database.azure.com',
  username: 'bertha',
  password: '%&unsas_aew27002',
  database: 'db002',
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
