// tipo string (texto)

const texto = "Olá mundo!";
const texto2 = 'Olá mundo!';
const senha = "senhaSuperSegura456!";
const stringDeNumeros = "34567";

const citacao = 'Meu nome é ';
const meuNome = "Luiza";

//unicode (codigo para caracteres, emojis, alfabetos...)

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//concatenação (+)

console.log(citacao + meuNome)

//comparação entre strings

const cidade = "porto alegre";
const input = "Porto Alegre";

console.log(cidade == input) //false, o js diferencia maiusculos e minusculos

const inputMinusculo = input.toLowerCase();

console.log(cidade == inputMinusculo) //true, o comando '.toLowerCase()' colocou todas as letras em minusculo

console.log(senha.length) //20 caracteres, propriedade '.length' soma os caracteres da string

//template string OU template literal
