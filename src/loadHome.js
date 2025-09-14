import pastries from './pastries.png'

const content = document.querySelector('#content')

const homeDiv = document.createElement('div');
homeDiv.classList.add("homeDiv");


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

content.appendChild(homeDiv);

homeDiv.appendChild(h1Home);
homeDiv.appendChild(pastriesImg);
homeDiv.appendChild(pHome);
homeDiv.appendChild(pHome2);

};

export default loadHome;