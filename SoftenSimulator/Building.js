class Building {
    constructor(x, y, selected) {
        this.x = x;
        this.y = y;
        this.sizex = selected.sizex;
        this.sizey = selected.sizey;
        for (let i = 0; i < this.sizex; i++){
            for (let j = 0; j < this.sizey; j++){
                grid[this.x+i][this.y+j] = true;
            }
        }
    }

    draw() {

    }

    update() {

    }
}

class Constructionsite extends Building {
    constructor(x, y, selected) {
        super(x, y, selected);
    }
}

class Hus extends Building {
    static sizex = 3;
    static sizey = 2;
  //  static buildtime = 3;
    constructor(x, y, selected) {
        super(x, y, selected);
    }

    draw() {
        image(husimg,this.x*z0, this.y*z0);
    }
}

class Kontor extends Building {
    static sizex = 4;
    static sizey = 4;
    
  //  static buildtime = 3;
    constructor(x, y, selected) {
        super(x, y, selected);
        this.activeJobs = 0;
        this.maxJobs = 6;
    }

    draw() {
        image(kontor1img,this.x*z0, this.y*z0);
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