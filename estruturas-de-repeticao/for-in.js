// For...in
// Usado para objetos

let person = {
    name: 'leo',
    age: 18,
    weight: 83,
}

for(let property in person){
    console.log(person[property])
}