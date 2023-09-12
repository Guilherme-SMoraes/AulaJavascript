function somaTudo(a, b, c) {
	let total = 0;
	for (let argumento of arguments) {
		total += argumento;
	}
	console.log(total, a, b, c);
}
somaTudo(1, 2, 3, 4, 5, 6, 7, 8);
function funcao(a, b, c, d, e, f) {
	console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3);

function somaTresNumeros(a = 0, b = 2, c = 4) {
	console.log(a + b + c);
}
somaTresNumeros(2, undefined, 20);

function nomeSobrenomeIdade({ nome, sobrenome, idade }) {
	console.log(nome, sobrenome, idade);
}
nomeSobrenomeIdade({ nome: 'Luiz', sobrenome: 'Otávio', idade: 20 });

function desestruturacaoArray([valor1, valor2, valor3]) {
	console.log(valor1, valor2, valor3);
}
desestruturacaoArray(['Luiz Otávio', 'Miranda', 30]);

function conta(operador, acumulador, ...numeros) {
	for (let numero of numeros) {
		if (operador === '+') acumulador += numero;
		if (operador === '-') acumulador -= numero;
		if (operador === '*') acumulador *= numero;
		if (operador === '/') acumulador /= numero;
	}
	console.log(acumulador);
}
conta('*', 1, 20, 30, 40, 50);

// não existe arguments em uma arrowFunction, para ter ele precisa usar um rest operator
const arrowFunction = (...args) => {
	console.log(args);
};
arrowFunction(1, 2, 3, 4, 5);
