/**
 * Dados Primitivos:
 * string
 * number
 * undefined
 * null
 * boolean
 * symbol
 */
const nome = 'Guilherme'; // string
const nome2 = 'Guilherme'; // string
const nome3 = `Guilherme`; // string

const num1 = 10; // number
const num2 = 10.52; // number

let nomeAluno; // undefined -> não aponta para local nenhum na memória
let sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória, usado para quando o programador explicitamente quer marcar a variavel como vazia

const aprovado = false; // Boolean = true, false (valor lógico)

console.log(typeof sobrenomeAluno, sobrenomeAluno);
