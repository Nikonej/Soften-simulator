class Building {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {

    }
}

class Hus extends Building {
    constructor(x, y) {
        super(x, y);
    }

    draw() {
        image(husimg,this.x*z0, this.y*z0);
    }
}