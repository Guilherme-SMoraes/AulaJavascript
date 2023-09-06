function Pessoa(nome, sobrenome, idade) {
	return {
		nome,
		sobrenome,
		idade,

		fala() {
			console.log(`${this.nome} ${this.sobrenome} está falando Oi!`);
		},
	};
}
const pessoa1 = Pessoa('Luis', 'Miranda', 25);
const pessoa2 = Pessoa('Luiza', 'Miranda', 25);
const pessoa3 = Pessoa('Maria', 'Miranda', 25);
const pessoa4 = Pessoa('Daniel', 'Miranda', 25);
const pessoa5 = Pessoa('Vitor', 'Miranda', 25);

pessoa1.fala();
