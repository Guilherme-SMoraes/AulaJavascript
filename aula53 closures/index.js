/**
 * Closure é a junção de uma função com o ambiente léxico de quando a função foi declarada.
 * Isso significa que, quando eu chamo retornaFuncao, o javascript cria a função anonima
 * sem executar o que tem dentro dela e junto a essa função ela pega o ambiente léxico
 * (as váriaveis que ela tem acesso pelo escopo de seu parente) do momento.
 * Com esses dados salvos o sistema pode agora chamar essa função quando quiser usando
 * os dados de quando ela foi criada, mesmo que as variáveis que ele use variem mais,
 * como no exemplo mais abaixo;
 */
function retornaFuncao() {
	const nome = 'Luiz';
	return function () {
		return nome;
	};
}

const funcao = retornaFuncao();
console.log(funcao);

/**
 * Aqui em baixo eu chamo essa função duas vezes, enviando 2 parametros diferentes
 * então o javascript cria a função 2 vezes salvando esses parametros no closure de cada
 * uma das chamadas, permitindo que soma5 e soma10 chamem a mesma função anônima, porém
 * com resultados diferentes.
 */
function criaSoma(x) {
	return function (y) {
		return x + y;
	};
}
const soma5 = criaSoma(5);
const soma10 = criaSoma(10);

console.log(soma5(2));
console.log(soma10(2));
