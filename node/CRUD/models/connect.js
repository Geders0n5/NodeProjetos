//Constantes de conexão
const banco = 'dbCRUD';
const host = 'localhost';
const usuario = 'root';
const senha = 'masterkey';

//Configuração do SEQUELIZE
const Sequelize = require('sequelize');
const sequelize = new Sequelize(banco, usuario, senha, {
    host: host,
    dialect: 'mysql'
});

//Exportação do SEQUELIZE
module.exports={
    Sequelize: Sequelize,
    sequelize: sequelize
}

//Teste de conexão com o Banco de Dados
sequelize.authenticate().then(function () {
    console.log(`Conectado no banco ${banco} com sucesso.`);
}).catch(function (erro) {
    console.log(`Falha na conexão com banco ${banco} \n${erro}`);
});
