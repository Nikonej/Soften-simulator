

async function setup() {
    hus = await loadImage('sprites/hus.png');
    createCanvas(800, 600);

    zoom = 60;
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
        line(i*zoom, 0, i*zoom, height);
        line(0, i*zoom, width, i*zoom);
    }
    fill(0);
    scale(zoom/60);
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
