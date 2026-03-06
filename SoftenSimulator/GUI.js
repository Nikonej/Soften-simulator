function GUI(){

}

function mouseClicked() {
    let x = floor((mouseX-xscroll)/zoom);
    let y = floor((mouseY-yscroll)/zoom);
    let selected = Hus;
    let selectedarray = buildings.huse;
    if (grid[x][y] == false){
        if (Room(x,y,selected)){
            selectedarray.push(new selected(x,y,selected));
        }
    }
}