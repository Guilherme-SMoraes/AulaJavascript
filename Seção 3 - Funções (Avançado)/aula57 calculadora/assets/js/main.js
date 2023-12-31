/**
 * Função factory que cria um objeto calculadora;
 * @returns {Calculadora}
 */
function criaCalculadora() {
	/**
	 * @typedef {object} Calculadora
	 * @property {Element} display
	 * @property {function} inicia
	 * @property {function} cliqueBotoes
	 * @property {function} apagaUm
	 * @property {function} clearDisplay
	 * @property {function} btnParaDisplay
	 * @property {function} realizaConta
	 * @property {function} pressionaEnter
	 */
	return {
		display: document.querySelector('.display'),

		inicia() {
			this.cliqueBotoes();
			this.pressionaEnter();
		},
		pressionaEnter() {
			this.display.addEventListener('keyup', (e) => {
				if (e.keyCode === 13) this.realizaConta();
			});
		},
		clearDisplay() {
			this.display.value = '';
		},
		apagaUm() {
			this.display.value = this.display.value.slice(0, -1);
		},
		realizaConta() {
			let conta = this.display.value;
			try {
				conta = eval(conta);
				if (!conta) {
					alert('Conta Inválida');
					return;
				}
				this.display.value = String(conta);
			} catch (err) {
				alert('Conta Inválida');
			}
		},
		cliqueBotoes() {
			document.addEventListener('click', (e) => {
				const el = e.target;
				if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
				if (el.classList.contains('btn-clear')) this.clearDisplay();
				if (el.classList.contains('btn-del')) this.apagaUm();
				if (el.classList.contains('btn-eq')) this.realizaConta();
			});
		},
		btnParaDisplay(valor) {
			this.display.value += valor;
		},
	};
}
const calculadora = criaCalculadora();
calculadora.inicia();
