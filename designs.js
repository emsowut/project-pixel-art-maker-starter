//The JavaScript code for Emily Somach's Pixel Art Maker

//set default pixel color to black
var color = "black";

/**
* @description Draws a grid based on user-input values
* @param {number} height
* @param {number} weight
*/
function makeGrid(height, weight) {
    
    //clear the contents of the table
    $('#pixelCanvas tr').remove();
    
    //create variable for the table
    var canvas = document.getElementById('pixelCanvas');
    
    //nested for loop to create the rows and cells dynamically
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

/**
* @description If submit pressed, call makeGrid function with user-input params
*/
document.getElementById('gridPress').addEventListener("click", function() {
    makeGrid(document.getElementById('inputHeight').value, document.getElementById('inputWeight').value);
})

/**
* @description If new color is picked, set to that color
*/
document.getElementById('colorPicker').addEventListener("change", function() {
    color = document.getElementById('colorPicker').value;
})