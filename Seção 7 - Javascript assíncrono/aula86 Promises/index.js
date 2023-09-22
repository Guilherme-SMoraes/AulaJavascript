function rand(min = 1000, max = 3000) {
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

esperaAi('Frase 1', rand())
	.then((response) => {
		console.log(response);
		return esperaAi('Frase 2', rand());
	})
	.then((response) => {
		console.log(response);
		return esperaAi('Frase 3', rand());
	})
	.then((response) => {
		console.log(response);
	});
