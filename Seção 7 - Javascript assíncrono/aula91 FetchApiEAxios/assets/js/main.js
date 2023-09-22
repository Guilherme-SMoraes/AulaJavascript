// fetch('assets/json/pessoas.json')
// 	.then((response) => response.json())
// 	.then((data) => loadElementsOnPage(data));
axios('assets/json/pessoas.json').then((response) => loadElementsOnPage(response.data));

function loadElementsOnPage(json) {
	const divResultado = document.querySelector('.resultado');
	const table = document.createElement('table');
	for (let pessoa of json) {
		const tr = document.createElement('tr');
		tr.appendChild(createTD(pessoa.nome));
		tr.appendChild(createTD(pessoa.idade));
		tr.appendChild(createTD(pessoa.salario));

		table.appendChild(tr);
	}
	divResultado.appendChild(table);
}
function createTD(text) {
	const td = document.createElement('td');
	td.innerText = text;
	return td;
}
