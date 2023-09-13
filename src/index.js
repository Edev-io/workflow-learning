const createUser = require('./services/users.service');
const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/users', (req, res) => {
  const { name, surName, age } = req.body;
  const users = createUser({ name, surName, age });
  return res.json(users).send();
});

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));

module.exports = app;
