var banco = 'dbNode';
var usuario = 'root';
var senha = 'masterkey';

const Sequelize = require('sequelize');
const sequelize = new Sequelize(banco, usuario, senha, {
    host: 'localhost',
    dialect: 'mysql'
});

const Postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
});

//Postagem.sync({force: true});
exports.Postagem = Postagem;

const Usuario = sequelize.define('usuario',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
});

//Usuario.sync({force:true});
exports.Usuario = Usuario;