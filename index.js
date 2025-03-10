const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <title>FIAP 35CLD Trabalho DevOps</title>
        <style>
          /* Estilos para fácil edição posterior */
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            /* Fundo gradiente vermelho e preto (da esquerda para a direita) */
            background: linear-gradient(to right, #ff0000, #000000);
            color: #ffffff;
          }
          h1 {
            text-align: center;
            margin-top: 50px;
            font-size: 2.5rem;
          }
          p {
            text-align: center;
            font-size: 1.2rem;
          }
        </style>
      </head>
      <body>
        <h1>FIAP 35CLD - Trabalho DevOps</h1>
        <p>Bem-vindo(a) à aplicação Node.js!</p>
      </body>
    </html>
  `);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${port}`);
});
