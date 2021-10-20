var rows = 50;
var cols = 50;
var grid = [];

function setup(){
    createCanvas(600,600);
    
    // Zellen erstellen
    for(var i = 0; i < cols; i++){
        grid[i] = new Array(rows);
    }

    for(var x = 0; x < cols; x++){
        for(var y = 0; y < rows; y++){
            if(random(0,1) < 0.07){
                var a = true;
            }else{
                a = false;
            }
            grid[x][y] = new Cell(x,y,a);
        }
    }

    for(var x = 0; x < cols; x++){
        for(var y = 0; y < rows; y++){
            grid[x][y].addNeigbors();
        }
    }
    
}
function draw(){
    background(0);
    for(var x = 0; x < cols; x++){
        for(var y = 0; y < rows; y++){
            grid[x][y].show(50);
            grid[x][y].play();
        }
    }

    // test ob Nachbarn funktionieren
    // for(var i = 0; i < grid[3][4].neighbors.length; i++){
    //     grid[3][4].neighbors[i].show(255);
    // }
    
}

class Cell{
    constructor(x,y,alive){
        this.x = x;
        this.y = y;
        this.neighbors = [];
        this.alive = alive;
    }
    show(color){
        this.sizeX = width / rows;
        this.sizeY = height / cols;
        if(this.alive){
            color = 255;
        }
        fill(color);
        rect(this.x * this.sizeX, this.y * this.sizeY, this.sizeX, this.sizeY);
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

    play(){
        // first rule
        // cout alive neigbhors
        var numberOfAliveNeighbors = 0;
        for(var i = 0; i < this.neighbors.length; i++){
            if(this.neighbors[i].alive){
                numberOfAliveNeighbors +=1;
            }
        }

        // if alive neighbors is less then 2 die
        if(numberOfAliveNeighbors < 2){
            this.alive = false;
        }else if(numberOfAliveNeighbors > 3){
            this.alive = false;
        }else if(numberOfAliveNeighbors === 3){
            this.alive = true;
        }
    }
}



