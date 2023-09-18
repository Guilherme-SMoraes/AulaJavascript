function Calculadora() {
	this.display = document.querySelector('.display');

	this.inicia = () => {
		this.cliqueBotoes();
		this.pressionaEnter();
	};
	this.cliqueBotoes = () => {
		document.addEventListener('click', (e) => {
			const el = e.target;
			if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
			if (el.classList.contains('btn-clear')) this.clearDisplay();
			if (el.classList.contains('btn-del')) this.apagaUm();
			if (el.classList.contains('btn-eq')) this.resolveConta();
		});
	};
	this.pressionaEnter = () => {
		document.addEventListener('keyup', (e) => {
			if (e.key === 'Enter') this.resolveConta();
		});
	};
	this.btnParaDisplay = (valor) => {
		this.display.value += valor;
		this.display.focus();
	};
	this.clearDisplay = () => (this.display.value = '');
	this.apagaUm = () => (this.display.value = this.display.value.slice(0, -1));
	this.resolveConta = () => {
		let conta = this.display.value;
		try {
			conta = eval(conta);
			if (!conta) {
				alert('Erro ao realizar a conta');
				return;
			}
			this.display.value = conta;
		} catch (err) {
			alert('Erro ao realizar a conta');
			return;
		}
	};
}
const calculadora = new Calculadora();
calculadora.inicia();
