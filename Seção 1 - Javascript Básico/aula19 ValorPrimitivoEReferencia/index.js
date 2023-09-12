/**
 * Primitivos(imutáveis):
 * string
 * number
 * boolean
 * undefined
 * null
 * bigint
 * symbol
 */
let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra Coisa';
console.log(a, b);

let nome = 'Luiz';
nome[0] = 'R'; // Não faz nada
console.log(nome[0], nome);

/**
 * Referência(mutável)
 * array
 * object
 * function
 */

let c = [1, 2, 3];
let d = c; // Aponta para mesma referencia na memória
let e = [...c]; // Copia o valor de c para e
console.log(c, d, e);

c.push(4);
console.log(c, d, e);

const pessoa1 = {
	nome: 'Luiz',
	sobrenome: 'Otávio',
};
const pessoa2 = pessoa1;
const pessoa3 = { ...pessoa1 };
pessoa1.nome = 'João';
console.log(pessoa1, pessoa2, pessoa3);
