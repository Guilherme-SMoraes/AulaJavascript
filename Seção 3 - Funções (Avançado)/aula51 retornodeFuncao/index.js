// return -> retorna um valor e finaliza a função

function soma(a, b) {
	return a + b;
}
function criaPessoa(nome, sobrenome) {
	return { nome, sobrenome };
}
const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = {
	nome: 'João',
	sobrenome: 'Otávio',
};
console.log(p1);
console.log(p2);

function falaFrase(comeco) {
	function falaResto(resto) {
		return comeco + ' ' + resto;
	}
	return falaResto;
}
const olaMundo = falaFrase('Olá');
console.log(olaMundo);
const resto = olaMundo('mundo!');
console.log(resto);

// Isso aqui é uma função que quando chamada cria um closure
function criaMultiplicador(multiplicador) {
	return function (n) {
		return n * multiplicador;
	};
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
