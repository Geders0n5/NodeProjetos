//importação do modulo connect
const db = require('./connect');

//Definição da tabela - Banco de Dados

//tbpostagens
const tablePostagem = db.sequelize.define('tbpostagens',{
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

//Criação da Tabela

tablePostagem.sync({force: false});
module.exports = tablePostagem;


