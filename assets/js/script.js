// let verdadero = true;

// console.log(typeof(verdadero))

// if(verdadero){ // si es verdadero o true
//     console.log("El valor de verdad de verdadero es true")
// } else {
//     console.log("Se ejecuto el else")
// }

// let numero = parseInt(prompt("Ingrese un numero"))

// let referencia = 10;

// if (numero > referencia) {
//     alert("El numero es mayor a 10")
// } else if (numero < referencia) {
//     alert("El numero es menor a 10")
// } else if (numero == referencia) {
//     alert("Ingresaste el numero 10")
// } else {
//     alert("ERROR, Ingrese un Numero Valido")
// }

/* 
Cuando usamos 1 = estamos asignado
Cuando usamos 2 = estamos comparando
Cuando usamos 3 = estamos comparando tipode dato y valor
*/

// const numeoA = 20; // Tipo de dato es un int
// const numeroB = "20"; // Tipo de dato es un string

// if (numeoA == numeroB) {
//     console.log("Los numeros son Iguales")
// } else {
//     console.error("No son Iguales")
// }

// if (numeoA === numeroB) {
//     console.log("Los numeros son Estricatemnte Iguales")
// } else {
//     console.error("No son Estrictamente Iguales")
// }

// let nombreDelInvitado = prompt("Ingrese su Nombre")

// if(typeof(nombreDelInvitado) !== "string") { // si es Falso sigue de largo
//     alert("Ingreso un dato no valido")
//     nombreDelInvitado = prompt("Ingrese su Nombre")
// }

//Ciclo While

// while(nombreDelInvitado === '' || !isNaN(nombreDelInvitado)){ // Valida que no este vacio o que no sea un Numero
//     alert("Ingrese un dato Valido")
//     nombreDelInvitado = prompt("Ingrese su Nombre")
// }


// let edadDelInvitado = parseInt(prompt("Ingrese su Edad"))

// if(typeof(edadDelInvitado) !== "number") { // si es Falso sigue de largo
//     alert("Ingreso un dato no valido")
//     edadDelInvitado = parseInt(prompt("Ingrese su Edad"))
// }

// while(isNaN(edadDelInvitado) || edadDelInvitado <= 0){ // Si ingreso un string se ejecuto lo de adentre
//     alert("Ingrese un dato Valido")
//     edadDelInvitado = parseInt(prompt("Ingrese su Edad"))
// }

// if( edadDelInvitado < 18) {
//     alert(nombreDelInvitado + " No puede tomar Bebidas Alcoholicas, Volve a tu casa")
// } else {
//     alert("Bienvenido " + nombreDelInvitado + " a nuestra Discoteca")
// }


/// Ciclo for

// for(let i = 1; i < 5; i++) {
//     console.log("Me estoy ejecutando: " + i + " vez")
// }

// let i = 1;

// console.log("i vale: " + i)
// i = i + 1;
// console.log("i vale: " + i)
// i = i + 1;
// console.log("i vale: " + i)
// i++;
// console.log("i vale: " + i)
// i++;
// console.log("i vale: " + i)



// do while
// let condicion = false;
// do {
//     console.log("Se ejecuta al menos 1 vez")
// } while (condicion)


// let variable = 1;


// for(let i = 1; i < 5; i++) {
//     console.log("Me estoy ejecutando: " + i + " vez")
// };

// let opcion = prompt("Ingrese una Opcion: \n1. Saludar. \n2. Despedirse.");

// switch(opcion){
//     case "1":
//         alert("Hola, Como estas?")
//         break;
//     case "2":
//         alert("Adios")
//         break;
//     default:
//         alert("Opcion No valida")
// }


// let colorIngresado = prompt("Ingrese un color");

// if( colorIngresado.toLowerCase() === "azul" || colorIngresado.toLowerCase() === "amarillo") { // OR valida una opcio u otra
//     alert("El color ingresado es correcto")
// } else {
//     alert("Color invalido")
// };


// let isAdmin = false;
// let isModerator = true;

// if(isAdmin || isModerator) {
//     alert("Bienvenido!!")
// } else {   
//     alert("No tiene permisos para ingresar")
// }


// Tabla de Verdad (logica proposiocional)

const V = true;
const F = false;

console.log("Tabla de Verdad del Operador && (Y)");
console.log(V && V); // Si ambos son V => true
console.log(V && F); // Si al menos uno de los valores es F => false
console.log(F && V); // Si al menos uno de los valores es F => false
console.log(F && F); // Si ambos de los valores son F => false


console.log("Tabla de Verdad del Operador || (O)");
console.log(V || V); // Si ambos son V => true
console.log(V || F); // Si al menos uno de los valores es V => true
console.log(F || V); // Si al menos uno de los valores es V => true
console.log(F || F); // Si ambos de los valores son F => false

console.log("Tabla de Verdad del Operador de Negación (!)");
console.log(!V); // Si no es Verdadero => false
console.log(!F); // Si no es False => true

