const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias= [alunos, medias];

function exibeNomeENota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        //console.log(`${aluno} está cadastrado!`);

        const indice = listaDeAlunosEMedias[0].indexOf(aluno); //indexOf retorna o valor que se encontra no índice do valor informado.

        //console.log(indice);

        const mediaDoAluno = listaDeAlunosEMedias[1][indice];

        console.log(`${aluno} está cadastrado(a) e possui a média ${mediaDoAluno}.`);
    } else {
        console.log(`${aluno} não foi encontrado(a)!`);
    }
}

exibeNomeENota("Juliana")
