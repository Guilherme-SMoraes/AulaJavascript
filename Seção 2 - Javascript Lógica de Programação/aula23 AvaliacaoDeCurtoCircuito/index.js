/**
 * Short-Circuit
 * A avaliação da expressão && para no primeiro valor false, retornando o valor próprio do false, porém caso tudo seja
 * verdadeiro o sistema retorna o ultimo valor da expressão
 * A avaliação da expressão && para no primeiro valor true, retornando o valor próprio do true, porém caso tudo seja
 * falso o sistema retorna o ultimo valor da expressão
 * =================================
 * Tudo no JavaScript pode ser avaliado em true ou false, sendo os falses:
 * false
 * 0
 * '' "" ``
 * null / undefined
 * NaN
 */
console.log('Luiz' && 'Maria');
console.log(NaN && 'Maria');

function falaOi() {
	return 'Oi';
}
const vaiExecutar = false;
console.log(vaiExecutar && falaOi());
