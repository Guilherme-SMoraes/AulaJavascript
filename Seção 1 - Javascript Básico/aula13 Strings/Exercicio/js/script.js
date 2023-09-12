const nome = prompt('Digite seu nome completo:');

document.body.innerHTML += `O seu nome é ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras<br />`;
document.body.innerHTML += `A segunda letra do seu nome é ${nome.charAt(1)} <br />`;
document.body.innerHTML += `O primeiro índice da letra o no seu nome é ${nome.indexOf('o')}<br />`;
document.body.innerHTML += `O ultimo índice da letra o no seu nome é ${nome.lastIndexOf('o')}<br />`;
document.body.innerHTML += `As últimas 3 letras o seu nome são ${nome.slice(-3)}<br />`;
document.body.innerHTML += `As palavras do seu nome são ${nome.split(' ').join('|')}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas ${nome.toUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas ${nome.toLowerCase()}<br />`;
