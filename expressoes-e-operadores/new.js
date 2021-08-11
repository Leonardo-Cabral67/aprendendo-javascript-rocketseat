/* 
    NEW

    - É uma left-hand-side expression
    - Ele cria um novo objeto

*/

let name = new String("Leonardo")
let age = new Number(18)

name.surName = "Cabral"

console.log(`${name} ${name.surName} tem ${age} anos`)