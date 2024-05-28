//let x = "";
//console.log(x)
//x = "oi";

//DECLARAÇÃO DE FUNÇÃO

//1) Declara a função

function imprimeTexto(texto){
    console.log(texto)
}

// 2) executa a função (1 ou + vezes)

imprimeTexto("oi");
imprimeTexto("outro texto");

//três formas de escrever funções

function soma(){
    return 2 + 2;
    // return precisa estar sempre no final da função, pois o que vier depois do return não será executado
}

//console.log(soma());

imprimeTexto(soma());
