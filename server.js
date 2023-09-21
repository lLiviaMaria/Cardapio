const http = require('http');
const fs = require('fs');

// Crie o servidor HTTP
const server = http.createServer((req, res) => {
  // Configurar os cabeçalhos CORS
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir solicitações de qualquer origem (não recomendado para produção)
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS'); // Métodos HTTP permitidos
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Cabeçalhos permitidos

  // Trate as solicitações OPTIONS enviadas por navegadores antes das solicitações reais
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Se o navegador enviar uma solicitação GET para seu JSON, leia e retorne o arquivo JSON
  if (req.method === 'GET' && req.url === '/seuarquivo.json') {
    fs.readFile('seuarquivo.json', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end(JSON.stringify({ error: 'Erro interno do servidor' }));
        return;
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    });
  } else {
    // Se a rota não for encontrada, retorne um erro 404
    res.writeHead(404);
    res.end();
  }
});

// Escute na porta desejada (por exemplo, porta 3000)
server.listen(3000, () => {
  console.log('Servidor está ouvindo na porta 3000');
});
