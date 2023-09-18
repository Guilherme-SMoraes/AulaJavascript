// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobrados = numeros.map((x) => x * 2);
console.log(numeros, numerosDobrados);

// Para cada elemento:
// Retorne apenas um string com o nome da pessoa
// Remova apenas a chave nome do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
	{ nome: 'Luiz', idade: 62 },
	{ nome: 'Maria', idade: 23 },
	{ nome: 'Eduardo', idade: 55 },
	{ nome: 'Letícia', idade: 19 },
	{ nome: 'Rosana', idade: 32 },
	{ nome: 'Wallace', idade: 47 },
];
const pessoasSomenteNome = pessoas.map((x) => x.nome);
console.log(pessoasSomenteNome);
const pessoasSemNome = pessoas.map((x) => ({ idade: x.idade }));
console.log(pessoasSemNome);
const pessoasComID = pessoas.map((x, i) => ({ ...x, id: i }));
console.log(pessoasComID);
