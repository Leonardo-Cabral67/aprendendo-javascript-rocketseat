// Transformando uma string para array e contando seus caracteres

let word = "Paralelepípedo"
console.log(Array.from(word).length) //A primeira propriedade foi responsável por transformar minha string em array

// É o mesmo que eu tranformar uma string em array através do .split e não colocar espaço
// apenas o ("")

let array = word.split("")
console.log(array.length)

// Abaixo o array é transformado de volta em string através do .join("")

let string = array.join("")
console.log(string)