// Configuração do Express
const express = require('express');
const app = express();

// Essa é a forma de implementar este endpoint
app.get('/', (req, res) => {
    res.sendFile('views/index.html', { root: __dirname })
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor foi iniciado na porta 3000');
});