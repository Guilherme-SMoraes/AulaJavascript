// Retorne a soma do dobro de todos os pares
// -> Filtra pares
// -> Dobrar Valores
// -> Reduzir (Somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const totalNumerosParesDobrados = numeros
	.filter((curr) => curr % 2 === 0)
	.map((curr) => curr * 2)
	.reduce((acc, curr) => acc + curr);
console.log(totalNumerosParesDobrados);
