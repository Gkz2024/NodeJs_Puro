function enrutar(manejador, ruta) {
    console.log("Voy a enrutar algo " + ruta);
    if(typeof manejador[ruta] == 'function'){
    return manejador[ruta]();
}else{
	console.log("No existe una función para esa ruta " + ruta);
}
}

exports.enrutar = enrutar;