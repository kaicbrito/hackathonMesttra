// C:\Users\dev\Desktop\API\src\models\posto.js

'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Posto extends Model {}
  Posto.init({
    endereco: DataTypes.STRING,
    // Outros campos do modelo, se houver
  }, {
    sequelize,
    modelName: 'Posto',
  });

  return Posto;
};
