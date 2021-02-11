
// I DON'T KNOW HOW TO MAKE SQUARES BUT I DO 
// KNOW HOW TO MAKE 200 PARAGRAPHS

// I DON'T KNOW HOW TO SET THE NUMBER OF SQUARES
// TO THE RESULT OF THE SUBMIT BUTTON OF THE GRID

// MAKE A <DIV> ELEMENT ? AND SET THE EVENT LISTENER
// TO THAT <DIV> ELEMENT SO THAT EVERY LITTLE SQUARE 
// 'INHERITS' THE EVENT LISTENER AS WE DID IN THE LAST
// LESSON

// TO ACCESS THE SUBMIT BUTTON, document.querySelector('input'whatever) or getElementById() and 
// set that to a variable. This way you can manipulate or reuse its value 

// TO ACCESS THE COLOR CHOICE, document.querySelector('color input'whatever) or getElementById()
// and set that to a variable. This way you can manipulate it or reuse it later. 

// REPEAT ABOVE CONCEPT WITH HEIGHT 

// REPEAT ABOVE CONCEPT WITH WIDTH


// Let's access each element by setting them to variables

var colorPicker = document.getElementById('colorPicker');
var canvas = document.getElementById('pixelCanvas');
var inputHeight = document.getElementById('inputHeight').value;
var inputWidth = document.getElementById('inputWidth').value;
var sizePicker = document.getElementById('sizePicker');
var submitButton = document.querySelectorAll('input')// when using this, use submitButton[2] to access the actual button


// Call makeGrid() function to initially make a grid
makeGrid(inputHeight,inputWidth);


// Set this listener to 'click' to dinamically control the square
// and make sure that the button submit, clears the canvas. 
sizePicker.addEventListener('click', function(event) {
    event.preventDefault();
    var inputHeight = document.getElementById('inputHeight').value;
    var inputWidth = document.getElementById('inputWidth').value;
    canvas.firstElementChild.remove()
    makeGrid(inputHeight,inputWidth);
});

// The makeGrid function uses two nested for loops to build
// each cell with insertRow and insertCell. 
// the event listener will color each square
function makeGrid(inputHeight,inputWidth) {
    for (var x = 0; x < inputHeight; x++) {
        var row = canvas.insertRow(x);
        for (var y = 0; y < inputWidth; y++) {
            var cell = row.insertCell(y);
            cell.addEventListener('click', function(event) {
                var color = document.getElementById('colorPicker').value;
                event.target.style.backgroundColor = color;
                console.log('a square was clicked') // I added this to prit debug
            });
        }   
    }
};


