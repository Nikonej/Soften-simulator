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
        text("Hus", (x+35)*z - xscroll*z, (y+70)*z - yscroll*z);

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
        text("Hotel", (x+35)*z - xscroll*z, (y+70)*z - yscroll*z);

    }
}

class Kontor extends Building {
    static sizex = 3;
    static sizey = 3;
    static price = 4000;
    static maxJobs = 6;
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
        text("Kontor", (x+35)*z - xscroll*z, (y+70)*z - yscroll*z);

    }
}

class Storkontor extends Building {
    static sizex = 6;
    static sizey = 2;
    static price = 15000;
    static maxJobs = 10;
    static income = 24;    
    static buildtime = 7;
    constructor(x, y, selected) {
        super(x, y, selected);
        this.maxJobs = Storkontor.maxJobs;
        this.cashProd = Storkontor.income/Storkontor.maxJobs;
        this.doorX = this.x;
        this.doorY = this.y+2;
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
        text("Stort kontor", (x+25)*z - xscroll*z, (y+70)*z - yscroll*z);

    }
}

class fabrik extends Building {
    static sizex = 6;
    static sizey = 5;
    static price = 24000;
    static maxJobs = 60;
    static income = 120;    
    static buildtime = 5;
    constructor(x, y, selected) {
        super(x, y, selected);
        this.maxJobs = fabrik.maxJobs;
        this.cashProd = fabrik.income/fabrik.maxJobs;
        this.doorX = this.x;
        this.doorY = this.y+5;
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
        text("fabrik", (x+35)*z - xscroll*z, (y+70)*z - yscroll*z);

    }
}

class IKEA extends Building {
    static sizex = 10;
    static sizey = 10;
    static price = 50000;
    static maxJobs = 30;
    static income = 80;    
    static buildtime = 10;
    constructor(x, y, selected) {
        super(x, y, selected);
        this.maxJobs = IKEA.maxJobs;
        this.cashProd = IKEA.income/IKEA.maxJobs;
        this.doorX = this.x;
        this.doorY = this.y+10;
    }

    draw() {
        image(ikeaimg,this.x*z0, this.y*z0);
    }

    update() {
        jobs += this.maxJobs;
        this.graph = BFS(this.doorX, this.doorY);
    }

    static display(x,y) {
        fill(0);
        textSize(14*z);
        text("cost: " + IKEA.price, (x+5)*z - xscroll*z, (y+12)*z - yscroll*z);
        text("buildtime: " + IKEA.buildtime, (x+5)*z - xscroll*z, (y+24)*z - yscroll*z);
        text("workers " + IKEA.maxJobs, (x+5)*z - xscroll*z, (y+36)*z - yscroll*z);
        text("income: " + IKEA.income, (x+5)*z - xscroll*z, (y+48)*z - yscroll*z);
        text("IKEA", (x+35)*z - xscroll*z, (y+70)*z - yscroll*z);

    }
}

class Bank extends Building {
    static sizex = 8;
    static sizey = 5;
    static price = 100000;
    static maxJobs = 40;
    static income = 140;    
    static buildtime = 12;
    constructor(x, y, selected) {
        super(x, y, selected);
        this.maxJobs = Bank.maxJobs;
        this.cashProd = Bank.income/Bank.maxJobs;
        this.doorX = this.x;
        this.doorY = this.y+5;
    }

    draw() {
        image(bankimg,this.x*z0, this.y*z0);
    }

    update() {
        jobs += this.maxJobs;
        this.graph = BFS(this.doorX, this.doorY);
    }

    static display(x,y) {
        fill(0);
        textSize(14*z);
        text("cost: " + Bank.price, (x+5)*z - xscroll*z, (y+12)*z - yscroll*z);
        text("buildtime: " + Bank.buildtime, (x+5)*z - xscroll*z, (y+24)*z - yscroll*z);
        text("workers " + Bank.maxJobs, (x+5)*z - xscroll*z, (y+36)*z - yscroll*z);
        text("income: " + Bank.income, (x+5)*z - xscroll*z, (y+48)*z - yscroll*z);
        text("Bank", (x+35)*z - xscroll*z, (y+70)*z - yscroll*z);

    }
}

class Wtc extends Building {
    static sizex = 5;
    static sizey = 15;
    static price = 500000;
    static maxJobs = 100;
    static income = 400;   
    static buildtime = 3;
    constructor(x, y, selected) {
        super(x, y, selected);
        this.maxJobs = Wtc.maxJobs;
        this.cashProd = Wtc.income/Wtc.maxJobs;
        this.doorX = this.x;
        this.doorY = this.y+15;
    }

    draw() {
        image(wtcimg,this.x*z0, this.y*z0);
    }

    update() {
        jobs += this.maxJobs;
        this.graph = BFS(this.doorX, this.doorY);
    }

    static display(x,y) {
        fill(0);
        textSize(14*z);
        text("cost: " + Wtc.price, (x+5)*z - xscroll*z, (y+12)*z - yscroll*z);
        text("buildtime: " + Wtc.buildtime, (x+5)*z - xscroll*z, (y+24)*z - yscroll*z);
        text("workers " + Wtc.maxJobs, (x+5)*z - xscroll*z, (y+36)*z - yscroll*z);
        text("income: " + Wtc.income, (x+5)*z - xscroll*z, (y+48)*z - yscroll*z);
        text("World trade center", (x+3)*z - xscroll*z, (y+70)*z - yscroll*z);

    }
}

class Hospital extends Building {
    static sizex = 5;
    static sizey = 3;
    static price = 10000;
    static buildtime = 2;
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

    produce() {
        satisfaction.health += 0.4*happiness;
    }

    static display(x,y) {
        fill(0);
        textSize(14*z);
        text("cost: " + Hospital.price, (x+5)*z - xscroll*z, (y+12)*z - yscroll*z);
        text("buildtime: " + Hospital.buildtime, (x+5)*z - xscroll*z, (y+24)*z - yscroll*z);
        text("workers: " + Hospital.maxJobs, (x+5)*z - xscroll*z, (y+36)*z - yscroll*z);
        text("Hospital", (x+35)*z - xscroll*z, (y+70)*z - yscroll*z);

    }
}

class Park extends Building {
    static sizex = 3;
    static sizey = 3;
    static price = 50000;
    static buildtime = 7;
    static maxJobs = 1;
    static income = -10;
    constructor(x, y, selected) {
        super(x, y, selected);
        this.maxJobs = Park.maxJobs;
        this.cashProd = Park.income/Park.maxJobs;
        this.doorX = this.x+1;
        this.doorY = this.y+3;
    }

    update() {
        jobs += this.maxJobs;
        this.graph = BFS(this.doorX, this.doorY);
    }

    draw() {
        image(parkimg, this.x*z0, this.y*z0);
    }

    produce() {
        satisfaction.natur += 4*happiness;
    }

    static display(x,y) {
        fill(0);
        textSize(14*z);
        text("cost: " + Park.price, (x+5)*z - xscroll*z, (y+12)*z - yscroll*z);
        text("buildtime: " + Park.buildtime, (x+5)*z - xscroll*z, (y+24)*z - yscroll*z);
        text("workers: " + Park.maxJobs, (x+5)*z - xscroll*z, (y+36)*z - yscroll*z);
        text("Park", (x+35)*z - xscroll*z, (y+70)*z - yscroll*z);

    }
}

class Skole extends Building {
    static sizex = 8;
    static sizey = 3;
    static price = 22000;
    static buildtime = 10;
    static maxJobs = 5;
    static income = -5;
    constructor(x, y, selected) {
        super(x, y, selected);
        this.maxJobs = Skole.maxJobs;
        this.cashProd = Skole.income/Skole.maxJobs;
        this.doorX = this.x+2;
        this.doorY = this.y+3;
    }

    update() {
        jobs += this.maxJobs;
        this.graph = BFS(this.doorX, this.doorY);
    }

    draw() {
        image(skoleimg, this.x*z0, this.y*z0);
    }

    produce() {
        satisfaction.education += 0,4*happiness;
    }

    static display(x,y) {
        fill(0);
        textSize(14*z);
        text("cost: " + Skole.price, (x+5)*z - xscroll*z, (y+12)*z - yscroll*z);
        text("buildtime: " + Skole.buildtime, (x+5)*z - xscroll*z, (y+24)*z - yscroll*z);
        text("workers: " + Skole.maxJobs, (x+5)*z - xscroll*z, (y+36)*z - yscroll*z);
        text("Skole", (x+35)*z - xscroll*z, (y+70)*z - yscroll*z);

    }
}

class Politi extends Building {
    static sizex = 6;
    static sizey = 4;
    static price = 120000;
    static buildtime = 8;
    static maxJobs = 12;
    static income = -12;
    constructor(x, y, selected) {
        super(x, y, selected);
        this.maxJobs = Politi.maxJobs;
        this.cashProd = Politi.income/Politi.maxJobs;
        this.doorX = this.x+3;
        this.doorY = this.y+4;
    }

    update() {
        jobs += this.maxJobs;
        this.graph = BFS(this.doorX, this.doorY);
    }

    draw() {
        image(politiimg, this.x*z0, this.y*z0);
    }

    produce() {
        satisfaction.safety += 0,67*happiness;
    }

    static display(x,y) {
        fill(0);
        textSize(14*z);
        text("cost: " + Politi.price, (x+5)*z - xscroll*z, (y+12)*z - yscroll*z);
        text("buildtime: " + Politi.buildtime, (x+5)*z - xscroll*z, (y+24)*z - yscroll*z);
        text("workers: " + Politi.maxJobs, (x+5)*z - xscroll*z, (y+36)*z - yscroll*z);
        text("Politi", (x+35)*z - xscroll*z, (y+70)*z - yscroll*z);
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
    static display(x,y) {
        fill(0);
        textSize(14*z);
        text("cost pr vej: " + Vej.price, (x+5)*z - xscroll*z, (y+12)*z - yscroll*z);
        text("buildtime: " + Vej.buildtime, (x+5)*z - xscroll*z, (y+24)*z - yscroll*z);
        text(" Veje forbinder \n bynginger og lader \n folk komme \n på arbejde", (x-2)*z - xscroll*z, (y+50)*z - yscroll*z);

    }
}