import cakeShopImg from './cake_shop.png';



const aboutDiv = document.createElement('div');
aboutDiv.classList.add("aboutDiv");

// content.appendChild(aboutDiv);

const h1About = document.createElement('h1');
h1About.classList.add('h1About');
h1About.textContent = 'About'

const h4Address = document.createElement('h4');
h4Address.classList.add('h4Address');
h4Address.textContent = 'Address'

const pAddress = document.createElement('p')
pAddress.classList.add('pAddress');
pAddress.textContent = 'Cream Puff Road 1176, Hot Fudge Hill, Pastryland';

const h4Contact = document.createElement('h4');
h4Contact.classList.add('h4Contact');
h4Contact.textContent = 'Contact'
const pContact = document.createElement('p');
pContact.classList.add('pContact');
pContact.textContent = '+100 7911283150';

const pContact2 = document.createElement('p');
pContact2.classList.add('pContact2');
pContact2.textContent = '+100 7911030690'

const pEmail = document.createElement('p');
pEmail.classList.add('pEmail');
pEmail.textContent = 'jellyberrybakery@sweetmail.com'

const cakeShop = document.createElement('img');
cakeShop.src = cakeShopImg;
cakeShop.classList.add('cakeShop');



const loadAbout = function () {

    content.appendChild(aboutDiv);

    aboutDiv.appendChild(h1About);
    aboutDiv.append(h4Address);
    aboutDiv.append(pAddress);
    aboutDiv.append(h4Contact);
    aboutDiv.append(pContact);    
    aboutDiv.append(pContact2);  
    aboutDiv.append(pEmail); 
    aboutDiv.append(cakeShop);
};

export default loadAbout;