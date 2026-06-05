function calcularDescuento(precio, porcentaje) {
    if (porcentaje < 1 || porcentaje > 100) {
        return "porcentaje invalido";
    }else{
        precio = precio- (precio * porcentaje / 100);
        return precio;
    }
}// calcular descuento


function validarPassword(password) {
    return password.length >= 8 && /\d/.test(password);
}

function celsiusAFahrenheit(celsius){
    let farenheit = (celsius * 9/5) + 32;
    return farenheit
}

function esMayorDeEdad(edad){
    return edad >= 18;
}

function generarNombreCompleto(nombre, apellido){
    return `${nombre} ${apellido}`
}


// Exportar funciones
module.exports.calcularDescuento = calcularDescuento;
module.exports.validarPassword = validarPassword;
module.exports.celsiusAFahrenheit = celsiusAFahrenheit;
module.exports.esMayorDeEdad = esMayorDeEdad;
module.exports.generarNombreCompleto = generarNombreCompleto;