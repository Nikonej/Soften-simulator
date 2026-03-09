xselscroll = 0;
function GUI(){
    z = z0/zoom
    rect((0 - xscroll)*z, (500 - yscroll)*z, 800*z, 200*z)
    push()
        fill(255)
        text("Population: " + population.length, (10 - xscroll)*z, (510 - yscroll)*z)
        text("money: " + money, (100 - xscroll)*z, (510 - yscroll)*z)
    pop()
    image(husimg, (10 - xscroll + xselscroll)*z, (550 - yscroll)*z, 60*z, 40*z)
    image(kontor1img, (90 - xscroll + xselscroll)*z, (550 - yscroll)*z, 60 * z, 40 * z)
}

function mouseClicked() {
    let x = floor((mouseX-xscroll)/zoom);
    let y = floor((mouseY-yscroll)/zoom);
    if (mouseY>500){
        if (mouseX - xselscroll >= 10 && mouseX - xselscroll <= 70){
            selected = Hus;
            selectedarray = buildings.huse;
        } else if (mouseX - xselscroll >= 90 && mouseX - xselscroll <= 150){
            selected = Kontor;
            selectedarray = buildings.kontorer;

        }
    } else {
        if (grid[x][y] == false){
            if (Room(x,y,selected)){
                selectedarray.push(new selected(x, y, selected));
            }
        }
    }
}

function mouseWheel(event) {
    if (mouseY < 500){
        xscroll -= event.deltaX;
        yscroll -= event.deltaY;
    } else if (xselscroll - event.deltaX <= 0){
        xselscroll -= event.deltaX;
    }

}