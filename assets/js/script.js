// Clase 06

// Funciones de Orden Superior

// function operarNumero(a, b, operacion) {
//     return operacion(a, b);
// }

// const operarNumero = (a, b, operacion) => operacion(a, b);

// const suma = (x, y) => x + y;
// const resta = (x, y) => x - y;
// const multiplicacion = (x, y) => x * y;
// const division = (x, y) => {
//     if (y === 0) {
//         return "Error: Division por cero no permitida.!!"
//     }
//     return x / y;
// }

// console.log(operarNumero(5, 61, suma));

// console.log(operarNumero(5, 61, resta));

// console.log(operarNumero(5, 61, multiplicacion));

// console.log(operarNumero(5, 61, division));

// console.log(operarNumero(5, 0, division));


// Arrays

// const myArray = [1, 2, 3];
// console.log(myArray[1]);

// const stringArray = ["Hola", "Mundo", "Coder"];
// // console.log(stringArray);
// stringArray.push("JavaScript") // Lo agrego al final del Array
// console.log(stringArray.sort()); // Lo ordeno Alfabeticamente


// const myArray = [1, 22, 3, 100, 520, -10, 0, 1002];
// const ordenAs = (a, b) => a - b;
// const ordenDes = (a, b) => b - a;
/**
 * si retorna un numero < 0 => a lo coloca antes que a b
 * si retorna un numero > 0 => b lo coloca antes que a a
 * si retorna un 0 => el orden entre ellos no cambia
 */

// myArray.sort(ordenAs);
// console.log(myArray);
// myArray.sort(ordenDes);
// console.log(myArray);


// foreach
// const myArray = [1, 22, 3, 100, 520, -10, 0, 1002];

// myArray.forEach((num) => {
//     console.log(num);
// })

// myArray.forEach((num, i) => {
//     console.log(`Indice: ${i}, el Número es: ${num}`);
// })


// myArray.forEach((num, i, array) => {
//     array[i] = num * 2;
// })

// console.log(myArray);


// const stringArray = ["Hola", "Mundo", "Coder"];
// const inventario = {};

// stringArray.forEach((palabra, indice) => {
//     inventario[indice] = palabra
// })

// console.log(inventario);

// filter

// const cursos = [
//     {nombre: "JavaScript", precio: 150000},
//     {nombre: "React", precio: 100000},
//     {nombre: "Angular", precio: 110000},
//     {nombre: "SQL", precio: 90000},
//     {nombre: "BackEnd", precio: 350000},
// ]
// console.log(cursos);

// const cursosBaratos = cursos.filter((curso) => curso.precio < 150000);
// const cursosCaros = cursos.filter((curso) => curso.precio >= 150000);

// console.log(cursosBaratos);
// console.log(cursosCaros);


// const myArray = [1, 22, 3, 100, 520, -10, 0, 1002];

// const myArrayFiltrado = myArray.filter((num) => num > 10);
// console.log(myArrayFiltrado);


// const frutas = ["Manzana", "Frutilla", "Peras", "Anana", "Sandia", "Mandarina", "mango"];
// const letra = 'M';

// const frutasFiltradas = frutas.filter(fruta => fruta[0].toUpperCase() === letra.toUpperCase());

// console.log(frutasFiltradas);

// map

// const frutas = ["Manzana", "Frutilla", "Peras", "Anana", "Sandia", "Mandarina", "mango"];
// const frutasMayuscula = frutas.map((fruta) => fruta.toUpperCase());
// console.log(frutas);
// console.log(frutasMayuscula);

// const myArray = [1, 22, 3, 100, 520, -10, 0, 1002];
// const myArrayTriple = myArray.map((num) => num * 3);
// console.log(myArray);
// console.log(myArrayTriple);

// const cursos = [
//     {nombre: "JavaScript", precio: 150000},
//     {nombre: "React", precio: 100000},
//     {nombre: "Angular", precio: 110000},
//     {nombre: "SQL", precio: 90000},
//     {nombre: "BackEnd", precio: 350000},
// ]
// console.log(cursos);
// const nombresDeCursos = cursos.map((curso) => curso.nombre);
// console.log(nombresDeCursos);

// const productos = [
//     { id: 1, nombre: "Azucar", disponible: true },
//     { id: 2, nombre: "Yerba", disponible: true },
//     { id: 3, nombre: "Café", disponible: false },
//     { id: 4, nombre: "Coca Cola", disponible: true },
//     { id: 5, nombre: "Pepsi", disponible: false },
//     { id: 6, nombre: "Harina", disponible: false },
// ];

// const booleanos = [true, false, false, false, true, true, false, true];
// const texto = booleanos.map((valor) => {
//     if (valor) {
//         return "Si"
//     } else {
//         return "No"
//     }
// });

// console.log(booleanos);
// console.log(texto);

// const stock = productos.map((producto) => {
//     let disponibilidad = "";

//     if(producto.disponible){
//         disponibilidad = "tiene Stock";
//     } else {
//         disponibilidad = "No tiene Stock";
//     }

//     return `El producto ${producto.nombre} ${disponibilidad}`;
// })

// console.log(stock);

// Reduce

// Ejemplo

// const numeros = [1, 3, 6, 9, 12, 50, 88, 120, 1500]; // 1789

// const sumaDeNumeros = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// console.log(sumaDeNumeros);

// const frutas = [
//     "Manzana",
//     "Frutilla",
//     "Peras",
//     "Anana",
//     "Sandia",
//     "Frutilla",
//     "Mandarina",
//     "mango",
//     "Frutilla",
//     "Mandarina",
// ];

// const conteo = frutas.reduce((acc, fruta) => {
//     acc[fruta] = (acc[fruta] || 0) + 1;
//     return acc;
// }, {});
// console.log(conteo);

// const carrito = [
//     {id: 1, nombre: "Manzana", cantidad: 3},
//     {id: 2, nombre: "Frutilla", cantidad: 1},
//     {id: 3, nombre: "Pera", cantidad: 5},
//     {id: 4, nombre: "Mandarina", cantidad: 2},
// ];

// const resumenCarrito = carrito.reduce((acc, item) => {

//     //si el producto ya existe en el acumulador
//     if(acc[item.nombre]){
//         acc[item.nombre].cantidad += item.cantidad;
//     } else {
//         acc[item.nombre] = {
//             id: item.id,
//             nombre: item.nombre,
//             cantidad: item.cantidad
//         }
//     }
//     return acc;
// }, {});

// console.log(resumenCarrito);

