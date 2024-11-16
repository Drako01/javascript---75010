// Objetos
// const persona1 = {
//     id:1,
//     nombre: "Francisco",
//     apellido: "Arancibia",
//     edad: 20,
//     email: "francisco@email.com"
// }
// const persona2 = {
//     nombre: "Gaston",
//     apellido: "Zarate",
//     edad: 22,
//     email: "gaston@email.com"
// }

// console.log(persona1)
// console.log(persona2)

// function Persona(persona){ // Pasandole el Objeto Literal
//     this.id = persona.id;
//     this.nombre = persona.nombre;
//     this.apellido = persona.apellido;
//     this.edad = persona.edad;
//     this.email = persona.email;
// }

// const personaLiteral = new Persona({
//     id:1,
//     nombre: "Francisco",
//     apellido: "Arancibia",
//     edad: 20,
//     email: "francisco@email.com"
// })
// console.log(personaLiteral)

// Funciones Constructoras
// function Persona(id, nombre, apellido, edad, email){
//     this.id = id;
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//     this.email = email;
// }

// const francisco = new Persona(1, "Francisco", "Arancibia", 20, "francisco@mail.com ");
// console.log(francisco);

// francisco.nombre = "Francisco David";
// francisco["edad"] = 22;

// function Gato(nombre, edad, raza, color){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.raza = raza;
//     this.color = color;
// }

// function Perro(nombre, edad, raza, color){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.raza = raza;
//     this.color = color;
// }

// const gatito1 = new Gato("Michi", 2, "Cacrico", "Blanco");
// const gatito2 = new Gato("Tomy", 2, "Siames", "Gris");

// const perrito1 = new Perro("Daisy", 4, "Yorky", "Beige");

// console.log(gatito1);
// console.log(gatito2);
// console.log(perrito1);


function caminar(){ // Funcion es Global y es accesible desde cualquier lado
    console.log("Mi Animal esta caminado.!");
}

class Animal {
    constructor(tipo, nombre, edad, raza, color) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.color = color;
    }

    caminar() { // Es un metodo Propio de la Clase, y solo se accede desde cada instancia de Ella
        console.log("Mi " + this.tipo + " " + this.nombre + " esta caminado.!");
    }
}

const perrito = new Animal("Perro", "Daisy", 4, "Yorky", "Beige");
const gatito = new Animal("Gato", "Michi", 2, "Cacrico", "Blanco");

console.log(perrito);
console.log(gatito);

perrito.caminar();
gatito.caminar();

caminar();