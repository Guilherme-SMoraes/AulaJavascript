const pessoas = [
	{ id: 3, nome: 'Luiz' },
	{ id: 2, nome: 'Maria' },
	{ id: 1, nome: 'Helena' },
];
const novasPessoas = {};
for (const { id, nome } of pessoas) {
	novasPessoas[id] = { id, nome };
}
console.log(novasPessoas);
// ou
const novasPessoas2 = new Map();
for (const pessoa of pessoas) {
	const { id } = pessoa;
	novasPessoas2.set(id, { ...pessoa });
}
console.log(novasPessoas2);
