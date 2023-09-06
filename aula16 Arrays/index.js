const alunos = ['Luis', 'Maria', 'João'];
console.log(alunos);

// Altera no indice especificado
alunos[0] = 'Luiz';
console.log(alunos);

// Adiciona em campos vazios
alunos[3] = 'Paulo';
console.log(alunos);

// Adiciona no fim
alunos.push('Josué');
console.log(alunos);

// Adiciona no começo
alunos.unshift('Luiza');
alunos.unshift('Leonardo');
console.log(alunos);

// Remove do fim
const removido = alunos.pop();
console.log(`Aluno removido do fim: ${removido}`);
console.log(alunos);

// Remove o começo
const removidoDoComeco = alunos.shift();
console.log(`Aluno removido do começo: ${removidoDoComeco}`);
console.log(alunos);

// Remove elemento no indice especificado
delete alunos[2];
console.log(alunos);

// Slice
console.log(alunos.slice(0, -2));

// Verifica se é array
console.log(typeof alunos);
console.log(alunos instanceof Array);
