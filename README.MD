# Pruebas Unitarias con Jest

## Descripción

Este proyecto implementa pruebas unitarias utilizando **Jest** para validar el comportamiento de distintas funciones desarrolladas en JavaScript. El objetivo es garantizar que cada función produzca los resultados esperados bajo diferentes escenarios, incluyendo casos válidos, límites e entradas inválidas.

---

## Función: `calcularDescuento()`

### Propósito

Calcula el precio final de un producto aplicando un porcentaje de descuento.

### Casos de prueba

| Caso                   | Entrada      | Resultado esperado    |
| ---------------------- | ------------ | --------------------- |
| Descuento válido       | (1000, 20)   | 800                   |
| Descuento válido       | (500, 10)    | 450                   |
| Porcentaje mayor a 100 | (300, 120)   | "porcentaje invalido" |
| Porcentaje negativo    | (1200, -50)  | "porcentaje invalido" |
| Porcentaje negativo    | (10000, -90) | "porcentaje invalido" |
| Porcentaje igual a 0   | (100, 0)     | "porcentaje invalido" |

### Validaciones realizadas

* Aplicación correcta de descuentos.
* Restricción de porcentajes fuera del rango permitido.
* Manejo de valores negativos y nulos.

---

## Función: `validarPassword()`

### Propósito

Verifica que una contraseña tenga al menos ocho caracteres y contenga al menos un número.

### Casos de prueba

| Caso                        | Entrada     | Resultado esperado |
| --------------------------- | ----------- | ------------------ |
| Letras y números            | "abc12345"  | true               |
| Solo letras                 | "abcdef"    | false              |
| Solo números (8 caracteres) | "12345678"  | true               |
| Solo letras (9 caracteres)  | "asdfghjkj" | false              |
| Solo números (9 caracteres) | "123456789" | true               |

### Validaciones realizadas

* Longitud mínima requerida.
* Presencia de caracteres numéricos.
* Comportamiento con contraseñas formadas únicamente por números o letras.

---

## Función: `celsiusAFahrenheit()`

### Propósito

Convierte una temperatura expresada en grados Celsius a grados Fahrenheit.

### Casos de prueba

| Caso                  | Entrada | Resultado esperado |
| --------------------- | ------- | ------------------ |
| Punto de congelación  | 0°C     | 32°F               |
| Temperatura ambiente  | 25°C    | 77°F               |
| Temperatura negativa  | -10°C   | 14°F               |
| Punto de ebullición   | 100°C   | 212°F              |
| Equivalencia especial | -40°C   | -40°F              |

### Validaciones realizadas

* Conversión correcta de temperaturas positivas y negativas.
* Verificación de puntos de referencia conocidos.

---

## Función: `esMayorDeEdad()`

### Propósito

Determina si una persona cumple con la mayoría de edad.

### Casos de prueba

| Caso               | Entrada | Resultado esperado |
| ------------------ | ------- | ------------------ |
| Edad mínima válida | 18      | true               |
| Mayor de edad      | 25      | true               |
| Menor de edad      | 16      | false              |
| Límite inferior    | 17      | false              |
| Valor mínimo       | 0       | false              |
| Edad avanzada      | 100     | true               |

### Validaciones realizadas

* Evaluación correcta del límite legal de mayoría de edad.
* Comportamiento ante valores extremos.

---

## Función: `generarNombreCompleto()`

### Propósito

Genera un nombre completo concatenando un nombre y un apellido.

### Casos de prueba

| Caso                      | Entrada               | Resultado esperado |
| ------------------------- | --------------------- | ------------------ |
| Nombre y apellido válidos | ("Michael", "Castro") | "Michael Castro"   |
| Nombre y apellido válidos | ("Ana", "López")      | "Ana López"        |
| Campos vacíos             | ("", "")              | " "                |

### Validaciones realizadas

* Unión correcta de cadenas de texto.
* Comportamiento cuando las entradas son cadenas vacías.

---

## Resultado

Las pruebas permiten verificar que cada función cumple con los requisitos establecidos y ayudan a detectar errores de manera temprana durante el desarrollo. La implementación de Jest facilita la automatización de pruebas y contribuye a mejorar la calidad y mantenibilidad del código.
