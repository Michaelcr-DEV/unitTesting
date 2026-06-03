function suma(a,b){
    let sumar = a + b;
    return a + b;

}// suma

function multiplica (x, y){
    return x * y;
}// multiplica

function validarCorreo(correo) {
    const regex = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
    if (!(correo.match(regex))) {
        return false;
    }
    return true;
}// validar correo


//Exportamos las funciones
module.exports.suma = suma;
module.exports.multiplica = multiplica;
module.exports.validarCorreo = validarCorreo;