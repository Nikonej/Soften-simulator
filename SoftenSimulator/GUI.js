xselscroll = 0;
yselscroll = 0;
function GUI(){
    rect(0 - xscroll, 500 - yscroll, 800, 200)
    image(husimg, 10 - xscroll + xselscroll, 550 - yscroll, 60, 40)
    image(kontor1img, 90 - xscroll + xselscroll, 550 - yscroll, 60, 40)
}

function mouseClicked() {
    let x = floor((mouseX-xscroll)/zoom);
    let y = floor((mouseY-yscroll)/zoom);
    /*if (mouseY>400){
        if (mouseX<10 && mouseX>)
    }*/
    let selected = Hus;
    let selectedarray = buildings.huse;
    if (grid[x][y] == false){
        if (Room(x,y,selected)){
            selectedarray.push(new selected(x,y,selected));
        }
    }
}

function mouseWheel(event) {
    if (mouseY<500){
        xscroll -= event.deltaX;
        yscroll -= event.deltaY;
    } else if (xselscroll >= 0){
        xselscroll -= event.deltaX;
    }

}