var servidor = require('http');

function arrancarServidor(requiere, respuesta) {
	console.log("Alguien se ha conectado")
  respuesta.writeHead(200,{"Content-Type":"text/html"})
  respuesta.write("<h1>hola mundo</h1>")
  respuesta.end();
  };

  servidor.createServer(arrancarServidor).listen(8888);