const pessoa = {
	nome: 'Guilherme',
	sobrenome: 'Moraes',
	idade: 30,
	endereco: {
		rua: 'Rua 123',
		numero: 123,
	},
};
const {
	nome = null,
	endereco: { rua: r, numero },
	endereco,
	...resto
} = pessoa;
console.log(nome, r, endereco, resto);
