// 705.484.450-52 | 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 42 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número for maior que 9, consideramos 0

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11  10 9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
*/

function ValidadorCPF(cpf) {
	Object.defineProperty(this, 'cpfLimpo', {
		get: () => cpf.replace(/\D+/g, ''),
	});
}
ValidadorCPF.prototype.calculaCpfDigito = function (cpfArray) {
	const numVerificacao = cpfArray.reduce((acc, curr, i) => acc + Number(curr) * (cpfArray.length + 1 - i), 0);
	let digito = 11 - (numVerificacao % 11);
	return digito > 9 ? '0' : String(digito);
};
ValidadorCPF.prototype.valido = function () {
	if (typeof this.cpfLimpo !== 'string') return false;
	if (this.cpfLimpo.length !== 11) return false;
	if (this.isSequencia()) return false;

	const cpfArray = Array.from(this.cpfLimpo.slice(0, -2));

	cpfArray.push(this.calculaCpfDigito(cpfArray));
	cpfArray.push(this.calculaCpfDigito(cpfArray));

	return cpfArray.join('') === this.cpfLimpo;
};
ValidadorCPF.prototype.isSequencia = function () {
	return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
};

const cpf = new ValidadorCPF('705.484.450-52');
const cpfInvalido = new ValidadorCPF('111.111.111-11');
console.log(cpf.valido());
console.log(cpfInvalido.valido());
