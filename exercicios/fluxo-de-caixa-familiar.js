/* 
Crie um objeto que possuirá 2 propriedades, ambas do tipo array 
    *receitas
    *despesas

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negarivo, seguindo o valor do saldo

*/ 


let family = {
    incomes: [5000, 4000, 2000, 8000],
    expenses: [3000, 1200, 2000, 900]
}

function sum(array) {
    let total = 0;
   
    for(let value of array) {
        total += value 
    }

    return total
}

function balance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    let positive = calculateIncomes - calculateExpenses
    let negative = calculateExpenses - calculateIncomes

    
     if( calculateIncomes > calculateExpenses) {
        console.log(`Seu saldo é positivo ! Você possui ainda possui R$${positive} !`)
    } else if(calculateExpenses > calculateIncomes){
        console.log(`Seu balanço está negativo! vocês gastam R$${negative} a mais do que ganham!`)
    } else{
        console.log('digire um valor!')
    }
    
}

balance()


