const animaisMarinhos = ['🐋', '🐙', '🐬', '🦈'];

animaisMarinhos.splice(1, 0, '🐠');
animaisMarinhos.splice(3, 2, '🐟'); 

//No aquário, o golfinho e o tubarão não estão presentes por conta do código animaisDoAquario.splice(3,2,'🐟'), que remove dois elementos do array, a partir da posição 3. Sendo assim, os elementos com índice 3 e 4 e os dois peixes entraram nas posições definidas pelo splice.

console.log(animaisMarinhos);
