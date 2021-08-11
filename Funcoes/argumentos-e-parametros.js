/*  Function expression
    Function anonymous 
    |
    |
    --> È quando a função é declarada dentro de uma constante, assim, a funcão em si não receve nome, seu nome se torna o nome declarado na variável

    */
                        //Parâmetro da função 
    const sum =  function(number1, number2) {
        console.log(number1 + number2) //O console.log() precisa necessariamente estar dentro do escopo da função 
    }
//Parâmetro (parameter) é o valor recebido quando uma função é criada.

sum(2, 5) // <-- Argumentos da função 

// argumento = valor recebido quando se invoca a função. De uma maneira ignorante : é como se o parâmetro fosse um let e o argumento fosse o valor recebido pelo let. por exemplo: let number1 = 2; let number2 = 5 

