const express = require('express');
const bodyParser = require('bodyParser');
const fetch = require ('node-fetch');

const app = express();

app.use(bodyParser.urlecoded({ extended: false }))
app.use(bodyParser.json())

app.get('http://localhost:8080/#/paginas/incricao.html', function (req, re) {
    fetch('http://localhost:8080/#/paginas/incricao.html', {method: 'GET'})
    .then(resposta => resposta.json())
    .then(resposta => res.render({users:resposta}))
});

app.post('/users', function (req, res){
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.email;

    const dados = {'nome':nome, 'email':email, 'telefone': telefone};

    fetch('http://localhost:8080/#/paginas/incricao.html', {
        method:'POST',
        body: JSON.stringify(dados),
        headers:{'Content-Type':'application/json'}
    })
    .then(resp.redirect('http://192.168.0.16:8080/#/paginas/inscricao.html'));
})

app.listen(8081, () => {
    console.log('Backend execultando...')
})

//app.post('/users', function(req, res){
    //const users = {
        //nome: req.body.nome,
        //email: req.body.email,
        //telefone: req.body.telefone
    //}.then(function(){
        //resp.redirect('http://192.168.0.16:8080/#/paginas/inscricao.html')
    //}).catch(function(erro){
        //resp.send('Erro: tente mais tarde' + erro)
    //})
//})
