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

    for(var x = 0; x < cols; y ++){
        for(var y = 0; y < rows; y ++){
            grid[x][y].addNeighbors();
        }
    }
}
function draw(){
    background(0);

}

class Cell{
    constructor(x,y){
        this.x = x;
        this.y = y;

        this.neighbors = [];
    }

    addNeigbors(){
        if(this.x > 0){
            this.neighbors.push(grid[this.x-1][this.y]);
        }
        if(this.x < cols - 1){
            this.neighbors.push(grid[this.x+1][this.y]);
        }
        if(this.y > 0){
            this.neighbors.push(grid[this.x][this.y - 1]);
        }
        if(this.y < rows - 1){
            this.neighbors.push(grid[this.x][this.y + 1]);
        }
        if(this.x > 0 && this.y > 0){
            this.neighbors.push(grid[this.x-1][this.y-1]);
        }
        if(this.x > 0 && this.y < rows -1){
            this.neighbors.push(grid[this.x-1][this.y+1]);
        }
        if(this.x < cols-1 && this.y < rows - 1){
            this.neighbors.push(grid[this.x+1][this.y+1]);
        }
        if(this.x < cols-1 && this.y > 0){
            this.neighbors.push(grid[this.x+1][this.y-1]);
        }
    }

}

