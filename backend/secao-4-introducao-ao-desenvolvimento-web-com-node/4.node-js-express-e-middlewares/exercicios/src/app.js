const express = require('express');
const validateDificulty = require('./middlewares/validateDificulty');
const validateRating = require('./middlewares/validateRating');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateDescription = require('./middlewares/validateDescription');
const validatePrice = require('./middlewares/validatePrice');
const validateName = require('./middlewares/validateName');

const app = express();

app.use(express.json());

// endpoint para adicionar novas atividades
app.post('/activities',
  validateDificulty,
  validateRating,
  validateCreatedAt,
  validateDescription,
  validatePrice,
  validateName,
  (_req, res) => {
  res.status(201).json({ message: 'Atividade criada com sucesso!' });
});

module.exports = app;