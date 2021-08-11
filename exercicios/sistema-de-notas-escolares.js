/* Algorítmo que tem que transformar as notas para o sistema ABC 

* De 90 para cima - A
* Entre 80-89     - B    
* Entre 70 - 79   - C
* Entre 60 - 69   - D
* Menor que 60    - F


*/

let nota = -1
let A = nota >= 90 && nota <= 100
let B = nota >= 80 && nota <= 89
let C = nota >= 70 && nota <= 79
let D = nota >= 60 && nota <= 69
let F = nota < 60 && nota >= 0

if(A) {
    console.log('Parabéns, você tirou A!!!')
} else if(B){
    console.log('Sua nota é B!')
} else if(C) {
    console.log('Sua nota é C')
} else if(D) {
    console.log('Sua nota é D!')
} else if(F){
    console.log('Sua nota é F!')
} else{
    console.log("digite um valor entre 0 e 100 ")
}



