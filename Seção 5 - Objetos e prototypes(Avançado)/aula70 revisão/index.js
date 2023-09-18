// Criação literal de um objeto
const pessoa = {
	nome: 'Guilherme',
	sobrenome: 'Moraes',
};
console.log(pessoa.nome);
// ou
console.log(pessoa['nome']);
delete pessoa.nome;
console.log(pessoa);

// Construtor
const pessoa1 = new Object();
pessoa1.nome = 'Guilherme';
pessoa1.sobrenome = 'Moraes';
pessoa1.idade = 30;
pessoa1.falarNome = function () {
	return `${this.nome} está falando seu nome`;
};
pessoa1.getDatanascimento = function () {
	const dataAtual = new Date();
	return dataAtual.getFullYear() - this.idade;
};
console.log(pessoa1.getDatanascimento());
for (let chave in pessoa1) {
	console.log(pessoa1[chave]);
}
// Factory function
function criaPessoa(nome, sobrenome) {
	return {
		nome,
		sobrenome,
		get nomeCompleto() {
			return `${this.nome} ${this.sobrenome}`;
		},
	};
}
const pessoaFactory = criaPessoa('Luiz', 'Otávio');
console.log(pessoaFactory.nomeCompleto);
// Constructor function
function Pessoa(nome, sobrenome) {
	this.nome = nome;
	this.sobrenome = sobrenome;
}
const pessoaConstrutora = new Pessoa('Luiz', 'Miranda');
Object.freeze(pessoaConstrutora);
pessoaConstrutora.nome = 'Marcos';
console.log(pessoaConstrutora);
