function main() {
	const form = document.querySelector('#frmIMC');
	const respostaDiv = document.querySelector('#resposta');

	function IndiceMassaCorporal(Peso, Altura) {
		return {
			Peso: Number(Peso),
			Altura: Number(Altura),

			ExibeResposta: function () {
				const imc = this.Peso / this.Altura ** 2;
				let resposta = `Seu IMC é ${imc.toFixed(2)} `;
				if (imc < 18.5) {
					resposta += '(Abaixo do peso)';
				} else if (imc < 25) {
					resposta += '(Peso Normal)';
				} else if (imc < 30) {
					resposta += '(Sobrepeso)';
				} else if (imc < 35) {
					resposta += '(Obesidade grau 1)';
				} else if (imc < 40) {
					resposta += '(Obesidade grau 2)';
				} else {
					resposta += '(Obesidade grau 3)';
				}
				return resposta;
			},
		};
	}
	function criaPResultado() {
		const p = document.createElement('p');
		return p;
	}
	function SetResultado(mensagem, isValid) {
		respostaDiv.innerHTML = '';
		const p = criaPResultado();
		p.innerHTML = mensagem;
		if (isValid) {
			p.classList.add('valida');
		} else {
			p.classList.add('invalida');
		}
		respostaDiv.appendChild(p);
	}

	function SubmitFormIMC(e) {
		e.preventDefault();
		const peso = Number(form.querySelector('#peso').value);
		const altura = Number(form.querySelector('#altura').value);
		const pesoEValido = !peso || peso <= 0;
		const alturaEValido = !altura || altura <= 0;

		if (pesoEValido) {
			SetResultado('Peso Inválido', false);
		} else if (alturaEValido) {
			SetResultado('Altura Invalida', false);
		} else {
			var imc = IndiceMassaCorporal(peso, altura);
			SetResultado(imc.ExibeResposta(), true);
		}
	}
	form.addEventListener('submit', SubmitFormIMC);
}
main();
