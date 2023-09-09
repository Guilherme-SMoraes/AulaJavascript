const nomes = ['Luiz', 'Otávio', 'Henrique'];

// For clássico -> Geralmente com iteráveis (array ou strings)
for (let i = 0; i < nomes.length; i++) {
	console.log(nomes[i]);
}
console.log('===');
// For in -> Retorna o índice ou chave (string, arrays ou objetos)
for (let i in nomes) {
	console.log(nomes[i]);
}
console.log('===');
// For of -> retorna o valor em si (iteráveis, arrays ou strings)
for (let letra of nomes) {
	console.log(letra);
}
console.log('===');
nomes.forEach(function (valor, indice, array) {
	console.log(valor, indice, array);
});
