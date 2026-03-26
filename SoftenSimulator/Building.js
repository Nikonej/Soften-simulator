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
        for (let i = 0; i < this.sizex; i++){
            for (let j = 0; j < this.sizey; j++){
                grid[this.x+i][this.y+j] = true;
            }
        }
    }

    draw() {

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
    }

    draw() {
        image(husimg, this.x*z0, this.y*z0);
    }

    static display(x,y) {
        fill(0);
        textSize(14*z);
        text("cost: " + Hus.price, (x+5)*z - xscroll, (y+12)*z - yscroll);
        text("buildtime: " + Hus.buildtime, (x+5)*z - xscroll, (y+24)*z - yscroll);
        text("housing: " + Hus.housing, (x+5)*z - xscroll, (y+36)*z - yscroll);
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
    }

    draw() {
        image(hotel1img, this.x*z0, this.y*z0, 240, 360);
    }

    static display(x,y) {
        fill(0);
        textSize(14*z);
        text("cost: " + Hotel.price, (x+5)*z - xscroll, (y+12)*z - yscroll);
        text("buildtime: " + Hotel.buildtime, (x+5)*z - xscroll, (y+24)*z - yscroll);
        text("housing: " + Hotel.housing, (x+5)*z - xscroll, (y+36)*z - yscroll);
    }
}

class Kontor extends Building {
    static sizex = 3;
    static sizey = 3;
    static price = 4000;
    static maxJobs = 6
    static income = 300;    
    static buildtime = 3;
    constructor(x, y, selected) {
        super(x, y, selected);
        this.activeJobs = 0;
        this.maxJobs = Kontor.maxJobs;
        this.cashProd = Kontor.income/Kontor.maxJobs;
    }

    draw() {
        image(kontor1img,this.x*z0, this.y*z0);
    }

    static display(x,y) {
        fill(0);
        textSize(14*z);
        text("cost: " + Kontor.price, (x+5)*z - xscroll, (y+12)*z - yscroll);
        text("buildtime: " + Kontor.buildtime, (x+5)*z - xscroll, (y+24)*z - yscroll);
        text("workers " + Kontor.maxJobs, (x+5)*z - xscroll, (y+36)*z - yscroll);
        text("income: " + Kontor.income, (x+5)*z - xscroll, (y+48)*z - yscroll);
    }
}

class Hospital extends Building {
    static sizex = 5;
    static sizey = 3;
    static price = 10000;
    static buildtime = 7;
    static maxJobs = 6;
    static income = -2400;
    constructor(x, y, selected) {
        super(x, y, selected);
        this.maxJobs = Hospital.maxJobs;
        this.activeJobs = 0;
        this.cashProd = Hospital.income/Hospital.maxJobs;
    }

    draw() {
        image(hospitalimg, this.x*z0, this.y*z0);
    }

    static display(x,y) {
        fill(0);
        textSize(14*z);
        text("cost: " + Hospital.price, (x+5)*z - xscroll, (y+12)*z - yscroll);
        text("buildtime: " + Hospital.buildtime, (x+5)*z - xscroll, (y+24)*z - yscroll);
        text("workers: " + Hospital.maxJobs, (x+5)*z - xscroll, (y+36)*z - yscroll);
    }
}