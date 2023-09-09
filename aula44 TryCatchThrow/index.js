function soma(num1, num2) {
	if (typeof num1 !== 'number' || typeof num2 !== 'number') {
		throw new TypeError('num1 e num2 precisam ser números');
	}
	return num1 + num2;
}
try {
	console.log(soma(1, 2));
	console.log(soma('1', 2));
} catch (err) {
	// console.log(err);
	console.log('Ocorreu um erro na hora de somar');
}
