//Development Strategy:
/*
1. Define your variables by selecting the DOM elements that the user will interact with. This is where your jQuery skills can come into play! For instance, the submit button, the table, and the color picker need to be accessed. The value of the color selected needs to be stored as well, since the clicked cell in the table needs to be set to the selected color.
2. Add event listeners to the relevant DOM elements, so that user input can be color values and table sizes can be dynamically set by the user.
3. Set the size of the cross stitch canvas as an N by M grid with the makeGrid() function. Use your knowledge of JavaScript loops to dynamically clear and create the table based on user input. Each cell should have an event listener that sets the background color of the cell to the selected color.*/
var color = "black";

function makeGrid(height, weight) {
    
    //set 'canvas' variable as table
    var canvas = document.getElementById('pixelCanvas');
    
    //clear the contents of the table
    $('#pixelCanvas tr').remove();
    
    for (var h = 1; h <= height; h++) {
        var row = canvas.insertRow(h-1);
        for (var w = 1; w <= weight; w++) {
            var cell = row.insertCell(w-1);
            cell.addEventListener('click', function() {
               //cell.css('background-color', color);
                this.style.backgroundColor = color;
            });
        }
    }
}
//if submit button pressed, get height and weight and draw grid
document.getElementById('gridPress').addEventListener("click", function() {
    makeGrid(document.getElementById('inputHeight').value, document.getElementById('inputWeight').value);
})
//if color picked, set variable 'color' to that color
document.getElementById('colorPicker').addEventListener("change", function() {
    //store user input color as variable
    color = document.getElementById('colorPicker').value;
})