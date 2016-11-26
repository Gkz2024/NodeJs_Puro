var servidor = require('http');
var url = require('url');
var fs = require('fs');

function iniciar(enrutar, manejador) {
    function arrancarServidor(requiere, respuesta) {

        var ruta = url.parse(requiere.url).pathname;

        console.log("Alguien se ha conectado");

        var contenido = enrutar(manejador, ruta, respuesta);

        //guarda en un fichero txt lo que se muestra en consola. flag:a = abrir son reemplazar
        var registro = fs.createWriteStream('registro.txt',{'flags':'a'});
        registro.write(ruta + '\n');

        /*//al pasar "respuesta" por parametro a la funcion enrutar, ya no necesitamos este bloque
        respuesta.writeHead(200, {"Content-Type": "text/html"});
        //respuesta.write("<h1>hola mundo</h1>");
        respuesta.write(contenido);
        respuesta.end();*/
    };

    servidor.createServer(arrancarServidor).listen(8888);
}

exports.iniciar = iniciar;