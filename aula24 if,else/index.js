const hora = 10;

if (hora >= 0 && hora < 12) {
	console.log('Bom dia');
} else if (hora < 18) {
	console.log('Boa tarde');
} else if (hora < 24) {
	console.log('Boa noite');
} else {
	console.log('Olá');
}
