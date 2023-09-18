const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1 + a2;
console.log(a3, '->', typeof a3);
const concatArray = a1.concat(a2);
console.log(concatArray, '->', typeof concatArray);
const concatArrayComSpreadOperator = [...a1, ...a2];
console.log(concatArrayComSpreadOperator, '->', typeof concatArrayComSpreadOperator);
