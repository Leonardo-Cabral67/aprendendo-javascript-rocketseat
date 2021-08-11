// Operador condicional ternário 

// Se(condição) então senão 
//    condição    ?     :

/*
let pao = true
let queijo = false

const niceBreakfast = pao || queijo ? "Ótimo café fa manhã" : "Café da manhão ruim"
console.log(niceBreakfast)

*/

function Person(name, age) {
    this.name = name
    this.age = age
    this.dirigir = function() {
        return(
             this.age >= 18 ? `${this.name} tem 18 anos e dirigir!`  : `${this.name} não pode dirigir!`
        )
    }
}
let Leo = new Person("Leo", 18)
let Gabriel = new Person("Gabriel", 17)
let Tony = new Person("tony", 50)

console.log(Tony.dirigir())

