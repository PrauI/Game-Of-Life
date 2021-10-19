
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
