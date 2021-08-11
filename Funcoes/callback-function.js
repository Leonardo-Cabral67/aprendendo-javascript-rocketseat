// Callback function

function sayMyName(name) {
    console.log('Antes de executar meu callback')

    name()

    console.log('Depois de executar meu callback')
}

sayMyName(
    () => {
        console.log('Minha função callback')
    }
)