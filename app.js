let colors = ["red", "green", "blue"];

// select/grab needed elements using the JS DOM selectors
let button = document.querySelector('button');
let color = document.querySelector('.color');
let container = document.querySelector('.fluid-container');

/*attach an event handler to the button that listens for a click event 
 when detected it should trigger a callback function that randomly generates background colors*/
button.addEventListener('click', () => {
    let random = randomColorGenerator()
    container.style.backgroundColor = colors[random];
    color.innerText = colors[random]
})

// create funtion that randomly generates background colors
function randomColorGenerator(){
    return Math.floor(Math.random() * colors.length)
}