class ValidaFormulario {
	constructor() {
		this.formulario = document.querySelector('#cadastro');

		this.eventos();
	}
	eventos() {
		this.formulario.addEventListener('submit', (e) => this.handleSubmit(e));
	}
	handleSubmit(e) {
		e.preventDefault();
		const formValid = this.isFormValid() && this.isPasswordValid();
		if (formValid) {
			alert('Formulário enviado');
			this.formulario.submit();
		}
	}
	isFormValid() {
		let valid = true;

		for (let errorEl of this.formulario.querySelectorAll('.error-text')) errorEl.remove();

		for (let el of this.formulario.querySelectorAll('.valida')) {
			if (!el.value) {
				let label = el.previousElementSibling.innerText.replace(':', '');
				this.createErrorMessage(el, `O campo ${label} não pode estar vazio`);
				valid = false;
			}
			if (el.id === 'cpf' && !this.validaCPF(el)) {
				valid = false;
			}
			if (el.id === 'usuario' && !this.validaUsuario(el)) {
				valid = false;
			}
		}
		return valid;
	}
	isPasswordValid() {
		let valid = true;

		const senha = this.formulario.querySelector('#senha');
		const repetirSenha = this.formulario.querySelector('#confirmaSenha');

		if (senha.value !== repetirSenha.value) {
			valid = false;
			const errorMessage = 'As senhas devem ser iguais';
			this.createErrorMessage(senha, errorMessage);
			this.createErrorMessage(repetirSenha, errorMessage);
		}
		if (senha.value.length < 6 || senha.value.length > 12) {
			valid = false;
			this.createErrorMessage(senha, 'A senha deve ter de 6 a 12 caracteres');
		}
		return valid;
	}
	validaUsuario(el) {
		let valid = true;
		if (el.value.length < 3 || el.value.length > 12) {
			this.createErrorMessage(el, 'Usuário precisa ter entre 3 e 12 caracteres');
			valid = false;
		}
		if (el.value && !el.value.match(/[a-zA-Z0-9]+/g)) {
			this.createErrorMessage(el, 'Nome do usuário só pode conter letras e/ou números');
			valid = false;
		}
		return valid;
	}
	validaCPF(el) {
		const cpf = new ValidadorCPF(el.value);
		if (!cpf.cpfValido()) {
			this.createErrorMessage(el, 'O CPF não é válido');
			return false;
		}
		return true;
	}

	createErrorMessage(el, msg) {
		const div = document.createElement('div');
		div.innerText = msg;
		div.classList.add('error-text');
		el.insertAdjacentElement('afterend', div);
	}
}
const valida = new ValidaFormulario();
