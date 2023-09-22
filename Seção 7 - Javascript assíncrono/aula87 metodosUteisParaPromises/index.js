function rand(min = 1, max = 3) {
	min *= 1000;
	max *= 1000;
	const num = Math.random() * (max - min) + min;
	return Math.floor(num);
}
function esperaAi(msg, tempo) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(msg);
		}, tempo);
	});
}
// Promise.resolve / Promise.reject
function carregaPagina() {
	const emCache = false;
	if (emCache) return Promise.resolve('Página carregada em Cache');
	else return esperaAi('Baixei a página', rand());
}
const promises = [esperaAi('Promise 1', rand()), esperaAi('Promise 2', rand()), esperaAi('Promise 3', rand())];
// Promise.all -> Retorna quando todos os promises foram resolvidos

// Promise.all(promises).then((valor) => {
// console.log(valor);
// });

// Promise.race -> Retorna o primeiro valor resolvido

Promise.race(promises).then((valor) => {
	console.log(valor);
});

carregaPagina()
	.then((dadosPagina) => {
		console.log(dadosPagina);
	})
	.catch((e) => console.log(e));
