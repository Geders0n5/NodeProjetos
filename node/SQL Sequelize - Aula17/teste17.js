var banco = 'dbNode';
var usuario = 'root';
var senha = 'masterkey';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(banco, usuario, senha, {
    host: 'localhost',
    dialect: 'mysql'
});
 sequelize.authenticate().then(function () {
     console.log(`Conectado no banco ${banco} com sucesso.`);
 }).catch(function (erro) {
     console.log(`Falha na conexão no banco ${banco} \n${erro}`);
 })