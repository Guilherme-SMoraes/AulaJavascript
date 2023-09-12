function retornaHora(data) {
	if (data && !(data instanceof Date)) throw new TypeError('data precisa ser um objeto de Date');
	if (!data) data = new Date();

	return data.toLocaleTimeString('pt-BR', {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false,
	});
}
try {
	const data = new Date('1999-10-17  17:00');
	console.log(retornaHora(data));
} catch (err) {
	console.log('Ocorreu um erro');
} finally {
	console.log('Tenha um bom dia!');
}
