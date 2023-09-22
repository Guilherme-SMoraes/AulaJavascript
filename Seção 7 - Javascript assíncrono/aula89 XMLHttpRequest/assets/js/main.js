const request = (config) => {
	return new Promise((resolve, reject) => {
		try {
			const xhr = new XMLHttpRequest();
			xhr.open(config.method, config.url, true);
			xhr.send();

			xhr.addEventListener('load', () => {
				if (xhr.status >= 200 && xhr.status < 300) {
					resolve(xhr.responseText);
				} else {
					reject(xhr.statusText);
				}
			});
		} catch (err) {
			reject(err);
		}
	});
};

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
	const href = el.getAttribute('href');
	const result = await request({ method: 'GET', url: href });
	CarregaResultado(result);
}
function CarregaResultado(response) {
	console.dir(response);
	const divResultado = document.querySelector('.resultado');
	divResultado.innerHTML = response;
}
