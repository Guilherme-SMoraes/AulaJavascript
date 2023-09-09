const isLandscape = (width, height) => width > height;
const [largura, altura] = [1920, 1080];
console.log('A imagem é paisagem?', isLandscape(largura, altura));
