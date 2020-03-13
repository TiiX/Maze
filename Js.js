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

function mouvements(dir) {
    //Up
    if (dir === "Up") {
        -- pos.y;
        if (maze5[pos.y][pos.x] === 0) {pos.y ++;}
        refreshScreen();
    }
    //Down
    if (dir === "Down") {
        -- pos.y;
        if (maze5[pos.y][pos.x] === 0) {pos.y ++;}
        refreshScreen();
    }
    //Right
    if (dir === "Right") {
        -- pos.y;
        if (maze5[pos.y][pos.x] === 0) {pos.y ++;}
        refreshScreen();
    }
    //Left
    if (dir === "Left") {
        -- pos.y;
        if (maze5[pos.y][pos.x] === 0) {pos.y ++;}
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
    pos.x ++;
    refreshScreen();
});
var BLeft = document.getElementById("left").addEventListener("click", function(){
    -- pos.x;
    refreshScreen();
});
var BUp = document.getElementById("up").addEventListener("click", function(){
    -- pos.y;
    refreshScreen();
});
var BDown = document.getElementById("down").addEventListener("click", function(){
    pos.y ++;
    refreshScreen();
});

document.addEventListener("keyup", function(event) {
    if (event.key === "ArrowRight") {
        pos.x ++;
        refreshScreen();
    }
    else if (event.key === "ArrowLeft") {
        --pos.x;
        refreshScreen();
    }
    else if (event.key === "ArrowUp") {
        --pos.y;
        refreshScreen();
    }
    else if (event.key === "ArrowDown") {
        pos.y ++;
        refreshScreen();
    }
}); 

refreshScreen();