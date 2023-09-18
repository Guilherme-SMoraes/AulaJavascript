// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
	Object.defineProperties(this, {
		nome: {
			enumerable: true, // mostra a chave
			value: nome, // valor
			writable: true, // se pode ser alterada
			configurable: true, // pode reconfigurar a chave
		},
		preco: {
			enumerable: true, // mostra a chave
			value: preco, // valor
			writable: true, // se pode ser alterada
			configurable: true, // pode reconfigurar a chave
		},
	});
	Object.defineProperty(this, 'estoque', {
		enumerable: false, // mostra a chave
		value: estoque, // valor
		writable: false, // se pode ser alterada
		configurable: false, // pode reconfigurar a chave
	});
}
const p1 = new Produto('Camiseta', 20, 3);
// não pode alterar pois writable = false
p1.estoque = 50000;
// não pode ser apagado pois configurable = false
delete p1.estoque;
console.log(p1);
// estoque não aparece pois enumerable = false
console.log(Object.keys(p1));
