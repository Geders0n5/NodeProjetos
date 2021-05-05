let nomeBanco = 'dbJogoBicho'
let usuario = 'sa'
let senha = 'masterkey'
const Sequelize = require("sequelize")
const sequelize = new Sequelize (nomeBanco, usuario, senha, {
    host: "localhost",
    dialect: 'sql server'
})

sequelize.authenticate().then(function () {
    console.log("Conectado com sucesso!")    
}).catch(function (erro) {
    console.log("Falha na conexão: "+erro)
})