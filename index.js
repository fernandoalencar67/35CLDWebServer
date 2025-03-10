app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <title>FIAP 35CLD Trabalho DevOps</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(to right,rgb(0, 38, 255),rgba(255, 255, 255, 0));
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
          table {
            margin: 50px auto;
            border-collapse: collapse;
            width: 60%;
            background-color: rgba(0, 0, 0, 0.6);
            color: #fff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
          }
          th, td {
            padding: 15px;
            text-align: center;
            border-bottom: 1px solid #ddd;
          }
          th {
            background-color: rgba(255, 255, 255, 0.2);
            font-size: 1.2rem;
          }
          tr:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }
        </style>
      </head>
      <body>
        <h1>FIAP 35CLD - Trabalho DevOps</h1>
        <p>Bem-vindo(a) WEB Site do nosso trabalho</p>
        
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>RM</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Fernando Alencar</td><td>RM355607</td></tr>
            <tr><td>Filipe Lopes</td><td>RM356144</td></tr>
            <tr><td>Marcelo Vieira</td><td>RM355727</td></tr>
            <tr><td>Nill Bryan</td><td>RM356519</td></tr>
            <tr><td>Paulo Borges</td><td>RM355617</td></tr>
          </tbody>
        </table>
      </body>
    </html>
  `);
});
