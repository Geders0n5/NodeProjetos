const { sequelize } = require("../../PostApp - Aula20/models/db")

const banco = 'dbJogoBicho';
const usuario = 'sa';
const senha = 'masterkey';
const Sequelize = require('sequelize');

const sequelize = new Sequelize(banco, usuario, senha, {
    dialect: 'postgres',
  });

sequelize.authenticate().then(function () {
    console.log(`Conectado no banco ${banco} com sucesso.`);
}).catch(function (erro) {
    console.log(`Falha na conexão no banco ${banco} \n${erro}`);
})