const notas = [7,7,8,9];

const novasNotas = [...notas];
//as reticências (...) funciona como um ctrl+c e ctrl+v, ele copia e cola todos os elementos ontidos em um array sem precisar escrevê-los

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);
