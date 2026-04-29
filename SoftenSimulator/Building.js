class Building {
    constructor(x, y, selected, selectedarray) {
        this.x = x;
        this.y = y;
        this.sizex = selected.sizex;
        this.sizey = selected.sizey;
        this.housing = 0;
        this.indbyggere = 0;
        this.maxJobs = 0;
        this.income = 0;
        this.activeJobs = 0;
        for (let i = 0; i < this.sizex; i++){
            for (let j = 0; j < this.sizey; j++){
                grid[this.x+i][this.y+j] = true;
            }
        }
    }

    draw() {
        
    }

    produce() {
        
    }

    update(i) {
        housing += this.housing;
        jobs += this.maxJobs;
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
    static sizex = 4;
    static sizey = 2;
    static price = 1000;
    static buildtime = 1;
    static housing = 4;
    constructor(x, y, selected) {
        super(x, y, selected);
        this.housing = Hus.housing;
        this.doorX = this.x+1;
        this.doorY = this.y+2;
    }

    draw() {
        image(husimg, this.x*z0, this.y*z0);
    }

    static display(x,y) {
        fill(0);
        textSize(14*z);
        text("cost: " + Hus.price, (x+5)*z - xscroll*z, (y+12)*z - yscroll*z);
        text("buildtime: " + Hus.buildtime, (x+5)*z - xscroll*z, (y+24)*z - yscroll*z);
        text("housing: " + Hus.housing, (x+5)*z - xscroll*z, (y+36)*z - yscroll*z);
    }
}

class Hotel extends Building {
    static sizex = 4;
    static sizey = 6;
    static price = 10000;
    static buildtime = 10;
    static housing = 40;
    constructor(x, y, selected) {
        super(x, y, selected);
        this.housing = Hotel.housing;
        this.doorX = this.x+1;
        this.doorY = this.y+6;
    }

    draw() {
        image(hotel1img, this.x*z0, this.y*z0, 240, 360);
    }

    static display(x,y) {
        fill(0);
        textSize(14*z);
        text("cost: " + Hotel.price, (x+5)*z - xscroll*z, (y+12)*z - yscroll*z);
        text("buildtime: " + Hotel.buildtime, (x+5)*z - xscroll*z, (y+24)*z - yscroll*z);
        text("housing: " + Hotel.housing, (x+5)*z - xscroll*z, (y+36)*z - yscroll*z);
    }
}

class Kontor extends Building {
    static sizex = 3;
    static sizey = 3;
    static price = 4000;
    static maxJobs = 6
    static income = 12;    
    static buildtime = 3;
    constructor(x, y, selected) {
        super(x, y, selected);
        this.maxJobs = Kontor.maxJobs;
        this.cashProd = Kontor.income/Kontor.maxJobs;
        this.doorX = this.x+1;
        this.doorY = this.y+3;
    }

    draw() {
        image(kontor1img,this.x*z0, this.y*z0);
    }

    update() {
        jobs += this.maxJobs;
        this.graph = BFS(this.doorX, this.doorY);
    }

    static display(x,y) {
        fill(0);
        textSize(14*z);
        text("cost: " + Kontor.price, (x+5)*z - xscroll*z, (y+12)*z - yscroll*z);
        text("buildtime: " + Kontor.buildtime, (x+5)*z - xscroll*z, (y+24)*z - yscroll*z);
        text("workers " + Kontor.maxJobs, (x+5)*z - xscroll*z, (y+36)*z - yscroll*z);
        text("income: " + Kontor.income, (x+5)*z - xscroll*z, (y+48)*z - yscroll*z);
    }
}

class Storkontor extends Building {
    static sizex = 5;
    static sizey = 3;
    static price = 4000;
    static maxJobs = 6
    static income = 12;    
    static buildtime = 3;
    constructor(x, y, selected) {
        super(x, y, selected);
        this.maxJobs = Storkontor.maxJobs;
        this.cashProd = Storkontor.income/Storkontor.maxJobs;
        this.doorX = this.x;
        this.doorY = this.y+3;
    }

    draw() {
        image(kontor2img,this.x*z0, this.y*z0);
    }

    update() {
        jobs += this.maxJobs;
        this.graph = BFS(this.doorX, this.doorY);
    }

    static display(x,y) {
        fill(0);
        textSize(14*z);
        text("cost: " + Storkontor.price, (x+5)*z - xscroll*z, (y+12)*z - yscroll*z);
        text("buildtime: " + Storkontor.buildtime, (x+5)*z - xscroll*z, (y+24)*z - yscroll*z);
        text("workers " + Storkontor.maxJobs, (x+5)*z - xscroll*z, (y+36)*z - yscroll*z);
        text("income: " + Storkontor.income, (x+5)*z - xscroll*z, (y+48)*z - yscroll*z);
    }
}

class fabrik extends Building {
    static sizex = 5;
    static sizey = 3;
    static price = 4000;
    static maxJobs = 6
    static income = 12;    
    static buildtime = 3;
    constructor(x, y, selected) {
        super(x, y, selected);
        this.maxJobs = fabrik.maxJobs;
        this.cashProd = fabrik.income/fabrik.maxJobs;
        this.doorX = this.x;
        this.doorY = this.y+3;
    }

    draw() {
        image(fabrikimg,this.x*z0, this.y*z0);
    }

    update() {
        jobs += this.maxJobs;
        this.graph = BFS(this.doorX, this.doorY);
    }

    static display(x,y) {
        fill(0);
        textSize(14*z);
        text("cost: " + fabrik.price, (x+5)*z - xscroll*z, (y+12)*z - yscroll*z);
        text("buildtime: " + fabrik.buildtime, (x+5)*z - xscroll*z, (y+24)*z - yscroll*z);
        text("workers " + fabrik.maxJobs, (x+5)*z - xscroll*z, (y+36)*z - yscroll*z);
        text("income: " + fabrik.income, (x+5)*z - xscroll*z, (y+48)*z - yscroll*z);
    }
}

class Hospital extends Building {
    static sizex = 5;
    static sizey = 3;
    static price = 10000;
    static buildtime = 7;
    static maxJobs = 5;
    static income = -35;
    constructor(x, y, selected) {
        super(x, y, selected);
        this.maxJobs = Hospital.maxJobs;
        this.cashProd = Hospital.income/Hospital.maxJobs;
        this.doorX = this.x;
        this.doorY = this.y+3;
    }

    update() {
        jobs += this.maxJobs;
        this.graph = BFS(this.doorX, this.doorY);
    }

    draw() {
        image(hospitalimg, this.x*z0, this.y*z0);
    }

    produce(prod) {
        satisfaction.health += prod;
    }

    static display(x,y) {
        fill(0);
        textSize(14*z);
        text("cost: " + Hospital.price, (x+5)*z - xscroll*z, (y+12)*z - yscroll*z);
        text("buildtime: " + Hospital.buildtime, (x+5)*z - xscroll*z, (y+24)*z - yscroll*z);
        text("workers: " + Hospital.maxJobs, (x+5)*z - xscroll*z, (y+36)*z - yscroll*z);
    }
}

class Vej extends Building{
    static price = 100;
    static buildtime = 1;
    static sizex = 1;
    static sizey = 1;
    constructor(x, y, selected, selectedarray){
        super(x, y, selected);
        vejnet[x][y] = true;
    }
    draw(){
        push();
            fill(170);
            rect(this.x*z0, this.y*z0, z0, z0);
        pop();
    }
}