const botonId = document.getElementById('boton');

const button = document.createElement('button');

button.textContent = "Click Aqui";
button.style.padding = "0.5rem 1rem";
button.style.margin = "1rem";
button.style.cursor = "pointer";
button.style.backgroundColor = "#c2c2c2";

usuario = {
    nombre: "Alejandro",
    apellido: "Di Stefano"
}

botonId.append(button);

button.addEventListener('click', () => {
    // alert("Me hizo Click")
    // Swal.fire({
    //     title: "Me hizo Click",
    //     text: "Cualquier cosa",
    //     icon: "question",
    //     imageUrl: "/assets/img/logo.png",
    //     footer: '<a href="https://coderhouse.com">Llevame a CoderHouse</a>'
    // });

    // Swal.fire({
    //     title: "Quiere finalizar la Compra?",
    //     text: "Recuerde que esto es irreversible!",
    //     icon: "question",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Si"
    // }).then((result) => {
    //     if (result.isConfirmed) {
    //         Swal.fire({
    //             title: "Compra confirmada",
    //             text: "Your file has been deleted.",
    //             icon: "success"
    //         });
    //     }
    // });

    Toastify({
        text: `${usuario.nombre} ${usuario.apellido} esta OnLine.!`,
        className: "info",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        gravity: "top",
        position: "left",
        avatar: "/assets/img/logo.png",
        close: true,
        // destination: "https://coderhouse.com",
        onClick: function () {
            // Toastify({
            //     text: "El usuario esta OnLine.!",
            //     position: "right",
            //     gravity: "bottom",
            //     duration: 3000, /// Milisegundos > Equivale a 3seg
            //     offset: {
            //         x: 300, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            //         y: 150 // vertical axis - can be a number or a string indicating unity. eg: '2em'
            //     },
            // }).showToast()
            Swal.fire({
                title: "Compra confirmada",
                text: "Solo debe abonar",
                icon: "success"
            });
        },
    }).showToast();
})