
const funciones = require("./funciones.js"); // importamos las funciones

// Test Descuentos
test(`Descuento del 20% sobre 1000`, () => {
    expect(funciones.calcularDescuento(1000, 20)).toBe(800);
})
test(`Descuento del 10% sobre 500`, () => {
    expect(funciones.calcularDescuento(500, 10)).toBe(450);
})
test(`Descuento del 120% sobre 300 (porcentaje inválido)`, () => {
    expect(funciones.calcularDescuento(300, 120)).toBe(`porcentaje invalido`);
})
test(`Descuento de -50% sobre 1200 (porcentaje inválido)`, () => {
    expect(funciones.calcularDescuento(1200, -50)).toBe(`porcentaje invalido`);
})
test(`Descuento de -90% sobre 10000 (porcentaje inválido)`, () =>  {
    expect(funciones.calcularDescuento(10000, -90)).toBe(`porcentaje invalido`);
})
test(`Descuento de 0%  sobre 100 (porcentaje inválido)`, () => {
    expect(funciones.calcularDescuento(100, 0)).toBe(`porcentaje invalido`);
})


// Test Contraseñas
test(`Validar la contraseña -abc12345- es válida`, () => {
    expect(funciones.validarPassword(`abc12345`)).toBe(true);
})
test(`Validar la contraseña -abcdef- no contiene numeros`, () => {
    expect(funciones.validarPassword(`abcdef`)).toBe(false);
})
test(`Validar la contraseña -12345678- contiene numeros pero no tiene letras`, () => {
    expect(funciones.validarPassword(`12345678`)).toBe(true);
})
test(`Validar la contraseña -asdfghjkj- nueve letras sin numero`, () => {
    expect(funciones.validarPassword(`asdfghjkj`)).toBe(false);
})
test(`Validar la contraseña -123456789- nueve numeros`, () => {
    expect(funciones.validarPassword(`123456789`)).toBe(true);
})



// Test Celsius a Fahrenheit

test('0°C equivale a 32°F', () => {
    expect(funciones.celsiusAFahrenheit(0)).toBe(32);
});

test('25°C equivale a 77°F', () => {
    expect(funciones.celsiusAFahrenheit(25)).toBe(77);
});

test('-10°C equivale a 14°F', () => {
    expect(funciones.celsiusAFahrenheit(-10)).toBe(14);
});

test('100°C equivale a 212°F', () => {
    expect(funciones.celsiusAFahrenheit(100)).toBe(212);
});

test('-40°C equivale a -40°F', () => {
    expect(funciones.celsiusAFahrenheit(-40)).toBe(-40);
});


// Test esMayorDeEdad

test(`Es mayor de edad?`, () =>{
    expect(funciones.esMayorDeEdad(18)).toBe(true);
})
test(`Es mayor de edad?`, () =>{
    expect(funciones.esMayorDeEdad(25)).toBe(true);
})
test(`Es mayor de edad?`, () =>{
    expect(funciones.esMayorDeEdad(16)).toBe(false);
})
test('17 años no es mayor de edad', () => {
    expect(funciones.esMayorDeEdad(17)).toBe(false);
});
test('0 años no es mayor de edad', () => {
    expect(funciones.esMayorDeEdad(0)).toBe(false);
});
test('100 años es mayor de edad', () => {
    expect(funciones.esMayorDeEdad(100)).toBe(true);
});

// Test generarNombreCompleto

test('Nombre completo Michael Castro', () => {
    expect(funciones.generarNombreCompleto("Michael", "Castro"))
        .toBe("Michael Castro");
});

test('Nombre completo Ana López', () => {
    expect(funciones.generarNombreCompleto("Ana", "López"))
        .toBe("Ana López");
});

test('Nombre y apellido vacíos', () => {
    expect(funciones.generarNombreCompleto("", ""))
        .toBe(" ");
});