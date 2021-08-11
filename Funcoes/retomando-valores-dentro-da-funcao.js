/* Retomando valores dentro da função: 

* Importante ressaltar que: a variável var não sofre hoisting quando está escopada dentro de uma função.
* Sempre colocar uma keyword dentro do escopo da função, pois isso pode prejudicar toda minha função.

*/ 

const sum = function(number1, number2) {
    const total = number1 + number2;
    return total //Com o return, eu especifico o que vai ser retornado, no caso será o total
}

let number1 = 23;
let number2 = 44; 

console.log (`O núemro 1 é ${number1}`);
console.log(`O número 2 é ${number2}`);
console.log(`O soma é ${sum(number1, number2)}`) // Tenho que especificar na minha função o que eu quero que ela me retorne 