// Funciones

// const numeroA = 1;
// const numeroB = 2;

// const resultado = numeroA + numeroB;
// console.log("Felicitaciones, el resultado de la Suma es: " + resultado);


// const numeroC = 10;
// const numeroD = 22;

// const resultado1 = numeroC + numeroD;
// console.log("Felicitaciones, el resultado de la Suma es: " + resultado1);

// const numeroC1 = 100;
// const numeroD1 = 122;

// const resultado11 = numeroC1 + numeroD1;
// console.log("Felicitaciones, el resultado de la Suma es: " + resultado11);

// Declaracion de la Funcion

// Variables Globales (Scope Global)
// const numeroA = parseFloat(prompt("Ingrese el Numero A"));
// const numeroB = parseFloat(prompt("Ingrese el Numero B"));

// Variable Local
// function sumar() {
//     // Si declaro una Variable adentro, seria Scope Local
//     const numeroA = parseFloat(prompt("Ingrese el Numero A"));
//     const numeroB = parseFloat(prompt("Ingrese el Numero B"));

//     const resultado = numeroA + numeroB;
//     console.log("Felicitaciones, el resultado de la Suma es: " + resultado);
// };


// sumar();

// console.log(resultado);

/// Declar resultado Globalmente
// let numeroA = parseFloat(prompt("Ingrese el Numero A para la Suma"));
// let numeroB = parseFloat(prompt("Ingrese el Numero B para la Suma"));
// let resultado;

// function sumar() {
//     resultado = numeroA + numeroB;
//     console.log("Felicitaciones, el resultado de la Suma es: " + resultado);
// };

// function restar() {
//     // Reasignar los valores de las Variables
//     numeroA = parseFloat(prompt("Ingrese el Numero A para la Resta"));
//     numeroB = parseFloat(prompt("Ingrese el Numero B para la Resta"));
//     resultado = numeroA - numeroB;
//     console.log("Felicitaciones, el resultado de la Resta es: " + resultado);
// };
// function multiplicar() {
//     // Reasignar los valores de las Variables
//     numeroA = parseFloat(prompt("Ingrese el Numero A para la Multiplicacion"));
//     numeroB = parseFloat(prompt("Ingrese el Numero B para la Multiplicacion"));
//     resultado = numeroA * numeroB;
//     console.log("Felicitaciones, el resultado de la Multiplicacion es: " + resultado);
// };

// sumar();
// restar();
// multiplicar();

// Repitiendo todo usando Parametros
// let resultado;
// let numeroA = parseFloat(prompt("Ingrese el Numero A"));
// let numeroB = parseFloat(prompt("Ingrese el Numero B"));

// function sumar(a, b) {
//     resultado = a + b;
//     console.log("Felicitaciones, el resultado de la Suma es: " + resultado);
// };
// function restar(a, b) {
//     resultado = a - b;
//     console.log("Felicitaciones, el resultado de la Resta es: " + resultado);
// };
// function multiplicar(a, b) {
//     resultado = a * b;
//     console.log("Felicitaciones, el resultado de la Multiplicacion es: " + resultado);
// };
// function dividir(a, b) {
//     if(b == 0){
//         console.error("Error, No se puede dividir por cero")
//     } else {
//         resultado = a / b;
//         console.log("Felicitaciones, el resultado de la Division es: " + resultado);
//     }
// };

// sumar(numeroA, numeroB);
// restar(numeroA, numeroB);
// multiplicar(numeroA, numeroB);
// dividir(numeroA, numeroB);

// Volvemos a repetir pero ahora usando switch

// let numeroA = parseFloat(prompt("Ingrese el Numero A"));
// let numeroB = parseFloat(prompt("Ingrese el Numero B"));
// let operacion = prompt("Ingrese la operacion");

// function calcular(operacion, a , b){
//     let resultado;
//     switch(operacion){
//         case "+":
//             resultado = a + b
//             console.log("Felicitaciones, el resultado de la Suma es: " + resultado);
//             break;
//         case "-":
//             resultado = a - b
//             console.log("Felicitaciones, el resultado de la Resta es: " + resultado);
//             break;
//         case "*":
//             resultado = a * b
//             console.log("Felicitaciones, el resultado de la Multiplicacion es: " + resultado);
//             break;
//         case "/":
//             if(b === 0){
//                 console.error("Error, No se puede dividir por cero")
//             } else {
//                 resultado = a / b;
//                 console.log("Felicitaciones, el resultado de la Division es: " + resultado);
//             }
//             break;
//         default:
//             console.error("Error, Ingrese una Operacion valida.!")
//     }
// }

// calcular(operacion, numeroA , numeroB);

// Funciones Anonimas

// const saludar = function(nombre){
//     return "Hola, " + nombre + " , Como estas?";
// }

// console.log(saludar("Alejandro"));

// const saludar = (nombre) => {
//     return "Hola, " + nombre + " , Como estas?";
// }


// Las funciones Flecha tienen un return implisito, cuando solo se pasa
// un parametro y la funcion en si no es muy compleja.
// const saludar = (nombre) => "Hola, " + nombre + " , Como estas?"
// console.log(saludar("Alejandro"));
// log es una funcion (mejor dicho un metodo)
// aca le estoy pasando la funcion saludar("Alejandro") como parametro

// Hacemos la calculadora usando funcion flecha
// let numeroA = parseFloat(prompt("Ingrese el Numero A"));
// let numeroB = parseFloat(prompt("Ingrese el Numero B"));
// let operacion = prompt("Ingrese la operacion");

// const calcular = (operacion, a, b) => {    
//     switch (operacion) {
//         case "+":
//             return a + b
//         case "-":
//             return a - b
//         case "*":
//             return a * b
//         case "/":
//             if (b === 0) {
//                 return console.error("Error, No se puede dividir por cero")
//             } else {
//                 return a / b;
//             }
//         default:
//             return console.error("Error, Ingrese una Operacion valida.!")
//     }
// }

// console.log("Felicitaciones, el resultado es: " + calcular(operacion, numeroA, numeroB));


// Hagamos lo mismo pero agregando do while

const calcular = (operacion, a, b) => {
    switch (operacion) {
        case "+":
            return a + b
        case "-":
            return a - b
        case "*":
            return a * b
        case "/":
            if (b === 0) { // Compara si ambos valores son estricamente iguales
                return console.error("Error, No se puede dividir por cero")
            } else {
                return a / b;
            }
        default:
            return console.error("Error, Ingrese una Operacion valida.!")
    }
};

let continuar;

do {
    let numeroA = parseFloat(prompt("Ingrese el Numero A"));
    let numeroB = parseFloat(prompt("Ingrese el Numero B"));
    let operacion = prompt("Ingrese la operacion");

    // Mostrar el resultado
    console.log("Felicitaciones, el resultado es: " + calcular(operacion, numeroA, numeroB));
    // Confirmar si sigue o no
    continuar = prompt("¿Desea continuar? (si/no)").toLowerCase();
} while (continuar === 'si');

console.log("Gracias por usar la Calculadora");

