const banco = 'dbNode';
const usuario = 'root';
const senha = 'masterkey';
const porta = 8282;
const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

// Config 

    // Conexão com o Banco de dados - dbNode
    const sequelize = new Sequelize(banco, usuario, senha, {
        host: 'localhost',
        dialect: 'mysql'
    }); 
    
    // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    //Body-Parser
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
//Conexão - Rota
    app.get('/cadastro', function (req, res) {
        res.render('formulario');
    });

    app.post('/dados', function(req, res) {
        res.send(`Texto: ${req.body.titulo} <br> Conteudo: ${req.body.conteudo}`);
    })

app.listen(porta, function () {
    console.log(`Servidor rodando na URL http://localhost:${porta}`);
})