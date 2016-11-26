function enrutar(manejador, ruta, respuesta) {
    console.log("Voy a enrutar algo " + ruta);
    if(typeof manejador[ruta] == 'function'){
    manejador[ruta](respuesta);
}else{
	console.log("No existe una función para esa ruta " + ruta);
}
}

exports.enrutar = enrutar;