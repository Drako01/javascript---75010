// console.log("Inicio del Programa");

// function funcionA(){
//     console.log("Entrando a la funcionA");
//     funcionB();
//     console.log("Saliendo a la funcionA");
// }


// function funcionB(){
//     console.log("Entrando a la funcionB");
//     console.log("Saliendo a la funcionB");
// }

// setTimeout(() =>{
//     console.log("Corriendo el setTimeout (Tarea Asincrona 1 a 0ms)");
// }, 0)

// setTimeout(() =>{
//     console.log("Corriendo el setTimeout (Tarea Asincrona 2 a 3000ms)");
// }, 3000)

// setTimeout(() =>{
//     console.log("Corriendo el setTimeout (Tarea Asincrona 3 a 1000 ms)");
// }, 1000)

// funcionA();

// console.log("Fin del Programa");

// setInterval(() => {
//     console.log("Buenos dias");
// }, 2000);

// let segundos = 0;
// let minutos = 0;
// let horas = 0;

// const cronometro = setInterval(() => {
//     segundos++;

//     if(segundos === 60){
//         segundos = 0;
//         minutos++;
//     }

//     if(minutos === 60){
//         minutos = 0;
//         horas++;
//     }

//     let horasStr = horas.toString();
//     if(horas < 10) {
//         horasStr = '0' + horas;
//     }

//     let minutosStr = minutos.toString();
//     if(minutos < 10) {
//         minutosStr = '0' + minutos;
//     }
//     let segundosStr = segundos.toString();
//     if(segundos < 10) {
//         segundosStr = '0' + segundos;
//     }


//     const tiempo = horasStr + ':' + minutosStr + ':' + segundosStr;
//     console.log(tiempo);
// }, 1000);

// setTimeout(() => {
//     clearInterval(cronometro);
//     console.log("Cronometro detenido");
// }, 10000);


// Promesas
