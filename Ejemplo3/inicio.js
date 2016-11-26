var servidor = require("./servidor.js");
var enrutador = require("./enrutador.js");
var peticiones = require("./peticiones");

var manejador = {};
manejador['/'] = peticiones.inicio;
manejador['/pagina1'] = peticiones.pagina1;
manejador['/pagina2'] = peticiones.pagina2;
manejador['/pagina3'] = peticiones.pagina3;
manejador['/favicon.ico'] = peticiones.favicon;

servidor.iniciar(enrutador.enrutar, manejador);
