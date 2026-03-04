

async function setup() {
    hus = await loadImage('sprites/hus.png');
    createCanvas(800, 600);

    zoom = 4;
    grid = [];
    for (let i = 0; i<100; i++) {
        grid.push([]);
        for (let j = 0; j<100; j++) {
            grid[i].push(false);
        }
    }
}

function draw() {
    background(10,100,10);
    fill(0, 0, 0, 100);
    for (let i=0; i<grid.length; i++) {
        line(i*6*zoom, 0, i*6*zoom, height);
        line(0, i*6*zoom, width, i*6*zoom);
    }
    fill(0);
    scale(zoom);
    image(hus,0,0);

}

function keyPressed() {
    if (key == "+") {
        zoom += 1;
    }
    if (key == "-") {
        zoom -= 1;
    }
}
