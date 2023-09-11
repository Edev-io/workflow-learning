const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Rota principal que retorna "Hello, World!"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Iniciar o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
