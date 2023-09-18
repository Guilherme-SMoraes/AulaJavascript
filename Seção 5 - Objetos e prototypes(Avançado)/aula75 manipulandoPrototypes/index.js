// new Object -> Object.prototype
const objA = {
	chaveA: 'A',
	// __proto__: Object.prototype
};

const objB = {
	chaveB: 'B',
	// __proto__: objA
};
Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);

function Produto(nome, preco) {
	this.nome = nome;
	this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
	this.preco = this.preco - this.preco * (percentual / 100);
};
Produto.prototype.aumento = function (percentual) {
	this.preco = this.preco + this.preco * (percentual / 100);
};
const p1 = new Produto('Camiseta', 50);
console.log(p1.preco);
p1.desconto(10);
console.log(p1.preco);

const p2 = {
	nome: 'Caneca',
	preco: '15',
};
console.log(p2);
Object.setPrototypeOf(p2, Produto.prototype);
console.log(p1);
console.log(p2);

const p3 = Object.create(Produto.prototype);
p3.preco = 70;
p3.aumento(10);
console.log(p3);
