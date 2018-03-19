//Development Strategy:
/*
1. Define your variables by selecting the DOM elements that the user will interact with. This is where your jQuery skills can come into play! For instance, the submit button, the table, and the color picker need to be accessed. The value of the color selected needs to be stored as well, since the clicked cell in the table needs to be set to the selected color.
2. Add event listeners to the relevant DOM elements, so that user input can be color values and table sizes can be dynamically set by the user.
3. Set the size of the cross stitch canvas as an N by M grid with the makeGrid() function. Use your knowledge of JavaScript loops to dynamically clear and create the table based on user input. Each cell should have an event listener that sets the background color of the cell to the selected color.*/

// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, weight) {
    //store user input color as variable
//    var color = document.getElementById('colorPicker').value;
    
    //change border color to user input
    //$("table").css("border", "1px solid" + color);
    
    //store user input height as variable
//    var height = document.getElementById('inputHeight').value;
    //store user input weight as variable
//    var weight = document.getElementById('inputWeight').value;
    var canvas = document.getElementById('pixelCanvas');
    for (var h = 1; h <= height; h++) {
        var row = canvas.insertRow(h-1);
        for (var w = 1; w <= weight; w++) {
            var cell1 = row.insertCell(w-1);
        }
    }
}
/*sizePicker.addEventListener('submit', makeGrid);
colorPicker.addEventListener('input', makeGrid);*/