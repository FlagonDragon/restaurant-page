const homeBtn = document.querySelector('#homeBtn');
const menuBtn = document.querySelector('#menuBtn');
const aboutBtn = document.querySelector('#aboutBtn');

// const changeColor = function () {
//     homeBtn.style.cssText = "background: grey"
// }

// export default changeColor

        // <h1>Jolly Berry Bakery</h1>

        // <p>Juicy berries of different kinds. Decadent pies. The best desserts that money can buy.</p> 

      
        
import pastries from './pastries.png'

const content = document.querySelector('#content')

const h1Home = document.createElement('h1');
h1Home.classList.add("h1Home");
h1Home.textContent = 'Jolly Berry Bakery'

const pastriesImg = document.createElement('img');
pastriesImg.src = pastries;
pastriesImg.classList.add("pastriesImg");

const pHome = document.createElement('p');
pHome.classList.add("pHome");
pHome.textContent = 'Flavory tarts. Decadent pies. Juicy berries of different kinds. The best desserts that money can buy!'


const pHome2 = document.createElement('p');
pHome2.classList.add("pHome2");
pHome2.textContent = 'Hours: \r\n' 
pHome2.textContent += 'Mon-Sat: 7:00 - 15:00 \r\n'
pHome2.textContent +=  'Sun: Closed'


const loadHome = function() {

content.appendChild(h1Home);
content.appendChild(pastriesImg);
content.appendChild(pHome);
content.appendChild(pHome2);

};

export default loadHome;