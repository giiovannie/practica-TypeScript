# glosario de temas que encontre 

## Nullish coalescing (??)

Devuelve el valor de la derecha solo si el de la izquierda es null o undefined. Sirve para dar un valor por defecto, y a diferencia de || respeta el 0 y el texto vacío.

~~~
const edad: number | null = null;
console.log(edad ?? 18); // 18
~~~

---

## Array

Forma alternativa de escribir un array tipado; equivale a T[].

~~~
const numeros: Array<number> = [1, 2, 3]; // igual que number[]
~~~
---
## Array de solo lectura (readonly)

Array cuyos elementos no se pueden agregar, quitar ni modificar.

~~~
const dias: readonly string[] = ["lunes", "martes"];
// dias.push("miércoles"); // Error: push no existe en un array de solo lectura
~~~

---

## Retorno inferido

Si no se escribe el tipo de retorno de una función, TypeScript lo deduce a partir de lo que devuelve.

~~~
const sumar = (a: number, b: number) => a + b; // retorna number
~~~
--- 

## Array de unión (string | number)[]

Un array donde cada elemento puede ser de un tipo u otro. Ojo con los paréntesis, porque cambian el significado.

~~~
const mezcla: (string | number)[] = ["a", 1, "b", 2]; // cada elemento puede ser string o number
const uniforme: string[] | number[] = [1, 2, 3];       // o todos son string o son todos number
~~~

---

