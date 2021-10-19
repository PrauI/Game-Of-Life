
var rows = 10;
var cols = 10;
var grid = [];

function setup(){
    createCanvas(500,500);

    for(var i = 0; i < cols; i ++){
        grid[i] = new Array(rows);
    }

    for(var x = 0; x < cols; y ++){
        for(var y = 0; y < rows; y ++){
            grid[x][y] = new Cell(x,y);
        }
    }

    // for(var x = 0; x < cols; y ++){
    //     for(var y = 0; y < rows; y ++){
    //         grid[x][y].addNeighbors();
    //     }
    // }
    
}
function draw(){
    background(0);
}
