/* 
    OPERATOR PRECEDENCE 
        PRECENDÊNCIA DOS OPERADORES

    * GROUPING                      ( )
    * NEGAÇÃO(NOT) E INCREMENTO          ! ++ --
    * MULTIPLICAÇÃO E DIVISÃO       * /
    * ADIÇÃO E SUBTRAÇÃO            * -
    * RELACIONAL                    < > >= <=
    * IGUALDADE                     == === != !==
    * AND                           &&
    * OR                            ||
    * CONDICIONAL                   ?:
    * ASSIGNMENT (ATRIBUIÇÃO)       = += -= *= 
    

    */

        console.log(3>2>1)
        // Pela ordem de precedência, o 3 é maior que 2, então deu true
        // Depois fica true>1, mas pela type coersion true é igual a 1, 
        // em razão disso o resultado da impressão é false. 