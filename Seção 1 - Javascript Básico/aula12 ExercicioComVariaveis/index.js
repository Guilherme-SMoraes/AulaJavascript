let varA = 'A';
let varB = 'B';
let varC = 'C';
let temp;

temp = varA;
varA = varB;
varB = varC;
varC = temp;

// ou

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
