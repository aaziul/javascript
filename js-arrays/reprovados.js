const alunos = [ "Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;
})

console.log(reprovados);

//PARA APRESENTAR APENAS OS APROVADOS:

//const alunos = [ "Ana", "Marcos", "Maria", "Mauro"];
//const medias = [7, 4.5, 8, 7.5];

//const aprovados = alunos.filter((aluno, indice) => {
    //return medias[indice] >= 7;
//})

//console.log(aprovados);
