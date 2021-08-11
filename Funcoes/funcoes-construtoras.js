/* Funções construtores/ function constructor 

* usa a expressão "new";
* constroi um novo objeto;
* Usa a keyword this;
* OBS: É uma boa prática botar a primeira letra em maiúsculo
*/ 

    function Person(name) {
        this.name = name,
        this.age = 18;
        this.walk = function() {
            return this.name + " está andando"
        }
    }
    
    const leo = new Person("Leo");
    const joao = new Person("João")
    
    console.log(`${leo.walk()} e ${joao.walk()}`)   


    