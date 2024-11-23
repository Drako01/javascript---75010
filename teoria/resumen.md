# Algo de teoria para complementar.

### **Funciones de Orden Superior (Higher-Order Functions)**

---

### **¿Qué son?**
Son funciones que **reciben** otras funciones como **argumentos**, **devuelven** una función, o ambas. Estas funciones son una característica clave de la programación funcional y permiten un código más reutilizable, modular y fácil de leer.

---

### **¿Por qué son útiles?**
1. Facilitan la manipulación de datos.
2. Permiten escribir código más compacto y expresivo.
3. Ayudan a abstraer lógica repetitiva.

---

### **Características principales**
Una función es de orden superior si:
1. **Recibe otra función como argumento**.
   Ejemplo: `array.map(callback)`.
2. **Devuelve otra función como resultado**.
   Ejemplo: funciones que generan otras funciones.

---

### **Ejemplos comunes de funciones de orden superior**
1. **`forEach()`**
2. **`map()`**
3. **`filter()`**
4. **`reduce()`**

---

### **Ejemplo 1: Función que recibe otra función como argumento**
```javascript
function operarNumeros(a, b, operacion) {
    return operacion(a, b);
}

//const operarNumeros = (a, b, operacion) => operacion(a, b);

const suma = (x, y) => x + y;
const resta = (x, y) => x - y;
const multiplicacion = (x, y) => x * y;
const division = (x, y) => {
    if (y === 0) {
        return "Error: División por cero no permitida";
    }
    return x / y;
};

// Probando las operaciones
console.log(operarNumeros(6, 3, suma));          // Salida: 9
console.log(operarNumeros(6, 3, resta));         // Salida: 3
console.log(operarNumeros(6, 3, multiplicacion)); // Salida: 18
console.log(operarNumeros(6, 3, division));      // Salida: 2

// Caso especial: división por 0
console.log(operarNumeros(6, 0, division));      // Salida: "Error: División por cero no permitida"

```
Aquí, `operarNumeros` es de orden superior porque recibe una función (`suma` o `multiplicacion`) como argumento.

---

### **Ejemplo 2: Función que devuelve otra función**
```javascript
function crearMultiplicador(factor) {
    return function (numero) {
        return numero * factor;
    };
}

const porDos = crearMultiplicador(2);
const porTres = crearMultiplicador(3);

console.log(porDos(5));  // Salida: 10
console.log(porTres(5)); // Salida: 15
```
En este caso, `crearMultiplicador` es de orden superior porque **devuelve otra función**.

---

### **Ejemplo 3: Uso con arrays**
Las funciones como `map`, `filter` y `reduce` son ejemplos clásicos de funciones de orden superior porque toman una **función callback** para operar sobre los elementos de un array.

#### **`map()`**
Aplica una transformación a cada elemento del array.
```javascript
const numeros = [1, 2, 3, 4];
const dobles = numeros.map((num) => num * 2);
console.log(dobles); // Salida: [2, 4, 6, 8]
```

#### **`filter()`**
Filtra elementos según una condición.
```javascript
const numeros = [1, 2, 3, 4];
const pares = numeros.filter((num) => num % 2 === 0);
console.log(pares); // Salida: [2, 4]
```

#### **`reduce()`**
Combina los elementos del array en un único valor.
```javascript
const numeros = [1, 2, 3, 4];
const suma = numeros.reduce((acum, num) => acum + num, 0);
console.log(suma); // Salida: 10
```

---

### **Resumen visual**

| **Caso**                      | **Explicación**                              | **Ejemplo**                                      |
|-------------------------------|----------------------------------------------|------------------------------------------------|
| Recibe una función            | Toma otra función como argumento.           | `array.map((x) => x * 2)`                      |
| Devuelve una función          | Retorna otra función para uso posterior.    | `crearMultiplicador(3)` devuelve `(x) => x * 3`|
| Array HOF (`map`, `filter`)   | Operan sobre arrays con una función.        | Ver ejemplos de `map`, `filter`, `reduce`.     |


--- 

## Funciones mas comunes:

### La función `sort`
El método `sort` en JavaScript se utiliza para ordenar los elementos de un array. Por defecto, lo hace considerando los elementos como cadenas de texto, lo que puede generar resultados inesperados al trabajar con números.

Por ejemplo:
```javascript
const numeros = [40, 1, 5, 200];
numeros.sort();
console.log(numeros);
// Salida: [1, 200, 40, 5]
```
Esto ocurre porque `sort` ordena en orden lexicográfico (como si estuvieras comparando palabras), no en orden numérico.

Para solucionar esto, usamos una **función de comparación** dentro del `sort`.

---

### La función de comparación `(a, b) => a - b`
Cuando usas una función de comparación, el método `sort` decide el orden de los elementos en base al valor que retorna la función para cada par de elementos `(a, b)`:

- **Si la función retorna un número negativo** (`a - b < 0`), `a` se coloca antes que `b`.
- **Si retorna 0** (`a - b === 0`), el orden entre ellos no cambia.
- **Si retorna un número positivo** (`a - b > 0`), `b` se coloca antes que `a`.

Entonces, `(a, b) => a - b` es una forma de decirle a `sort` que ordene los números en **orden ascendente**.

---

#### Ejemplo paso a paso para `a - b`:

Array original:
```javascript
[40, 1, 5, 200]
```

1. Compara `40` y `1`:
   - `a = 40`, `b = 1`
   - `a - b = 40 - 1 = 39` (positivo)
   - Como el resultado es positivo, **`b` se coloca antes que `a`**.

2. Compara los siguientes números siguiendo la misma lógica:
   - Orden resultante: `[1, 5, 40, 200]`.

---

### ¿Qué pasa si uso `b - a`?
Cambiar el orden a `(b - a)` simplemente invierte la lógica. Ahora:

- **Si la función retorna un número negativo** (`b - a < 0`), `b` se coloca antes que `a`.
- **Si retorna un número positivo** (`b - a > 0`), `a` se coloca antes que `b`.

Esto resulta en un orden **descendente**.

#### Ejemplo paso a paso para `b - a`:

Array original:
```javascript
[40, 1, 5, 200]
```

1. Compara `40` y `1`:
   - `a = 40`, `b = 1`
   - `b - a = 1 - 40 = -39` (negativo)
   - Como el resultado es negativo, **`a` se coloca antes que `b`**.

2. Compara los siguientes números siguiendo la misma lógica:
   - Orden resultante: `[200, 40, 5, 1]`.

---

### Resumen
- `(a, b) => a - b`: Orden ascendente (de menor a mayor).
- `(a, b) => b - a`: Orden descendente (de mayor a menor).


### Finalmente quedará algo así:

```js
const numeros = [40, 1, 5, 200];
const orden = (a, b) => a - b;
numeros.sort(orden);
console.log(numeros);
```
#### o así:

```js
const numeros = [40, 1, 5, 200];
numeros.sort((a, b) => a - b);
console.log(numeros);
```

---

## Otros Metodos de Array

## 1. **`forEach()`**
### **¿Qué hace?**
Ejecuta una función para **cada elemento** de un array, pero **no crea un nuevo array** ni devuelve nada. Es útil para realizar operaciones o efectos secundarios (como imprimir en consola).

### **Sintaxis:**
```javascript
array.forEach((elemento, índice, array) => {
    // Código para cada elemento
});
```

### **Ejemplo:**
Imprimir cada número del array:
```javascript
const numeros = [1, 2, 3, 4, 5];
numeros.forEach((num) => {
    console.log(num);
});
// Salida:
// 1
// 2
// 3
// 4
// 5
```

### Algunos ejemplos que usan `forEach` para diferentes casos, incluyendo uno donde se utiliza el índice:

---

### **1. Recorrer un array e imprimir cada elemento**
```javascript
const frutas = ["manzana", "plátano", "cereza", "durazno"];

frutas.forEach((fruta) => {
    console.log(`Fruta: ${fruta}`);
});
// Salida:
// Fruta: manzana
// Fruta: plátano
// Fruta: cereza
// Fruta: durazno
```

---

### **2. Uso del índice**
```javascript
const frutas = ["manzana", "plátano", "cereza", "durazno"];

frutas.forEach((fruta, indice) => {
    console.log(`Índice: ${indice}, Fruta: ${fruta}`);
});
// Salida:
// Índice: 0, Fruta: manzana
// Índice: 1, Fruta: plátano
// Índice: 2, Fruta: cereza
// Índice: 3, Fruta: durazno
```

---

### **3. Modificar elementos dentro del array**
Aunque `forEach` no devuelve un nuevo array, puedes modificar los elementos directamente:
```javascript
const numeros = [10, 20, 30, 40];

numeros.forEach((num, indice, array) => {
    array[indice] = num * 2; // Duplicar cada número
});

console.log(numeros); // Salida: [20, 40, 60, 80]
```

---

### **4. Contar elementos según una condición**
```javascript
const edades = [12, 17, 19, 21, 15];
let mayoresDeEdad = 0;

edades.forEach((edad) => {
    if (edad >= 18) {
        mayoresDeEdad++;
    }
});

console.log(`Número de mayores de edad: ${mayoresDeEdad}`); 
// Salida: Número de mayores de edad: 2
```

---

### **5. Crear un objeto basado en un array (usando índice)**

```javascript
const frutas = ["manzana", "plátano", "cereza", "durazno"];
const inventario = {};

frutas.forEach((fruta, indice) => {
    inventario[indice] = fruta; // Asignar el índice como clave
});

console.log(inventario);
```

### Paso 1: Declaración del array `frutas`
```javascript
const frutas = ["manzana", "plátano", "cereza", "durazno"];
```
- Aquí estamos creando un **array** llamado `frutas`, que contiene 4 elementos: `"manzana"`, `"plátano"`, `"cereza"`, y `"durazno"`. Cada uno de estos elementos es una cadena de texto (string).

### Paso 2: Declaración del objeto `inventario`
```javascript
const inventario = {};
```
- Aquí estamos creando un **objeto vacío** llamado `inventario`. Este objeto es donde vamos a almacenar las frutas, pero con sus **índices** como claves, en lugar de ser simplemente un array.

### Paso 3: Uso del método `forEach` para recorrer el array
```javascript
frutas.forEach((fruta, indice) => {
    inventario[indice] = fruta; // Asignar el índice como clave
});
```
- **`frutas.forEach(...)`**: Este método **`forEach`** recorre el array `frutas`, y ejecuta la función que le pasamos en cada elemento del array. En este caso, la función que pasamos es una **función flecha**.
- La función que pasa a `forEach` tiene dos parámetros:
  1. **`fruta`**: Este es el valor del elemento actual del array. En cada iteración del ciclo, `fruta` tomará el valor de la fruta en el array (primero `"manzana"`, luego `"plátano"`, etc.).
  2. **`indice`**: Este es el índice o la posición en el array del elemento que estamos procesando. Por ejemplo, para `"manzana"`, el índice será `0`, para `"plátano"` será `1`, y así sucesivamente.

- **`inventario[indice] = fruta;`**: Dentro de la función, estamos utilizando el índice como clave para agregar un nuevo par **clave-valor** al objeto `inventario`.
  - El **índice** (como clave) es el número que representa la posición de la fruta en el array (por ejemplo, `0`, `1`, `2`, `3`).
  - El **valor** es el nombre de la fruta (por ejemplo, `"manzana"`, `"plátano"`, etc.).
  
En cada iteración del `forEach`, estamos añadiendo una nueva propiedad al objeto `inventario`. Esto es lo que ocurre en cada paso:

1. Para la fruta `"manzana"`, en el índice `0`:  
   `inventario[0] = "manzana";`
   
2. Para la fruta `"plátano"`, en el índice `1`:  
   `inventario[1] = "plátano";`
   
3. Para la fruta `"cereza"`, en el índice `2`:  
   `inventario[2] = "cereza";`
   
4. Para la fruta `"durazno"`, en el índice `3`:  
   `inventario[3] = "durazno";`

### Paso 4: Resultado final

Después de que el `forEach` haya recorrido todo el array `frutas`, el objeto `inventario` tendrá las siguientes propiedades:

```javascript
{
  0: "manzana",
  1: "plátano",
  2: "cereza",
  3: "durazno"
}
```

**Explicación del resultado:**
- El objeto `inventario` ahora tiene 4 propiedades, donde las claves son los índices del array (0, 1, 2, 3) y los valores son los nombres de las frutas correspondientes.
- En vez de un array, que usa posiciones numéricas automáticas, hemos creado un objeto donde las claves son los índices y los valores son los elementos del array.

### Resumen:
- **`forEach`** recorre el array `frutas`.
- En cada iteración, toma el índice y el valor de cada fruta y los usa para agregar una nueva propiedad al objeto `inventario`, donde la clave es el índice y el valor es la fruta.
- El resultado es un objeto con claves numéricas (los índices) y valores que son las frutas.



---

### **6. Acumular valores en un contador**
```javascript
const numeros = [5, 10, 15, 20];
let suma = 0;

numeros.forEach((num) => {
    suma += num; // Sumar cada número al total
});

console.log(`La suma total es: ${suma}`); 
// Salida: La suma total es: 50
```

---

### **Notas clave sobre `forEach`:**
- **No devuelve un nuevo array:** Para eso, usa `map`.
- Podes acceder a tres parámetros: el elemento, el índice y el array completo.
- Es ideal para realizar operaciones **por cada elemento** sin necesidad de un valor de retorno.



---

## 2. **`filter()`**
### **¿Qué hace?**
Crea un **nuevo array** con los elementos que cumplen una condición (aquellos para los que la función retorna `true`).

### **Sintaxis:**
```javascript
const nuevoArray = array.filter((elemento, índice, array) => {
    return condición; // Retorna true o false
});
```

### **Ejemplo:**
Filtrar los números mayores a 3:
```javascript
const numeros = [1, 2, 3, 4, 5];
const mayoresA3 = numeros.filter((num) => num > 3);
console.log(mayoresA3);
// Salida: [4, 5]
```

---

## 3. **`map()`**
### **¿Qué hace?**
Crea un **nuevo array** transformando cada elemento según una función. Es útil para aplicar una operación a todos los elementos.

### **Sintaxis:**
```javascript
const nuevoArray = array.map((elemento, índice, array) => {
    return nuevoValor;
});
```

Dejo varios ejemplos prácticos con el método **`map()`**, que son ideales para transformar arrays:

---

### **1. Multiplicar cada número por 2**
```javascript
const numeros = [1, 2, 3, 4, 5];
const dobles = numeros.map((num) => num * 2);

console.log(dobles); // Salida: [2, 4, 6, 8, 10]
```
**Explicación:**  
- `map` crea un nuevo array donde cada elemento se multiplica por 2.

---

### **2. Convertir a mayúsculas**
```javascript
const frutas = ["manzana", "plátano", "cereza", "durazno"];
const frutasMayusculas = frutas.map((fruta) => fruta.toUpperCase());

console.log(frutasMayusculas); 
// Salida: ['MANZANA', 'PLÁTANO', 'CEREZA', 'DURAZNO']
```

---

### **3. Transformar objetos**
```javascript
const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 20 },
];

const nombres = personas.map((persona) => persona.nombre);

console.log(nombres); 
// Salida: ['Juan', 'María', 'Pedro']
```
**Explicación:**  
- Aquí `map` extrae los nombres de un array de objetos.

---

### **4. Calcular descuentos**
```javascript
const precios = [100, 200, 300];
const preciosConDescuento = precios.map((precio) => precio * 0.9);

console.log(preciosConDescuento); 
// Salida: [90, 180, 270]
```
**Explicación:**  
- Se calcula un 10% de descuento para cada precio y se genera un nuevo array con los valores.

---

### **5. Añadir índices a los elementos**
```javascript
const frutas = ["manzana", "plátano", "cereza"];
const frutasConIndices = frutas.map((fruta, indice) => `${indice + 1}. ${fruta}`);

console.log(frutasConIndices);
// Salida: ['1. manzana', '2. plátano', '3. cereza']
```
**Explicación:**  
- Se usa el índice para agregar un número al principio de cada elemento.

---

### **6. Crear nuevos objetos**
```javascript
const numeros = [1, 2, 3, 4];
const objetosNumeros = numeros.map((num) => ({ valor: num }));

console.log(objetosNumeros);
// Salida: [{ valor: 1 }, { valor: 2 }, { valor: 3 }, { valor: 4 }]
```
**Explicación:**  
- Cada número del array original se convierte en un objeto con una clave `valor`.

---

### **7. Elevar al cuadrado**
```javascript
const numeros = [2, 3, 4, 5];
const cuadrados = numeros.map((num) => num ** 2);

console.log(cuadrados); 
// Salida: [4, 9, 16, 25]
```
**Explicación:**  
- Eleva cada número del array original al cuadrado.

---

### **8. Cambiar formato de fecha**
```javascript
const fechas = ["2024-11-23", "2024-12-01", "2024-12-25"];
const fechasFormateadas = fechas.map((fecha) => {
    const [anio, mes, día] = fecha.split("-");
    return `${día}/${mes}/${anio}`;
});

console.log(fechasFormateadas); 
// Salida: ['23/11/2024', '01/12/2024', '25/12/2024']
```
**Explicación:**  
- `map` transforma el formato de fecha de `YYYY-MM-DD` a `DD/MM/YYYY`.

---

### **9. Convertir valores booleanos a texto**
```javascript
const booleanos = [true, false, true, false];
const texto = booleanos.map((valor) => (valor ? "Sí" : "No"));

console.log(texto); 
// Salida: ['Sí', 'No', 'Sí', 'No']
```

---

### **10. Operar con índices**
```javascript
const numeros = [10, 20, 30];
const resultado = numeros.map((num, indice) => num + indice);

console.log(resultado);
// Salida: [10, 21, 32]
```
**Explicación:**  
- Se suma cada número con su índice en el array.

---

### Resumen sobre **`map()`**:
1. **Crea un nuevo array** (no modifica el original).
2. Opera sobre **cada elemento** y **retorna el valor transformado**.
3. Ideal para **transformaciones** o **mapear estructuras de datos**. 



---

## 4. **`reduce()`**
### **¿Qué hace?**
Reduce todos los elementos de un array a un único valor acumulado. Recibe una función con un **acumulador** y el **elemento actual**.

### **Sintaxis:**
```javascript
const resultado = array.reduce((acumulador, elemento, índice, array) => {
    return nuevoAcumulador;
}, valorInicial);
```

### **Ejemplo:**
Sumar todos los números del array:
```javascript
const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(suma);
// Salida: 15
```

---

### **Resumen visual**
| Método       | **Descripción**                           | **Resultado**                       | **Ejemplo (con [1, 2, 3])** |
|--------------|-------------------------------------------|--------------------------------------|-----------------------------|
| `forEach()`  | Ejecuta algo para cada elemento.          | No retorna nada.                    | Imprime: 1, 2, 3.          |
| `filter()`   | Filtra elementos que cumplen una condición. | Nuevo array con los que pasan.      | `[2, 3]` si condición: `>1`.|
| `map()`      | Transforma cada elemento.                 | Nuevo array con elementos transformados. | `[2, 4, 6]` si `*2`.       |
| `reduce()`   | Combina todos los elementos en uno.       | Valor único.                        | `6` si suma.               |




---

## [Autor: Alejandro Di Stefano](https://github.com/Drako01)