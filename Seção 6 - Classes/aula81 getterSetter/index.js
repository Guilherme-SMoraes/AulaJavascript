class Pessoa {
	constructor(nome, sobrenome) {
		this.nome = nome;
		this.sobrenome = sobrenome;
	}
	get nomeCompleto() {
		return `${this.nome} ${this.sobrenome}`;
	}
	set nomeCompleto(value) {
		value = value.split(' ');
		this.nome = value.shift();
		this.nome = value.join(' ');
	}
}
var p = new Pessoa('Marcos', 'Miranda');
console.log(p.nomeCompleto);
