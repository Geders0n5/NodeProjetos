const banco = 'PostApp';
const usuario = 'root';
const senha = 'masterkey';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(banco, usuario, senha, {
    host: 'localhost',
    dialect: 'mysql'
}); 

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}