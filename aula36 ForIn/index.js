// For in -> lê os índices ou chaves do objeto
const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana', 'Manga'];
const pessoa = {
	nome: 'Guilherme',
	sobrenome: 'Moraes',
	idade: 30,
	endereco: {
		rua: 'Rua 123',
		numero: 123,
	},
};

for (let i in frutas) {
	console.log(frutas[i]);
}
for (let chave in pessoa) {
	console.log(pessoa[chave]);
}
