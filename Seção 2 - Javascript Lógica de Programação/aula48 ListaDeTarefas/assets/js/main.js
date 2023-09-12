const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const listaTarefa = document.querySelector('.tarefas');

function criaLi() {
	const li = document.createElement('li');
	return li;
}

function criaTarefa(textoInput) {
	const li = criaLi();
	li.innerHTML = textoInput;
	listaTarefa.appendChild(li);
	criaBotaoApagar(li);
	salvaTarefas();
}

function salvaTarefas() {
	const liTarefas = listaTarefa.querySelectorAll('li');
	const listaDeTarefas = [];
	for (let tarefa of liTarefas) {
		const tarefaTexto = tarefa.innerText.replace('Apagar', '');
		listaDeTarefas.push(tarefaTexto.trim());
	}
	const tarefasJSON = JSON.stringify(listaDeTarefas);
	localStorage.setItem('tarefas', tarefasJSON);
}

function limpaInput() {
	inputTarefa.value = '';
	inputTarefa.focus();
}

function criaBotaoApagar(li) {
	li.innerHTML += ' ';
	const botaoApagar = document.createElement('button');
	botaoApagar.innerHTML = 'Apagar';
	botaoApagar.setAttribute('class', 'apagar');
	botaoApagar.setAttribute('title', 'Apagar essa Tarefa');
	li.appendChild(botaoApagar);
}

function adicionaTarefasSalvas() {
	const tarefas = localStorage.getItem('tarefas');
	const tarefasArray = JSON.parse(tarefas);

	for (let tarefa of tarefasArray) {
		criaTarefa(tarefa);
	}
}

function btnTarefaClick() {
	if (!inputTarefa.value) return;
	criaTarefa(inputTarefa.value);
	limpaInput();
}

function btnApagarClick(el) {
	el.parentElement.remove();
	salvaTarefas();
}

document.addEventListener('click', function (e) {
	const el = e.target;

	if (el.classList.contains('btn-add-tarefa')) btnTarefaClick();
	if (el.classList.contains('apagar')) btnApagarClick(el);
});

inputTarefa.addEventListener('keypress', function (e) {
	if (e.keyCode === 13) btnTarefaClick();
});
adicionaTarefasSalvas();
