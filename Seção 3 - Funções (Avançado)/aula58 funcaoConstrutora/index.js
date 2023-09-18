/**
 * @param {string} nome
 * @param {string} sobrenome
 */
function Pessoa(nome, sobrenome) {
	const ID = 123;
	this.nome = nome;
	this.sobrenome = sobrenome;

	this.metodo = function () {
		console.log(`o id é ${ID}`);
		console.log(`${this.nome}: sou um método`);
	};
}
const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');
console.log(p1);
p1.metodo();
