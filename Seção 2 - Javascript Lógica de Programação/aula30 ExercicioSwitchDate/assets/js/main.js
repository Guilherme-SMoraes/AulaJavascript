function getDayOfWeekString(dayOfWeek) {
	const dayOfWeekArray = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
	return dayOfWeekArray[dayOfWeek];
	// switch (dayOfWeek) {
	// 	case 0:
	// 		return 'Domingo';
	// 	case 1:
	// 		return 'Segunda-feira';
	// 	case 2:
	// 		return 'Terça-feira';
	// 	case 3:
	// 		return 'Quarta-feira';
	// 	case 4:
	// 		return 'Quinta-feira';
	// 	case 5:
	// 		return 'Sexta-feira';
	// 	case 6:
	// 		return 'Sábado';
	// }
}
function getMonthString(month) {
	const monthsArray = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
	return monthsArray[month];
}
function leftZero(num) {
	return Number(num) > 9 ? num : `0${num}`;
}
function createDateString() {
	const data = new Date();
	const dayOfWeek = getDayOfWeekString(data.getDay());
	const day = data.getDate();
	const month = getMonthString(data.getMonth());
	const year = data.getFullYear();
	const hour = leftZero(data.getHours());
	const minutes = leftZero(data.getMinutes());

	return `${dayOfWeek}, ${day} de ${month} de ${year}<br/>${hour}:${minutes}`;
}
document.querySelector('h1').innerHTML = createDateString();
// ou
// document.querySelector('h1').innerHTML = new Date().toLocaleDateString('pt-BR', {
// 	weekday: 'long',
// 	year: 'numeric',
// 	month: 'long',
// 	day: 'numeric',
// 	hour: 'numeric',
// 	minute: 'numeric',
// });
