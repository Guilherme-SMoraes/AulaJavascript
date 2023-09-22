class DispositivoEletronico {
	constructor(nome) {
		this.nome = nome;
		this.ligado = false;
	}
	ligar() {
		if (!this.ligado) this.ligado = true;
	}
	desligar() {
		if (this.ligado) this.ligado = true;
	}
}

class Smartphone extends DispositivoEletronico {
	constructor(nome, cor) {
		super(nome);
		this.cor = cor;
	}
}
const d1 = new Smartphone('Android', 'Branco');
d1.ligar();
console.log(d1);
