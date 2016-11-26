function inicio(respuesta){
    console.log("Has entrado en la pagina de inicio");
    respuesta.writeHead(200,{"Content-Type":"text/html"});
    respuesta.write("Esta es la página de inicio");
    respuesta.end();    
}

function pagina1(respuesta){
    console.log("Has entrado en la pagina de pagina 1");
    respuesta.writeHead(200,{"Content-Type":"text/html"});
    respuesta.write("Esta es la página 1");
    respuesta.end();
}

function pagina2(respuesta){
    console.log("Has entrado en la pagina de pagina 2");
    respuesta.writeHead(200,{"Content-Type":"text/html"});
    respuesta.write("Esta es la página 2");
    respuesta.end();
}

function pagina3(respuesta){
    console.log("Has entrado en la pagina de pagina 3");
    respuesta.writeHead(200,{"Content-Type":"text/html"});
    respuesta.write("Esta es la página 3");
    respuesta.end();
}

function favicon(respuesta){
    console.log("Se ha pedido favicon");
    respuesta.writeHead(200,{"Content-Type":"text/html"});
    respuesta.write("");
    respuesta.end();
}

exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.pagina3 = pagina3;
exports.favicon = favicon;