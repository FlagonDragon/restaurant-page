import strawberryShortcakeImg from './strawberry_shortcake.jpg';
import blueberryTartImg from './blueberry_tart.png';
import cranberryPieImg from './cranberry_pie.jpg';

const menuDiv = document.createElement('div');
menuDiv.classList.add("menuDiv");

const h1Menu = document.createElement('h1');
h1Menu.classList.add('h1Menu');
h1Menu.textContent = 'Menu'

// Strawberry Shortcake

const h4Menu = document.createElement('h4');
h4Menu.classList.add('h4Menu');
h4Menu.textContent = 'Strawberry Shortcake'

const strawberryShortcake = document.createElement('img');
strawberryShortcake.src = strawberryShortcakeImg;
strawberryShortcake.classList.add('strawberryShortcake');

const pMenu = document.createElement('p');
pMenu.classList.add('pMenu');
pMenu.textContent = 'Cream, strawberries and spongy vanilla cake all come together in one delicious slice.'

// Blueberry Tart

const h4Menu2 = document.createElement('h4');
h4Menu2.classList.add('h4Menu2');
h4Menu2.textContent = 'Blueberry Tart'

const blueberryTart = document.createElement('img');
blueberryTart.src = blueberryTartImg;
blueberryTart.classList.add('blueberryTart');

const pMenu2 = document.createElement('p');
pMenu2.classList.add('pMenu2');
pMenu2.textContent = 'The freshest blueberries and the richest custard complement each other in this succulent tart.'

// Cranberry Pie

const h4Menu3 = document.createElement('h4');
h4Menu3.classList.add('h4Menu3');
h4Menu3.textContent = 'Cranberry Pie'

const cranberryPie = document.createElement('img');
cranberryPie.src = cranberryPieImg;
cranberryPie.classList.add('cranberryPie');

const pMenu3 = document.createElement('p');
pMenu3.classList.add('pMenu3');
pMenu3.textContent = 'Indulge your senses with luxurious cranberry filling in a golden-brown crust.'


const loadMenu = function () {

    content.appendChild(menuDiv);

    menuDiv.appendChild(h1Menu);

    menuDiv.appendChild(h4Menu);
    menuDiv.appendChild(strawberryShortcake);
    menuDiv.appendChild(pMenu);

    menuDiv.appendChild(h4Menu2);
    menuDiv.appendChild(blueberryTart);
    menuDiv.appendChild(pMenu2);

    menuDiv.appendChild(h4Menu3);
    menuDiv.appendChild(cranberryPie);
    menuDiv.appendChild(pMenu3);

};

export default loadMenu;