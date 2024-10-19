// Variable
// Tipos de Variables
// pueden ser constantes o variables

// Tipos de Datos
// string - int - float - boolean

// let alumno = "Alumno de Coder"; // int
// console.log(alumno);
// console.log(typeof(alumno));
// // Reasignar un valor a alumno
// alumno = "Un String"; // string
// console.log(alumno);
// console.log(typeof(alumno));
// alumno = 23; // int
// console.log(alumno);
// console.log(typeof(alumno));


// const constante = 123;
// console.log(constante);
// console.log(typeof(constante));
// // reasiganr un nuevo valor a constante
// //constante = 2; /// NO SE PUEDE REASIGNAR..!!!

// let numeroFloat = 12.5;
// console.log(numeroFloat);
// console.log(typeof(numeroFloat));

// let verdadero = true;
// console.log(verdadero);
// console.log(typeof(verdadero));

/// Operaciones Matematicas
// let numeroA = 10;
// let numeroB = 2;

// let suma = numeroA + numeroB; // Operacion suma
// let resta = numeroA - numeroB; // Operacion resta
// let multiplicacion = numeroA * numeroB; // Operacion multiplicacion
// let division = numeroA / numeroB; // Operacion division

// console.log(suma);
// console.log(resta);
// console.log(multiplicacion);
// console.log(division);

// let resultado;

// resultado = numeroA + numeroB; 
// console.log(resultado);
// resultado = numeroA - numeroB;
// console.log(resultado);
// resultado = numeroA * numeroB;
// console.log(resultado);
// resultado = numeroA / numeroB;
// console.log(resultado);


// console.log(numeroA + numeroB);
// console.log(numeroA - numeroB);
// console.log(numeroA * numeroB);
// console.log(numeroA / numeroB);

// Uso de prompt, de alert y de confirm

// alert("Hola gente");


// let numeroA = prompt("Ingrese un Numero");
// console.log(numeroA);
// let nombre = prompt("Ingrese su nombre");
// // console.log(nombre);
// alert(nombre);


// let numeroA = parseFloat(prompt("Ingrese un Numero A")); // Los prompt siempre guarda un string
// let numeroB = parseFloat(prompt("Ingrese un Numero B"));
// console.log(typeof(numeroA));
// console.log(typeof(numeroB));
//alert("El resultado es: " + numeroA + numeroB); // Estamos concatenado

// let resultado = numeroA + numeroB
// alert("El resultado es: " + resultado);

// alert("El resultado es: " + (numeroA + numeroB));

// let nombre = prompt("Ingrese su nombre");
// let edad = parseInt(prompt("Ingrese su Edad"));

// let confimacion = confirm("¿Es correcta la Información? " + "Nombre: " + nombre + " Edad: " + edad);

// if(confimacion){
//     alert("Hola, " + nombre + ", tu edad es: " + edad + " años");
// } else {
//     alert("Gracias por participar.!!")
// }

// let mensaje = "Hola, " + nombre + ", tu edad es: " + edad + " años";
// console.log(typeof(mensaje));

// console.log(typeof(confimacion));

let nombreDelUsuario = "Alejandro"; // Solucionado
let edadDelUsuario = 48;
let mensaje = "Hola, " + nombreDelUsuario + "! Tenes " + edadDelUsuario + " años.";
console.log(mensaje);

nombreDelUsuario = "Luis";
edadDelUsuario = 40;
mensaje = "Hola, " + nombreDelUsuario + "! Tenes " + edadDelUsuario + " años.";
console.log(mensaje);

console.log(parseInt('12.55')); // Convierte a Numero Entero

console.log(parseFloat('12.55')); // Convierte a Numero con Decimales
