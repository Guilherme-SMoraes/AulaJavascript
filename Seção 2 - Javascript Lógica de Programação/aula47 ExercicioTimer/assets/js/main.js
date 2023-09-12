const btnIniciar = document.querySelector('#iniciar');
const btnPausar = document.querySelector('#pausar');
const btnZerar = document.querySelector('#zerar');
const relogio = document.querySelector('#relogio');
let relogioSegundos = 0;
let relogioIntervalId;

function setRelogio() {
	const data = new Date(relogioSegundos * 1000);
	relogio.innerHTML = data.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'GMT' });
}
function iniciaRelogio() {
	relogioIntervalId = setInterval(() => {
		relogioSegundos++;
		setRelogio();
	}, 1000);
	relogio.classList.remove('pausado');
}
function pausaRelogio() {
	clearInterval(relogioIntervalId);
	relogio.classList.add('pausado');
}
function zeraRelogio() {
	clearInterval(relogioIntervalId);
	relogio.classList.remove('pausado');
	relogioSegundos = 0;
	setRelogio();
}
document.addEventListener('click', function (e) {
	const element = e.target;
	if (element.id === 'iniciar') iniciaRelogio();
	if (element.id === 'pausar') pausaRelogio();
	if (element.id === 'zerar') zeraRelogio();
});
