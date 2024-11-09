// Array

// const miArray = [1, 2, 5, 56, 0, -8, 1];
// console.log(typeof(miArray));
// miArray.push(555); // Agrega el 555 en el ultimo lugar
// miArray.pop(); // Elimina al 555
// miArray.unshift(0); // Agrega el 0 en el 1er Lugar (Pero no es recomendable)
// miArray.shift(); // Elimina el 1er elementod del Array (Pero no es recomendable)
// miArray = 5;
// console.log(typeof(miArray));
// console.log(miArray);
// console.log(miArray.length);

// for(let i = 0; i < miArray.length; i++){
//     console.log(i + ": " + miArray[i]);
// }

// console.log(miArray.join(", "));
// console.log(typeof(miArray.join(", ")));
// console.log(miArray.join(" "));

// console.log(miArray.indexOf(560)); // El -1 indica que el valor no existe en el Array
// console.log(miArray.includes(56)); 
// console.log(miArray.includes(560)); 

// const stringArray = ["Hola", "mundo", "CoderHouse"];
// for(let i = 0; i < stringArray.length; i++){
//     console.log(i + ": " + stringArray[i]);
// }

// console.log(stringArray.join(", "));
// console.log(stringArray.indexOf("560")); /// Me imprime el indice en formato numero
// console.log(stringArray.includes("CoderHouse"));
// console.log(stringArray.includes("560"));


// const stringArray = ["Hola", "mundo", "CoderHouse"];

// console.log(stringArray.sort()); // Ordena Ascendentemente (Alfabeticamente)
// console.log(stringArray.sort().reverse()); // Ordena Descendentemente (Alfabeticamente)

// const miArray = [1, 2, 5, 56, 0, -8, 1];

// console.log(miArray.sort());
// console.log(miArray.sort().reverse());

// Objeto
// const productos = [
//     {
//         id: 1,
//         nombre: "Azucar",
//         precio: 1080.50
//     },
//     {
//         id: 2,
//         nombre: "Yerba",
//         precio: 980.50
//     },
//     {
//         id: 3,
//         nombre: "Café",
//         precio: 3500.50
//     }
// ];

// console.log(productos[0]);
// console.log(productos[0].id)
// console.log(productos[0].nombre)
// console.log(productos[0].precio)
// productos.push({ id: 4, nombre: "Coca Cola", precio: 1200, descripcion: "Fria" }); // Objeto literal

class Producto {

    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    sumarIva(){
        this.precio =  parseFloat((this.precio * 1.21).toFixed(2));
    }
}

const productos = [];
productos.push(new Producto(1, "Azucar", 1250.50));
productos.push(new Producto(2, "Yerba", 1350.65));
productos.push(new Producto(3, "Café", 3250.65));
productos.push(new Producto(4, "Coca Cola", 1800.65));
productos.push(new Producto(5, "Pepsi", 1750));

// for of
for(const producto of productos){ // Por cada producto del Array productos
    producto.sumarIva();
    console.log(producto);
}