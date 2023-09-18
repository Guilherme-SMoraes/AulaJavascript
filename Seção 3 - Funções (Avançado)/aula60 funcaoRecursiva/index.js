function recursiva(num, max) {
	console.log(num);
	if (num >= max) return;
	num++;
	recursiva(num, max);
}
recursiva(1, 10352);
