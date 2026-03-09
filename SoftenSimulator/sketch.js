

async function setup() {
    husimg = await loadImage('sprites/hus.png');
    kontor1img = await loadImage('sprites/kontor1.png');
    constructionimg = await loadImage('sprites/construction site.png');
    createCanvas(800, 600);
    loadNames();
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
        kontorer: []
    }

    money = 5000;
    housing = 10;
    population = [];
    for (let i=0; i<4; i++) {
        population.push(new Human(random(15,45)));
    }

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
    

    for (let i=0; i<buildings.huse.length; i++) {
        buildings.huse[i].draw();
    }

    if (frameCount % 30 == 0) {
        update();
    }
    GUI();
}

function update() {
    time++;
    print(time);
    housing = 0;
    housing += 4*buildings.huse.length;



    for (let i = 0; i<population.length; i++) {
        population[i].update(i);
    }
}

function keyPressed() {
    if (key == "+") {
        zoom += 1;
    }
    if (key == "-") {
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