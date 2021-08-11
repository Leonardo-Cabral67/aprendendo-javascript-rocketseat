// Throw
function sayMyName (name = '') {
    if(name=== ''){
    throw 'Nome é obrigatório'
    }

    console.log(name)
}

//  try/cacth

try {
    sayMyName('leo')
} catch(e){
    console.log(e)
}

console.log("Após o try/catch")