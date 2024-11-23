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

### **Ejemplo:**
Multiplicar cada número por 2:
```javascript
const numeros = [1, 2, 3, 4, 5];
const dobles = numeros.map((num) => num * 2);
console.log(dobles);
// Salida: [2, 4, 6, 8, 10]
```

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