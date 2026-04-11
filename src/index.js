const express = require('express');
const calc = require('./calc');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('🚀 Node rodando no Docker!');
});

// ➕ Soma
app.get('/somar', (req, res) => {
  const { a, b } = req.query;
  const resultado = calc.somar(Number(a), Number(b));
  res.json({ resultado });
});

// ➖ Subtração
app.get('/subtrair', (req, res) => {
  const { a, b } = req.query;
  const resultado = calc.subtrair(Number(a), Number(b));
  res.json({ resultado });
});

// ✖ Multiplicação
app.get('/multiplicar', (req, res) => {
  const { a, b } = req.query;
  const resultado = calc.multiplicar(Number(a), Number(b));
  res.json({ resultado });
});

// ➗ Divisão
app.get('/dividir', (req, res) => {
  const { a, b } = req.query;

  try {
    const resultado = calc.dividir(Number(a), Number(b));
    res.json({ resultado });
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});