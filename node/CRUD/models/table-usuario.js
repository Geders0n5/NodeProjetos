const db = require('./connect');

//Definição da tabela - Banco de Dados
//tbusuario

const tableUsuario = db.sequelize.define('tbusuarios',{
    cpf: {
        allowNull: false,
        primaryKey: true,
        type: db.Sequelize.STRING
    },
    nome: {
        allowNull: false,
        type: db.Sequelize.STRING
    },
    email: {
        allowNull: false,
        type: db.Sequelize.STRING
    },
    senha: {
        allowNull: false,
        type: db.Sequelize.STRING
    }
});

tableUsuario.sync({force: false});
module.exports = tableUsuario;