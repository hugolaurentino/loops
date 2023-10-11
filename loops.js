const numeroQualquer = [17, 26, 35, 44, 53]

console.log('while');
let contagem = 0
while (contagem < numeroQualquer.length) {
    console.log(numeroQualquer[contagem]);
    contagem++
}

console.log('for');
for (let contagem = 0; contagem < numeroQualquer.length; contagem++) {
    console.log(numeroQualquer[contagem]);
}

console.log('for...of');
for (const contador of numeroQualquer) {
    console.log(contador);
}