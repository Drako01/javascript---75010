const cabecera = document.getElementById('header');
const navegacion = document.createElement('div');
const nav = document.createElement('nav');
const ul = document.createElement('ul');

cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className ='navbar';

// const links = ["Index", "products", "Contact"];

const links = [
    {
        link: "index",
        name: "Inicio"
    },
    {
        link: "products",
        name: "Productos"
    },
    {
        link: "contact",
        name: "Contacto"
    }

]

const liImagen = document.createElement('li');
const img = document.createElement('img');
const ORIGEN = document.createElement('a');
ORIGEN.href = '/';
ORIGEN.appendChild(img);
img.src = 'assets/img/logo.png';
img.alt = 'CoderHouse';

liImagen.appendChild(ORIGEN);
ul.appendChild(liImagen);


for (const link of links){
    const li =document.createElement('li');
    li.innerHTML = `<a href="${link.link.toLowerCase()}.html">${link.name}</a>`;
    ul.appendChild(li);
}

cabecera.style.backgroundColor = '#c2c2c2';


const footer = document.getElementsByTagName('footer');
const parrafoFooter = document.createElement('p');
const TIME = new Date().getFullYear();
footer[0].appendChild(parrafoFooter);
parrafoFooter.innerHTML = 'CoderHouse - ' + TIME + ' | Comisión #75010';