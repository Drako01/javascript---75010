# Algo de teoria para complementar.

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