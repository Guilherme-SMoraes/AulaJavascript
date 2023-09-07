const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia);
console.log(data.toString());
//============================================
const data2 = new Date(2023, 9, 17, 20); // Ano, Mês, Dia, Hora, Minuto, Segundo, Milisegundo
console.log(data2.toString());
//============================================
const data3 = new Date('2023-10-17 20:00:00');
console.log('Dia', data3.getDate());
console.log('Mês', data3.getMonth()); // Mês começa do zero
console.log('Ano', data3.getFullYear());
console.log('Hora', data3.getHours());
console.log('Minuto', data3.getMinutes());
console.log('Segundo', data3.getSeconds());
console.log('Milisegundos', data3.getMilliseconds());
console.log('Dia da Semana', data3.getDate()); // 0 - Domingo, 6 - Sábado
console.log(data3.toString());
console.log(Date.now());
//============================================
function zeroAEsquerda(num) {
	return num >= 10 ? num : `0${num}`;
}
function formataData(data) {
	const dia = zeroAEsquerda(data.getDate());
	const mes = zeroAEsquerda(data.getMonth() + 1);
	const ano = zeroAEsquerda(data.getFullYear());
	const hora = zeroAEsquerda(data.getHours());
	const min = zeroAEsquerda(data.getMinutes());
	const seg = zeroAEsquerda(data.getSeconds());

	return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data4 = new Date();
const dataBrasil = formataData(data4);
console.log(dataBrasil);
