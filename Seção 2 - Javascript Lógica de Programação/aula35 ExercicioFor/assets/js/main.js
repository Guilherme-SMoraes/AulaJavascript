const elementos = [
	{ tag: 'p', texto: 'Frase 1' },
	{ tag: 'div', texto: 'Frase 2' },
	{ tag: 'footer', texto: 'Frase 3' },
	{ tag: 'section', texto: 'Frase 4' },
];
const container = document.querySelector('.container');
const divWrapAll = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
	const { tag, texto } = elementos[i];
	const elemento = document.createElement(tag);
	elemento.innerText = texto;
	divWrapAll.appendChild(elemento);
}
container.appendChild(divWrapAll);
