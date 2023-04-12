const express = require('express');
const validateName = require('./middlewares/validateName');

const app = express();

app.use(express.json());

// endpoint para adicionar novas atividades
app.post('/activities', validateName, (_req, res) => {
  res.status(201).json({ message: 'Atividade criada com sucesso!' });
});

module.exports = app;