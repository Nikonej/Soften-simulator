

async function setup() {
    husimg = await loadImage('sprites/hus.png');
    hotel1img = await loadImage('sprites/Hotel1.png');
    kontor1img = await loadImage('sprites/kontor2.png');
    constructionimg = await loadImage('sprites/construction site.png');
    hospitalimg = await loadImage('sprites/Hospital.png');
    createCanvas(800, 600);
    loadNames();
    z0 = 60;
    zoom = z0;
    xscroll = 10;
    yscroll = 0;
    time = 0;
    workers = 0;
    money = 50000;
    housing = 10;
    gamespeed = 5;

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
        hoteller: [],
        hospitaler: [],
        veje: []
    }
    selected = Hus;
    selectedarray = buildings.huse;
    //print(buildings.kontorer)

    
    population = [];
    for (let i=0; i<4; i++) {
        population.push(new Human(random(15,45), buildings.huse[0]));
    }
    prioriteretArbejde = [buildings.kontorer, buildings.hospitaler];

}

function draw() {
    frameRate(30);
    time += gamespeed;
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

    if (time > 300) {
        time = 0;
        update();
    }
    GUI();
}

function update() {
    workers = 0;
    jobs = 0;
    housing = 0;

    for(building in buildings) {
        for (let i=0; i<buildings[building].length; i++) {
            buildings[building][i].update(i);
        }
    }

    for (let i = 0; i<population.length; i++) {
        population[i].update(i);
    }
    //print("workers: " + workers);
    //print("jobs: " + jobs);
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
        for (let i = 0; i < sizex; i++){
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