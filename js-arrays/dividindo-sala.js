const alunos = ["João", "Juliana", "Ana", "Caio", "Lara", "Marjorie", "Guilherme", "Aline", "Fabiana", "André", "Carlos", "Paulo", "Bia", "Vivian", "Isabela", "Vinicius", "Renan", "Renata", "Daisy", "Camilo"];

const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(10); //não colocando o segundo número o .slice() compreende que queremos até o final do total da lista, ou podemos colocar apenas alunos.length / 2

console.log(sala1);
console.log(sala2);
