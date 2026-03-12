

async function setup() {
    husimg = await loadImage('sprites/hus.png');
    hotel1img = await loadImage('sprites/Hotel1.png');
    kontor1img = await loadImage('sprites/kontor2.png');
    constructionimg = await loadImage('sprites/construction site.png');
    hospitalimg = await loadImage('sprites/Hospital.png');
    createCanvas(800, 600);
    loadNames();
    selected = Hus;
    z0 = 60;
    zoom = z0;
    xscroll = 10;
    yscroll = 0;
    time = 0;
    grid = [];
    for (let i = 0; i<100; i++) {
        grid.push([]);
        for (let j = 0; j<100; j++) {
            grid[i].push(false);
        }
    }
    buildings = {
        huse: [new Hus(5, 4, Hus), new Hus(1, 4, Hus)],
        kontorer: [],
        constructionsite: [],
        hoteller: []
    }
    print(buildings.kontorer)

    money = 5000;
    housing = 10;
    population = [];
    for (let i=0; i<4; i++) {
        population.push(new Human(random(15,45)));
    }
    prioriteretArbejde = [buildings.kontorer]

}

function draw() {
    frameRate(30);
    translate(xscroll, yscroll);
    scale(zoom/z0);
    background(10,100,10);
    fill(0, 0, 0, 100);
    for (let i=0; i<grid.length; i++) {
        line(i*z0, 0, i*z0, 100*z0);
        line(0, i*z0, 100*z0, i*z0);
    }
    fill(0);


    for(building in buildings) {
        for (let i=0; i<buildings[building].length; i++) {
            buildings[building][i].draw();
        }
    }

/*
    for (let i=0; i<buildings.huse.length; i++) {
        buildings.huse[i].draw();
    }

    for (let i=0; i<buildings.kontorer.length; i++) {
        buildings.kontorer[i].draw();
    }
    */

    if (frameCount % 30 == 0) {
        update();
    }
    GUI();
}

function update() {
    time++;
   // print(time);
    housing = 0;
    housing += 4*buildings.huse.length;
    housing += 40*buildings.hoteller.length;

    for(building in buildings) {
        for (let i=0; i<buildings[building].length; i++) {
            buildings[building][i].update(i);
        }
    }

    for (let i = 0; i<population.length; i++) {
        population[i].update(i);
    }
}

function keyPressed() {
    if (key == "+") {
        zoom += 1;
    }
    if (key == "-" && zoom > 1) {
        zoom -= 1;
    }
}


function Room(x , y, selected){
    let result = true
    let sizex = selected.sizex;
    let sizey = selected.sizey;
    if (x==0){
      for (let i = 0; i < sizex + 1; i++){
        for (let j = 0; j < sizey; j++){
            if (grid[x+i][y+j] == true){
                result = false;
                return result;
            }
        }
    }  
    } else {
        for (let i = -1; i < sizex + 1; i++){
            for (let j = 0; j < sizey; j++){
                if (grid[x+i][y+j] == true){
                    result = false;
                    return result;
                }
            }
        }
    }
    return result;
}