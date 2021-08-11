/* Type conversion and type coersion

- Type conversion: quando eu troco um tipo de dado para outro tipo
- type coersion: quando o próprio javascript troca de maneira forçosa o tipo de dado para não dar nenhum problema.

*/

// Type conversion example: 
    console.log(Number("9") + 5)
// Aqui eu faço a conversão de string para número, assim, somando os Numbers.

// Type coersion example: 
    console.log("9" + 5)
// Aqui ele transforma coersitivamente o Number 5 em string, concatenando 