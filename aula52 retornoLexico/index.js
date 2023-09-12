const nome = 'Luiz';

/*
 * Quando você chama uma variavel A, ela primeiro procura em seu próprio escopo se tem uma variavel A declarada
 * caso não encontre ela procura em um escopo maior, até achar ou não encontrar no escopo global.
 */
function falaNome() {
	// Essa função consegue acessar a variavel pois essa variável está em um escopo maior que ela
	console.log(nome);
}
function usaFalaNome() {
	falaNome();
}
