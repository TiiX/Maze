/*Maze Templates*/
var maze5 = [[0,0,0,3,0],
            [1,1,0,1,0],
            [0,1,1,1,0],
            [1,1,0,1,1],
            [1,0,0,0,0]]

var canvas = document.getElementById("board");

function refreshScreen(){
    var context = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    var boxSize = width / maze5.length;
    console.log("Kebab")

    for (let y = 0; y < maze5.length; y++) {
        for (let x = 0; x < maze5[y].length; x++) {
            if (maze5[y][x] == 0) {
                context.fillStyle = "black";
                context.fillRect(x*boxSize, y*boxSize, boxSize, boxSize);
            }
            else if (maze5[y][x] == 1) {
                context.fillStyle = "white";
                context.fillRect(x*boxSize, y*boxSize, boxSize, boxSize);
            }
            else if (maze5[y][x] == 2) {
                context.fillStyle = "white";
                context.fillRect(x*boxSize, y*boxSize, boxSize, boxSize);
                //Start of the player and mvt of the player
                var dino = document.getElementById("player");
            }
            else if (maze5[y][x] == 3) {
                context.fillStyle = "red";
                context.fillRect(x*boxSize, y*boxSize, boxSize, boxSize);
            }
        }
        
    }

}

refreshScreen();