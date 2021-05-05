const express = require("express")
const app = express()
const porta = 8282


app.get("/",function (req, res) {
    //res.send("Seja bem vindo ao meu site")
    res.sendFile(__dirname+"/html/index.html")
    //res.sendFile("")
})


app.get("/sobre", function (req, res) {
    res.send("Meu sobre")
})

app.get("/blog", function (req, res) {
    res.send("Meu Blog")
})

app.get("/param::nome;:idade;:sexo", function (req, res) {
    res.send(req.params)
})

app.listen(porta, function () {
    console.log(`Servidor rodando na URL http://localhost:${porta}`)
})