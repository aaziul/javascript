const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota+1;
    //if(nota >= 10){
         //console.log(10);
    //} else {
        //nota + 1;
    //}
});

console.log(notasAtualizadas);
