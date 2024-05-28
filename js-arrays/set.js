const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);
//a classe Set não deixa repetir conteudos iguais

const nomesAtualizados = [...meuSet];
//transformando o Set em uma string

//PODERIAMOS ESCREVER TAMBÉM COMO:
//const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);
