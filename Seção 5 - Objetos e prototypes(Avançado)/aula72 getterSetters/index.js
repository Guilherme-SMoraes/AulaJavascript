function Produto(nome, preco, estoque) {
	this.nome = nome;
	this.preco = preco;

	let _estoque = estoque;
	Object.defineProperty(this, 'estoque', {
		enumerable: true, // mostra a chave
		configurable: true, // pode reconfigurar a chave
		get: function () {
			return _estoque;
		},
		set: function (value) {
			if (typeof value !== 'number') throw new TypeError('O estoque só aceita numbers');
			_estoque = value;
		},
	});
}
const p1 = new Produto('Camiseta', 20, 3);
console.log(p1.estoque);
p1.estoque = 5;
console.log(p1.estoque);
