let hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// select/grab needed elements using the JS DOM selectors
let button = document.querySelector('button');
let color = document.querySelector('.color');
let container = document.querySelector('.fluid-container');

/*attach an event handler to the button that listens for a click event 
 when detected it should trigger a callback function that randomly generates background colors*/
button.addEventListener('click', () => {
    // let random = randomColorGenerator()
    let hex = "#";
    for(var i=0; i<6; i++){
    hex += hexColors[randomColorGenerator()];
    console.log(hex);
}
    container.style.backgroundColor = hex;
    color.innerText = hex;
})

function randomColorGenerator(){
    return Math.floor(Math.random() * hexColors.length)
}