/* Scope 

* let e const 
    Eles são variáveis locais, ou seja, só funcionam dentro do escope que foram criados.

    */

    let y = 10; 
    
    {
        let y = 0
        console.log(y)
    }
    
    console.log(y);