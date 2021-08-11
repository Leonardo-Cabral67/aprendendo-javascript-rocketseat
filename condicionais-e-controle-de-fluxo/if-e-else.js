// ESTRUTURA DE CONTROLE DE FLUXO 

/* if(*CONDIÇÃO*) {

} ELSE IF (*OUTRA CONDIÇÃO*) {

} ELSE {

} */

let temperature = 381
let mildFever = temperature < 37.5 && temperature >=37
let highFever = temperature >= 37.5

if(highFever) {
    console.log("highFever")
} else if(mildFever) {
    console.log("mild fever")
} else{
    console.log("normal temperature")
}