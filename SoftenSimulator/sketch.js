

async function setup() {
    //load alle billeder
    husimg = await loadImage('sprites/hus.png');
    hotel1img = await loadImage('sprites/Hotel1.png');
    kontor1img = await loadImage('sprites/kontor2.png');
    constructionimg = await loadImage('sprites/construction site.png');
    hospitalimg = await loadImage('sprites/Hospital.png');
    kontor2img = await loadImage('sprites/kontor3.png');
    ikeaimg = await loadImage('sprites/IKEA.png');
    parkimg = await loadImage('sprites/park.png');
    politiimg = await loadImage('sprites/politi.png');
    skoleimg = await loadImage('sprites/skole.png');
    fabrikimg = await loadImage('sprites/fabrik.png');
    bankimg = await loadImage('sprites/bank.png');
    wtcimg= await loadImage('sprites/wtc.png');
    speed1img= await loadImage('sprites/1speed.png');
    speed2img= await loadImage('sprites/2speed.png');
    speed3img= await loadImage('sprites/3speed.png');

    //tegn skærm
    createCanvas(800, 600);
    //definer nødvendige variable
    loadNames();
    z0 = 60;
    zoom = z0;
    xscroll = 10;
    yscroll = 0;
    time = 0;
    workers = 0;
    jobs = 0;
    money = 50000;
    housing = 10;
    gamespeed = 1;
    happiness = 1;
    vejnet = [];
    haveHalfUpdated = true;
    //lav et 100*100 grid til vej logik
    for (let i = 0; i<100; i++) {
        vejnet.push([]);
        for (let j = 0; j<100; j++) {
            vejnet[i].push(false);
        }
    }
    //lav et 100*100 grid til bygninger
    grid = [];
    for (let i = 0; i<99; i++) {
        grid.push([]);
        for (let j = 0; j<99; j++) {
            grid[i].push(false);
        }
    }
    //opbevar alle bygninger
    buildings = {
        constructionsite: [],
        huse: [new Hus(5, 4, Hus), new Hus(1, 4, Hus)],
        kontorer: [],
        hoteller: [],
        hospitaler: [],
        veje: [],
        fabrikker: [],
        storKontore: [],
        parker: [],
        skoler: [],
        politier: [],
        IKEAer: [],
        banke: [],
        wtcer: []
    }
    //tilføj behov for at have et glæde system
    needs = {
        health: 0,
        natur: 0,
        education: 0,
        safety: 0
    }
    satisfaction = {
        health: 0,
        natur: 0,
        education: 0,
        safety: 0
    }
    lastSatisfaction = {
        health: 0,
        natur: 0,
        education: 0,
        safety: 0
    }
    selected = Hus;
    selectedarray = buildings.huse;

    //tilføj mennesker til at starte med
    population = [];
    for (let i=0; i<4; i++) {
        population.push(new Human(random(15,45), buildings.huse[0]));
    }
    speedSlider = createSlider(1,3,2,0);
    speedSlider.position(745,568);
}

function draw() {
    //sæt framerate
    frameRate(30);
    gamespeed = speedSlider.value();
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
    for (let i=0; i<population.length; i++) {
        population[i].draw();
    }
    if (time > 150 && haveHalfUpdated) {
        halfUpdate();
        haveHalfUpdated = false;
    }
    if (time > 300) {
        time = 0;
        update();
        haveHalfUpdated = true;
    }
    GUI();
    
}

function updateHappiness() {    
    if (population.length > 30) {
        needs.health = population.length-30;
    } else {
        needs.health = 0;
    }

    if (population.length > 50) {
        needs.natur = population.length-50;
    } else {
        needs.natur = 0;
    }

    if (population.length > 100) {
        needs.education = population.length-100
    } else {
        needs.education = 0;
    }

    if (population.length > 350) {
        needs.safety = population.length-350
    } else {
        needs.safety = 0;
    }

    totalNeeds = needs.health + needs.natur + needs.education + needs.safety;

    if (totalNeeds == 0) {
        happiness = 1;
    } else {
        happiness *= 0.7
        happiness += (min(satisfaction.health, needs.health) + min(satisfaction.natur, needs.natur) + min(satisfaction.education, needs.education) + min(satisfaction.safety, needs.safety))/totalNeeds*0.3;
    }

    lastSatisfaction.health = satisfaction.health;
    lastSatisfaction.natur = satisfaction.natur;
    lastSatisfaction.education = satisfaction.education;
    lastSatisfaction.safety = satisfaction.safety;

    satisfaction.health = 0;
    satisfaction.natur = 0;
    satisfaction.education = 0;
    satisfaction.safety = 0;
}

function update() {
    updateHappiness();
    workers = 0;
    jobs = 0;
    housing = 0;

    for(building in buildings) {
        for (let i=0; i<buildings[building].length; i++) {
            let g = buildings[building].length;
            buildings[building][i].update(i);
            if (g > buildings[building].length) {
                i--;
            }
        }
    }

    for (let i = 0; i<population.length; i++) {
        population[i].update(i);
    }
    
}

function halfUpdate() {
    for (let i = 0; i<population.length; i++) {
        population[i].halfUpdate();
    }
}

function keyPressed() {
    if (key == "+") {
        zoom += 1;
        xscroll = xscroll*(zoom/(zoom-1))
        yscroll = yscroll*(zoom/(zoom-1))
    }
    if (key == "-" && zoom > 1) {
        zoom -= 1;
        xscroll = xscroll*(zoom/(zoom+1))
        yscroll = yscroll*(zoom/(zoom+1))
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