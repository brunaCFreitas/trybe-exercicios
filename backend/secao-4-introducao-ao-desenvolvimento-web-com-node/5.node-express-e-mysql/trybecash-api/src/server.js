const app = require('./app');

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`API Trybecash está sendo executada na porta ${PORT}`);
});