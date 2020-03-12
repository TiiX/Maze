/*Maze Templates*/
var maze5 = [[0,0,0,3,0],
            [1,1,0,1,0],
            [0,1,1,1,0],
            [1,1,0,1,1],
            [1,0,0,0,0]]

var canvas = document.getElementById("Board");

function refreshScreen(){
    var context = canvas.context("2d");
    var width = canvas.width;
    var height = canvas.height;

    for (let y = 0; y < mase5.length; y++) {
        for (let x = 0; x < mase5[y].length; x++) {
            context.fillStyle = red;
            context.fillRect(x, y, width/mase5[y].length, height/mase5.length);
        }
        
    }

}

refreshScreen();