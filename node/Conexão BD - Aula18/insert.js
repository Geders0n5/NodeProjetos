var banco = 'dbnode'
var usuario = 'root'
var senha = 'masterkey'
var insert = require("./create")

const Sequelize = require('sequelize');
const sequelize = new Sequelize(banco, usuario, senha, {
    host: 'localhost',
    dialect: 'mysql'
});

insert.Postagem.create({
    titulo: 'TITULO TESTE1',
    conteudo: `Banco1: ${banco}; Usuario1: ${usuario}; Senha1: ${senha}`
});

insert.Usuario.create({
    nome: 'Gederson1',
    sobrenome: 'Carvalho1',
    idade: 27,
    email: 'gederson.carvalho105@gmail.com'
});
