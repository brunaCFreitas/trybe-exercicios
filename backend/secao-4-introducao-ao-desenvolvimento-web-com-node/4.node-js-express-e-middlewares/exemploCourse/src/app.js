const express = require('express');
const fs = require('fs').promises;
const app= express();
const PORT = 3004;
app.use(express.json());

// métodos HTTP
app.get('/teams', async (_req, res, next) => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, './teams.json'));
    const teams = JSON.parse(data);
    return res.status(200).json({ teams });
  } catch (error) {
    next(error);
  }
});

app.use((error, _req, res, _next) => {
  return res.status(500).json({ error: error.message });
});

// subindo o server
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));