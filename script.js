const navbar = document.getElementById('navbar');
const burger = document.getElementById('burger');
const burgerClose = document.getElementById('burger-close');


function showMenu() {
    navbar.classList.add('navbar-active');
    burger.classList.add('burger-hide');
    burgerClose.classList.add('close-show');
}

function hideMenu() {
    navbar.classList.remove('navbar-active');
    burger.classList.remove('burger-hide');
    burgerClose.classList.remove('close-show');
}

function roll(what){
	thing = document.getElementById(what)
	if (thing.classList.contains('collapsed')) {
		thing.classList.remove('collapsed')
	}
	else
	{
		thing.classList.add('collapsed')
	}
}