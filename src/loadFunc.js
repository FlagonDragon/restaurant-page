const homeBtn = document.querySelector('#homeBtn');
const menuBtn = document.querySelector('#menuBtn');
const aboutBtn = document.querySelector('#aboutBtn');

// const changeColor = function () {
//     homeBtn.style.cssText = "background: grey"
// }

// export default changeColor

        // <h1>Jolly Berry Bakery</h1>

        // <p>Juicy berries of different kinds. Decadent pies. The best desserts that money can buy.</p> 

        // <p> Hours: <br>
        //     Mon-Sat: 7:00 - 15:00 <br>
        //     Sun: Closed
        // </p> 

const loadHome = function() {
    const pastriesImg = document.createElement('img');

    pastriesImg.src = pastries;
    pastriesImg.classList.add("pastriesImg");



    document.body.appendChild(pastriesImg);
}