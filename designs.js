

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


