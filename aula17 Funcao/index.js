function soma(x = 1, y = 1) {
	const resultado = x + y;
	return resultado;
	console.log('Isso não será executado');
}

const resultado = soma();
console.log(resultado);

const subtracao = function (x = 1, y = 1) {
	return x - y;
};
console.log(subtracao(5, 2));

const raizQuadrada = (n) => n ** 0.5;
console.log(raizQuadrada(9));
