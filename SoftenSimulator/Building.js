class Building {
    constructor(x, y, selected, selectedarray) {
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

    update(i) {

    }
}

class Constructionsite extends Building {
    constructor(x, y, selected, selectedarray) {
        super(x, y, selected);
        this.timeleft = selected.buildtime;
        this.selected = selected;
        this.selectedarray = selectedarray;
    }

    update(i) {
        this.timeleft--;
        if (this.timeleft <= 0) {
            this.selectedarray.push(new this.selected(this.x, this.y, this.selected, this.selectedarray));
            buildings.constructionsite.splice(i, 1);
        }
    }

    draw() {
        image(constructionimg, this.x*z0, this.y*z0, this.sizex*z0, this.sizey*z0);
    }
}

class Hus extends Building {
    static sizex = 3;
    static sizey = 2;
    static price = 1000;
    static buildtime = 1;
    constructor(x, y, selected) {
        super(x, y, selected);
    }

    draw() {
        image(husimg, this.x*z0, this.y*z0);
    }
}

class Hotel extends Building {
    static sizex = 4;
    static sizey = 6;
    static price = 10000;
    static buildtime = 10;
    constructor(x, y, selected) {
        super(x, y, selected);
    }

    draw() {
        image(hotel1img, this.x*z0, this.y*z0, 240, 360);
    }
}

class Kontor extends Building {
    static sizex = 3;
    static sizey = 3;
    static price = 4000;
    
    static buildtime = 3;
    constructor(x, y, selected) {
        super(x, y, selected);
        this.activeJobs = 0;
        this.maxJobs = 6;
        this.cashProd = 50;
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