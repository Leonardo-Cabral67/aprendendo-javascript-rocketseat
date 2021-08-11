/* 
    Buscando e contando dados em Arrays

    Baseado no Array de livros por categoria abaixo, faça os seguintes desafios

        * Contar o número de categorias e o número de livros em cada categoria
        * Contar o número de autores
        * Mostrar livros do autor Augusto Cury
        * Tranformar a função acima em uma função que irá receber onome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: 'T. Harv Eker',
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Letcher",
            } 
        ],   
    },
    {
        category: "Inteligência emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length

// console.log(totalCategories)
for(let category of booksByCategory){
    console.log("O total de livros da categoria:", category.category)
    console.log(category.books.length) 
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }
    
    console.log(`O total de autores é:${authors.length}`)
}

countAuthors();

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books){
            if(book.author === author ){
                books.push(book.title)
            }
        }
    }

    console.log(`Os livros do autor ${author} são: ${books.join(", ")}`)
}
booksOfAuthor('George S. Clason')

