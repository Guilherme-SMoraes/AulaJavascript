const verdadeira = true;

// Let tem escopo de bloco { ... Bloco ...}
// Var só tem escopo de função
console.log('Chamando o Var antes de declarar ela:', nomeVar);

let nomeLet = 'Luiz'; // Criando
var nomeVar = 'Luiz'; // Criando

console.log('Primeira chamada de nomeLet e nomeVar', nomeLet, nomeVar);
if (verdadeira) {
	let nomeLet = 'Otávio'; // Criando
	var nomeVar = 'Otávio'; // Redeclarando
	console.log('Segunda chamada de nomeLet e nomeVar', nomeLet, nomeVar);

	if (verdadeira) {
		let nomeLet = 'Ronaldo'; // Criando
		var nomeVar = 'Ronaldo'; // Redeclarando
		console.log('Terceira chamada de nomeLet e nomeVar', nomeLet, nomeVar);
		/**
		 * Ao usar uma variável Let, o sistema procura no seu escopo a variavel, caso não ache ele procura
		 * em escopos maiores até achar ou soltar uma exceção, toda vez que declaro um novo let em outro escopo
		 * ele é outra váriavel, que só compartilha o mesmo nome.
		 * ================================================================================================================
		 * Ao usar uma variável Var, o sistema vai procurar a variavel com o mesmo nome, já que o Var não funciona
		 * a partir de escopos, e sim dentro da função inteira, quando declaro um novo Var, ele redeclara a variavel antiga
		 * substituindo o valor que já estava lá
		 */
	}
}
console.log("Chamada de nomeLet e nomeVar após saida dos if's", nomeLet, nomeVar);

function FalaOi() {
	var sobrenome = 'Miranda';
	if (verdadeira) {
		/**
		 * Como o Var funciona em escopo de função, mesmo que você crie ele dentro de deste if, a função inteira vai
		 * conseguir enxergar a Var, enquanto uma variavel Let só permitiria o acesso a ela no mesmo escopo ou em um
		 * escopo filho
		 */
		var nome = 'Luiz';
		let nome2 = 'Osvaldo';
	}
	console.log('Chamada de FalaOi', nome, sobrenome);
}
FalaOi();
