function rand(min = 1, max = 3) {
	min *= 1000;
	max *= 1000;
	const num = Math.random() * (max - min) + min;
	return Math.floor(num);
}
function esperaAi(msg, tempo = rand()) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(msg);
		}, tempo);
	});
}
async function executa() {
	const fase1 = await esperaAi('Fase 1');
	console.log(fase1);
	const fase2 = await esperaAi('Fase 2');
	console.log(fase2);
	const fase3 = await esperaAi('Fase 3');
	console.log(fase3);

	console.log('Terminamos na frase', fase3);
}
