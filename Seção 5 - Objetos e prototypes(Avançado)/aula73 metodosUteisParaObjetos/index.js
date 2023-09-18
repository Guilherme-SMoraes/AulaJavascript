const produto = { nome: 'Caneca', preço: 1.8 };
const copiaProduto = { ...produto };
const outraCopiaProduto = Object.assign({}, produto);

console.log(produto);
console.log(copiaProduto);
console.log(outraCopiaProduto);

Object.defineProperty(produto, 'nome', {
	writable: false,
	configurable: false,
	value: 'Qualquer outra coisa',
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
produto.nome = 'Outra Coisa';
console.log(produto.nome);

console.log(Object.keys(produto));
console.log(Object.values(produto));
console.log(Object.entries(produto));

for (let [chave, valor] of Object.entries(produto)) {
	console.log(chave, valor);
}
