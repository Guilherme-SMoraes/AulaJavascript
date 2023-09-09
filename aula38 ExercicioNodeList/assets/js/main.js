const paragrafos = document.querySelector('.paragrafos').querySelectorAll('p');
const styleBody = getComputedStyle(document.querySelector('body'));
const bodyBackgroundColor = styleBody.backgroundColor;

for (let p of paragrafos) {
	p.style.backgroundColor = bodyBackgroundColor;
	p.style.color = '#fff';
}
