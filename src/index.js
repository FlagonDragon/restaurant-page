// imports

import './styles.css';

import loadHome from './loadHome';
import loadMenu from './loadMenu';
import loadAbout from './loadAbout';

loadHome();

// change tab

const content = document.querySelector('#content')

const homeBtn = document.querySelector('#homeBtn');
const menuBtn = document.querySelector('#menuBtn');
const aboutBtn = document.querySelector('#aboutBtn');

homeBtn.addEventListener('click', () => {

    content.firstElementChild.remove();

    loadHome();

});

menuBtn.addEventListener('click', () => {

    content.firstElementChild.remove();

    loadMenu();

});

aboutBtn.addEventListener('click', () => {

    content.firstElementChild.remove();

    loadAbout();

});

   

