document.addEventListener('click', (e) => {
	const el = e.target;
	if (el.tagName.toLowerCase() === 'a') {
		e.preventDefault();
		CarregaPagina(el);
	}
});

/**
 * Carrega o html de outra página e adiciona ele na página atual
 * @param {Element} el Elemento com tag 'a' que tem o link para outra página
 */
async function CarregaPagina(el) {
	try {
		const href = el.getAttribute('href');
		const response = await fetch(href);
		if (response.status !== 200) throw new Error(response.statusText);
		const html = await response.text();
		CarregaResultado(html);
	} catch (err) {
		console.error(err);
	}
}
function CarregaResultado(response) {
	const divResultado = document.querySelector('.resultado');
	divResultado.innerHTML = response;
}
