/**
 * Operação ternaria
 * (Condição) ? retorno para verdadeiro : retorno para falso;
 */
const pontuacaoUsuario = 51;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuario Normal';

// Valor fallback, garante que uma variável sempre tenha algum valor válido, caso o 1º valor seja inválido
// ele passa o segundo valor para váriavel
const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);
