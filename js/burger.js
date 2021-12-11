const headerBurger = document.querySelector('.header__burger');
//const headerMenu = document.querySelector('.header__menu');
const boDy = document.querySelector('body');

headerBurger.addEventListener('click', () => {
	headerBurger.classList.toggle('activ');
	//headerMenu.classList.toggle('active');
	boDy.classList.toggle('lock');
});


