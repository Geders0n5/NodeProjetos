const porta = 8282;
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

// Config
    // Template Engine - Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    // Body Parser
        app.use(bodyParser.urlencoded({extended:false}));
        app.use(bodyParser.json());

// Rotas
    //GET
    app.get('/', function(req, res) {
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home', {posts: posts});
        });
    });

    app.get('/post', function(req, res) {
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('post', {posts: posts});
        });
    });

    app.get('/cadastro', function(req, res){
        res.render('formulario');
    });

    app.get('/deletar/:id', function(req, res) {
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.send("Postagem deletada com sucesso!<br><a href='/'><button>Visualizar Posts</button></a>");
        }).catch(function(erro) {
            res.send("Esta postagem não existe!", erro);
        });
    });
    //POST
    app.post('/dados', function(req, res) {
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function() {
            res.redirect('/');
        }).catch(function(erro) {
            res.send(`Erro ao criar o post:<br>${erro}`);
        });
    });
// Conexão da Rota
app.listen(porta, function() {
    console.log(`Servidor rodando na URL http://localhost:${porta}/cadastro`);
})