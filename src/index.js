import './styles.css';
import pastries from './pastries.png'

console.log('yeah we dooby workin tbh');
console.log('yooo was goin on');

const pastriesImg = document.createElement('img');

pastriesImg.src = pastries;
pastriesImg.classList.add("pastriesImg");


document.body.appendChild(pastriesImg);