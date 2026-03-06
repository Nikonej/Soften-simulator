class Building {
    constructor(x, y, sizex, sizey) {
        this.x = x;
        this.y = y;
        this.sizex = sizex;
        this.sizey = sizey;
        for (let i = 0; i < this.sizex; i++){
            for (let j = 0; j < this.sizey; j++){
                grid[this.x+i][this.y+j] = true;
            }
        }
    }

    draw() {

    }
}

class Hus extends Building {
    static sizex = 3;
    static sizey = 2;
    constructor(x, y, sizex, sizey) {
        super(x, y,sizex, sizey);
    }

    draw() {
        image(husimg,this.x*z0, this.y*z0);
    }
}
/*
this.sizex = 3;
this.sizey = 3;
for (let i = 0; i < this.sizex; i++){
    for (let j = 0; j < this.sizey; j++){
        grid[x+i][y+j]=="true"
    }
}
*/