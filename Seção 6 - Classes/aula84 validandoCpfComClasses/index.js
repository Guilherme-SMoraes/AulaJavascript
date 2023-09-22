class ValidadorCPF {
	constructor(cpf) {
		Object.defineProperty(this, 'cpfLimpo', {
			enumerable: false,
			writable: false,
			configurable: false,
			value: cpf.replace(/\D+/g, ''),
		});
	}
	// T
	isSequencia() {
		return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
	}
	calculaDigito(cpfArray) {
		const somaVerificacao = cpfArray.reduce((acc, curr, i) => acc + Number(curr) * (cpfArray.length + 1 - i), 0);
		const novoDigito = 11 - (somaVerificacao % 11);
		return novoDigito > 9 ? '0' : String(novoDigito);
	}
	cpfValido() {
		if (!this.cpfLimpo) return false;
		if (typeof this.cpfLimpo !== 'string') return false;
		if (this.cpfLimpo.length !== 11) return false;
		if (this.isSequencia()) return false;

		const cpfArray = Array.from(this.cpfLimpo.slice(0, -2));
		cpfArray.push(this.calculaDigito(cpfArray));
		cpfArray.push(this.calculaDigito(cpfArray));

		return cpfArray.join('') === this.cpfLimpo;
	}
}
const validaCpf = new ValidadorCPF('705.484.450-52');
console.log(validaCpf.cpfValido());
