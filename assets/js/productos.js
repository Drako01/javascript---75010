// const peticion = () => {
//     try{
//         const data = fetch('/productos.json')
//         console.log(data);
//     }catch (error){
//         console.error("Algo salio mal", error);
//     } finally {
//         console.log("Peticion Finalizada");
//     }

// }
// peticion();

// const peticion1 = () => {

//     fetch('/productos.json')
//     .then((respuesta) => respuesta.json())
//     .then((datos) => {
//         console.log(datos)
//         datos.forEach((item, index) => {
//             // console.log(`Producto ${index + 1}: ${item}`)
//             console.log(`Producto ${index + 1}:`, item)
//         });
//     })
//     .catch((error) => {
//         console.error("Error al realizar la peticion", error)
//     })
// }
// peticion1();

const cards = document.getElementById('cards');

const peticion2 = () => {

    fetch('/productos.json')
        .then((respuesta) => respuesta.json()) // 
        .then((datos) => {
            const data = datos; // Array
            // console.log(data)
            data.forEach((item) => {
                const card = document.createElement('div');
                card.innerHTML = `
                            <div class="card" style="width: 18rem; height: 32rem;">
                                <img class="card-img-top" src=${item.imagen} alt=${item.nombre}/>
                                <div class="card-body">
                                    <h5 class="card-title">${item.nombre}</h5>
                                    <p class="card-text">Descripcion: ${item.descripcion}</p>
                                    <p class="card-text">Precio: $${item.precio}.-</p>
                                    <p class="card-text">Stock: ${item.stock} Unid</p>
                                    <a href="#" class="btn btn-primary">Comprar</a>
                                </div>     
                            </div>                
                `
                cards.append(card);
            });
        })
        .catch((error) => {
            console.error("Error al realizar la peticion", error)
        })
}
// peticion2();

const peticion3 = async () => { // Funcion asincronica
    const respuesta = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Samsung') // Usamos Query Params => Dependo de la velocidad de respuesta del servidor
    // const respuesta = await fetch('/productos.json') // Respuesta inmediata
    const datos = await respuesta.json()
    const data = await datos.results
    for (item of data) {
        const card = document.createElement('div')
        card.innerHTML = `
                            <div class="card" style="width: 18rem; height: 32rem;">
                                <img class="card-img-top" src=${item.thumbnail} alt=${item.title}/>
                                <div class="card-body">
                                    <h5 class="card-title">${item.title}</h5>
                                    <p class="card-text">Proveedor: ${item.official_store_name}</p>
                                    <p class="card-text">Precio: $${item.price}.-</p>
                                    <a href="#" class="btn btn-primary">Comprar</a>
                                </div>     
                            </div>       
                            `
        cards.append(card)
    }
}

peticion3();