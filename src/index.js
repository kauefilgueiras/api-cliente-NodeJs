const express = require('express');
const {param} = require("express/lib/router");

const app = express();

app.use(express.json());

app.post('/cliente', (req, res)=>{
    const {id} = req.params;
    const {nome, telefone, idade, profissao, email} = req.body;
    res.json({
            "nome": nome,
            "telefone": telefone,
            "idade": idade,
            "profissao": profissao,
            "email": email})
});
app.post('/cliente/:id', (req, res)=>{
    const {id} = req.params;
    res.send('O parâmetro de rota enviado foi: ' + id);
});

app.delete('/excluirCliente/:id', (req, res) => {
    const {id} = req.params;
    res.send("Cliente ID " + id + " foi excluído com sucesso!");
});

app.put ('/cliente/:id', (req, res)=>{
    const {id} = req.params;
    const {nome, telefone, idade, profissao, email} = req.body;
    res.json({
        "nome": nome,
        "telefone": telefone,
        "idade": idade,
        "profissao": profissao,
        "email": email})
});

app.get('/cliente/:id',(req, res)=>{
    const {id} = req.params;
    const {nome, telefone, idade, profissao, email} = req.body;
    res.json({
        "nome": nome,
        "telefone": telefone,
        "idade": idade,
        "profissao": profissao,
        "email": email})
});

app.listen(7777, () => {
    console.log('Servidor Backend em execução...');
});

