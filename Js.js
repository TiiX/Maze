/*Maze Templates*/
var maze5 = [[0,0,0,2,0],
            [1,1,0,1,0],
            [0,1,1,1,0],
            [1,1,0,1,1],
            [1,0,0,0,0]]

var pos = {
    x : 0,
    y : 4 
}

var canvas = document.getElementById("board");

function verification_pos() {
    if (pos.x > 5 || pos.x < 0 || pos.y > 5 || pos.y < 0) {return false;}
    else {return true;}
}

function mouvements(dir) {
    //Up
    if (dir === "Up") {
        if (maze5[pos.y - 1][pos.x] === 1 && verification_pos()) {--pos.y;}
        refreshScreen();
    }
    //Down
    if (dir === "Down") {
        if (maze5[pos.y + 1][pos.x] === 1 && verification_pos()) {pos.y++;}
        refreshScreen();
    }
    //Right
    if (dir === "Right") {
        if (maze5[pos.y][pos.x + 1] === 1 && verification_pos()) {pos.x++;}
        refreshScreen();
    }
    //Left
    if (dir === "Left") {
        if (maze5[pos.y][pos.x - 1] === 1 && verification_pos()) {--pos.x;}
        refreshScreen();
    }

}

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
                context.fillStyle = "red";
                context.fillRect(x*boxSize, y*boxSize, boxSize, boxSize);
            }
        }
        
    }

    //Start of the player 
    var dino = document.getElementById("player");
    context.drawImage(dino, pos.x * boxSize, pos.y * boxSize, boxSize, boxSize)

}

var BRight = document.getElementById("right").addEventListener("click", function(){
    mouvements("Right");
});
var BLeft = document.getElementById("left").addEventListener("click", function(){
    mouvements("Left");
});
var BUp = document.getElementById("up").addEventListener("click", function(){
    mouvements("Up");
});
var BDown = document.getElementById("down").addEventListener("click", function(){
    mouvements("Down");
});

document.addEventListener("keyup", function(event) {
    if (event.key === "ArrowRight") {
        mouvements("Right");
    }
    else if (event.key === "ArrowLeft") {
        mouvements("Left");
    }
    else if (event.key === "ArrowUp") {
        mouvements("Up");
    }
    else if (event.key === "ArrowDown") {
        mouvements("Down");
    }
}); 

refreshScreen();