// console.log(document);
let titulo = document.getElementById('titulo').innerText; // Agregar texto plano
// console.log(titulo);
let title = document.getElementsByTagName('title')[0]; // Array de titles
// console.log(title);
title.innerText = titulo;

const cuerpo = document.body;
// console.log(cuerpo);

let contenedores = document.getElementsByClassName('contenedor'); // Array de contenedores
// console.log(contenedores);

// contenedores[2].innerHTML = "<h2>Contenedor <strong>3</strong></h2>";
// console.log(contenedores[2]);

// const personasArray = ["Nahuel", "Daston", "Cynthia", "Brayan", "Laureano", "Diana"]; // Array de Nombres

// function cargarNombresAlDOM() {
//     const tituloLocal = "Personas Cargadas"; // Variable Local

//     title.innerText = tituloLocal;
//     document.getElementById('tituloPersonas').innerText = tituloLocal;

//     let personasUl = document.getElementById('personas'); // El UL que va a contener a todos los li
//     for (const persona of personasArray) { // Recorremos el Array
//         let li = document.createElement('li'); // Creamos un li dinamicamente
//         li.innerHTML = persona; // le asignamos el valor a li dinamicamente
//         personasUl.appendChild(li); // Agregamos el li al ul
//     }
// }

// cargarNombresAlDOM();

/// Agregar una section al final del main
// crear un Array de Objetos
// Mostrar con una lista los datos del array
// A partir de una funcion

// let arrayDeObjetos = [];

// const cargarObjetosDelArrayAlDOM = () => {

//     const arrayDeObjetos = [
//         {
//             id: 1,
//             nombre: "Azucar",
//             precio: 1250,
//             stock: 1500
//         },
//         {
//             id: 2,
//             nombre: "Yerba",
//             precio: 1850,
//             stock: 1000
//         },
//         {
//             id: 3,
//             nombre: "Cafe",
//             precio: 6500,
//             stock: 600
//         },
//         {
//             id: 4,
//             nombre: "Coca Cola",
//             precio: 1890,
//             stock: 12000
//         },
//         {
//             id: 5,
//             nombre: "Pepsi",
//             precio: 1750,
//             stock: 13000
//         }
//     ];

//     let main = document.querySelector('#main');
//     let sectionDelMain = document.createElement('section');

//     let lista = document.createElement('ul');

//     arrayDeObjetos.forEach(objeto => {
//         let item = document.createElement('li');
//         item.textContent = `ID: ${objeto.id}, Nombre: ${objeto.nombre}, Precio: $${objeto.precio}.- , Stock: ${objeto.stock} unidades.`;
//         lista.appendChild(item);
//     })
//     sectionDelMain.appendChild(lista);

//     main.appendChild(sectionDelMain);
// }

// cargarObjetosDelArrayAlDOM();

// Eventos

let botonClick = document.querySelectorAll('.button_grey')[0];
// console.log(botonClick); // Nos muestra el boton como Objeto
// console.log(botonClick.innerHTML); // Nos muestra el texto del boton

botonClick.addEventListener('click', () => {
    // console.log("Hice Click");
    cuerpo.style.backgroundColor = 'blue';
    cuerpo.style.color = 'white';
})


contenedores[0].addEventListener('mouseover', () => {
    let h4C1 = contenedores[0].querySelector('h4');
    h4C1.style.color = "green";

})

contenedores[1].addEventListener('mouseover', () => {
    let h4C1 = contenedores[1].querySelector('h4');
    h4C1.style.color = "blue";

})
contenedores[2].addEventListener('mouseover', () => {
    let h4C1 = contenedores[2].querySelector('h4');
    h4C1.style.color = "red";

})
contenedores[3].addEventListener('mouseover', () => {
    let h4C1 = contenedores[3].querySelector('h4');
    h4C1.style.color = "yellow";

})



const arrayDeObjetos = [
    {
        id: 1,
        nombre: "Azucar",
        precio: 1250,
        stock: 1500
    },
    {
        id: 2,
        nombre: "Yerba",
        precio: 1850,
        stock: 1000
    },
    {
        id: 3,
        nombre: "Cafe",
        precio: 6500,
        stock: 600
    },
    {
        id: 4,
        nombre: "Coca Cola",
        precio: 1890,
        stock: 12000
    },
    {
        id: 5,
        nombre: "Pepsi",
        precio: 1750,
        stock: 13000
    }
];


let botonAgregarObjeto = document.querySelectorAll('.button_grey')[1];

let indiceObjeto = 0;

botonAgregarObjeto.addEventListener('click', () => {

    let listaPersonas = document.getElementById('personas');

    if (indiceObjeto < arrayDeObjetos.length) {
        let item = document.createElement('li');

        const objeto = arrayDeObjetos[indiceObjeto];

        item.textContent = `ID: ${objeto.id}, Nombre: ${objeto.nombre}, Precio: $${objeto.precio}.- , Stock: ${objeto.stock} unidades.`;

        listaPersonas.appendChild(item);

        indiceObjeto++;

    } else {
        alert("Todos los productos fueron agregados.!")
    }
})