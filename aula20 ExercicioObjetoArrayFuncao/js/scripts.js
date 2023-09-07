function Main() {
	const pessoas = [];
	const form = document.querySelector('#formPessoa');
	const resultado = document.querySelector('#resultado');

	function RecebeEventoForm(e) {
		e.preventDefault();
		let novaPessoa = {
			nome: form.querySelector('#nome').value,
			sobrenome: form.querySelector('#sobrenome').value,
			peso: form.querySelector('#peso').value,
			altura: form.querySelector('#altura').value,
		};
		pessoas.push(novaPessoa);
		console.log(pessoas);
		resultado.innerHTML += `<p>${novaPessoa.nome} ${novaPessoa.sobrenome} ${novaPessoa.peso} ${novaPessoa.altura}</p>`;
	}

	form.addEventListener('submit', RecebeEventoForm);
}
Main();
