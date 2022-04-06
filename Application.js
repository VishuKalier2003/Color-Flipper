var red_color, green_color, blue_color;
const btn = document.getElementById('buton');
const color = document.querySelector('.color');
btn.addEventListener('click', function() {
    // get a number between 0 and 3 for the array
    red_color = getRandom();
    green_color = getRandom();
    blue_color = getRandom();
    // style method to change css property of an element selected
    document.body.style.backgroundColor = rgb(red_color, green_color, blue_color);
    // the background color will be varying with the color of the array colors
    color.textContent = "rgb" + red_color + "," + green_color + "," + blue_color;
    // the text content of the element will be displayed
});

var ran;
// Obtaining a random element from colors array
function getRandom() {
    // rounding off the number to the highest integer using floor function
    ran = Math.floor(Math.random() * 255);
    return ran;
}