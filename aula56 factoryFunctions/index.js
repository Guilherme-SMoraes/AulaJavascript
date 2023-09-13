// Factory function (função fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
	return {
		nome,
		sobrenome,
		get nomeCompleto() {
			return `${this.nome} ${this.sobrenome}`;
		},
		set nomeCompleto(value) {
			value = value.split(' ');
			this.nome = value.shift();
			this.sobrenome = value.join(' ');
		},
		altura,
		peso,

		fala(assunto) {
			return `${nome} ou ${this.nome} está falando sobre ${assunto}`;
		},
		// Getter
		get imc() {
			return (this.peso / this.altura ** 2).toFixed(2);
		},
	};
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
console.log(p1.imc);
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Guilherme dos Santos Moraes';
console.log(p1.nomeCompleto);
const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 42);
console.log(p2.imc);
p1.nome = 'Marcos';
console.log(p1.fala('js'));
console.log(p2.fala('js'));
