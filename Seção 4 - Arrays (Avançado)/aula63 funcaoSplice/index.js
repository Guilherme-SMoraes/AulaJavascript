const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
// .splice(Indice que vai alterar, quantos itens para deletar, elementos para adicionar)
// pop
let removidos = nomes.splice(-1, 1);
console.log(nomes, removidos);
// shift
removidos = nomes.splice(0, 1);
console.log(nomes, removidos);
// push
nomes.splice(nomes.length, 0, 'Luiz');
console.log(nomes);
// unshift
nomes.splice(0, 0, 'Maria');
console.log(nomes);
