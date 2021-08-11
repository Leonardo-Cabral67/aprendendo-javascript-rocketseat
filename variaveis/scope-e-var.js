/* Scope (escopo)

* trata-se da visibilidade/acessibilidade do meu código

* tipos de escopo: 
1. Global;
2. Local;

{
    * Variáveis escopadas dentro de uma função não ficam acessíveis fora dela. 
}
*/

    console.log("Existe X antes do scope ?", x)

    {
        var x = 0
    }

    console.log("existe x depois do Scope ?", x) 

    /* Isso acontece porque a Variável 'var' é tanto global como local. 
            Ocorre um fenômeno chamado 'hoisting' (elevação).
                Pois o java script é lido de cima para baixo.
                    E por baixo dos panos a tag var é lida primeiro
                        OBS: apenas a tag var declarada é lida primeiro, mas não o seu valor.
        

    Então é como se acontecesse isso: */ 


    var y; // Aqui foi declarado o Var 

    console.log(y) // Aqui receberá 'undefined', pois o var declarado não recebeu nenhum valor ainda (no sentido de cima para baixo)

    {
        y = 10 //valor do meu var
    }

    console.log(y) // Aqui o X será lido, porque já recebeu seu valor !
