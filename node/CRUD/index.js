const porta = 5050;
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Post = require('./models/table-post');
const User = require('./models/table-usuario');


// Configurações
// Template Engine
// Handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Rotas de Acesso
// GET
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/cadastro', function (req, res) {
    res.render('cadastro');
});

app.get('/cadastroPost', function (req, res) {
    res.render('formulario');
});

app.get('/estilo.css', function (req, res) {
    res.sendFile(__dirname + "/views/css/estilo.css");
});

app.get('/css/estilo.css', function (req, res) {
    res.sendFile(__dirname + "/views/css/estilo.css");
});

app.get('/js/script.js', function (req, res) {
    res.sendFile(__dirname + "/views/js/script.js");
});

app.get('/post', function (req, res) {
    Post.findAll({ order: [['id', 'DESC']] }).then(function (posts) {
        res.render('post', { posts: posts });
    });
});

app.get('/deletar/:id', function (req, res) {
    Post.destroy({ where: { 'id': req.params.id } }).then(function () {
        res.send("Postagem deletada com sucesso!<br><a href='/post'><button>Visualizar Posts</button></a>");
    }).catch(function (erro) {
        res.send("Esta postagem não existe!", erro);
    });
});


//POST
app.post('/post', function (req, res) {
    Post.findAll({ order: [['id', 'DESC']] }).then(function (posts) {
        res.render('post', { posts: posts });
    });
});

app.post('/dados', function (req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function () {
        res.redirect('/post');
    }).catch(function (erro) {
        res.send(`Erro ao criar o post:<br>${erro}`);
    });
});

app.post('/user', function (req, res) {
    User.create({
        cpf: req.body.nCpf,
        nome: req.body.nNome,
        email: req.body.nEmail,
        senha: req.body.nSenha
    }).then(function () {
        res.redirect('/');
    }).catch(function (erro) {
        res.send(`Erro ao cadastrar usuario:<br>${erro}<br><a href='/cadastro'><button>Retornar</button></a>`);
    });
});

app.post('/atualizaPost/:id', function (req, res) {
    var testeId = req.params.id
    Post.update({titulo: req.body.tituloMod, conteudo: req.body.conteudoMod }, {
        where: {
            'id': req.params.id
        }
    }).then(function () {
        res.redirect('/post');
    }).catch(function (erro) {
        res.send(`${testeId}<br>Erro ao atualizar o post:<br>${erro}
        <br><a href='/post'><button>Retornar</button></a>`);
    });
});

// Conexão com a Aplicação
app.listen(porta, function () {
    console.log(`Servidor rodando na URL http://localhost:${porta}/`);
});