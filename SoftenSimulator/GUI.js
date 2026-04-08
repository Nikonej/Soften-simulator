xselscroll = 0;
showpriorities = false;
vej1 = 0;
Vej2 = 0;


function GUI(){
    let x = floor((mouseX-xscroll)/zoom);
    let y = floor((mouseY-yscroll)/zoom);
    z = z0/zoom
    rect((0 - xscroll)*z, (500 - yscroll)*z, 800*z, 200*z);
    push();
        fill(255);
        textSize(14*z);
        text("Population: " + population.length, (10 - xscroll)*z, (512 - yscroll)*z);
        text("money: " + money, (200 - xscroll)*z, (512 - yscroll)*z);
    pop();
    image(husimg, (10 - xscroll + xselscroll)*z, (550 - yscroll)*z, 60*z, 40*z);
    image(kontor1img, (90 - xscroll + xselscroll)*z, (550 - yscroll)*z, 60 * z, 40 * z);
    image(hotel1img, (170 - xscroll + xselscroll)*z, (550 - yscroll)*z, 60 * z, 40 * z);
    image(hospitalimg, (250 - xscroll + xselscroll)*z, (550 - yscroll)*z, 60 * z, 40 * z);
    push();
        fill(170);
        rect((330 - xscroll + xselscroll)*z,(550 - yscroll)*z, 60 * z, 40 * z);
    pop();
    switch (selected){
        case Hus:
            push;
                fill(170, 240, 30, 100);
                rect((10 - xscroll + xselscroll)*z, (550 - yscroll)*z,60*z,40*z);
                if (mouseY < 500){
                    tint(255,177);
                    image(husimg, x*z0, y*z0, selected.sizex*z0, selected.sizey*z0);
                    tint(255,255);
                }
            pop;
        break;
        case Kontor:
            push;
                fill(170, 240, 30, 100);
                rect((90 - xscroll + xselscroll)*z, (550 - yscroll)*z,60*z,40*z);
                if (mouseY < 500){
                    tint(255,177);
                    image(kontor1img, x*z0, y*z0, selected.sizex*z0, selected.sizey*z0);
                    tint(255,255);
                }
            pop;
        break;
        case Hotel:
            push;
                fill(170, 240, 30, 100);
                rect((170 - xscroll + xselscroll)*z, (550 - yscroll)*z,60*z,40*z);
                if (mouseY < 500){
                    tint(255,177);
                    image(hotel1img, x*z0, y*z0, selected.sizex*z0, selected.sizey*z0);
                    tint(255,255);
                }
            pop;
        break;
        case Hospital:
            push;
                fill(170, 240, 30, 100);
                rect((250 - xscroll + xselscroll)*z, (550 - yscroll)*z,60*z,40*z);
                if (mouseY < 500){
                    tint(255,177);
                    image(hospitalimg, x*z0, y*z0, selected.sizex*z0, selected.sizey*z0);
                    tint(255,255);
                }
            pop;
        break;
        case Vej:
            push;
                fill(170, 240, 30, 100);
                rect((330 - xscroll + xselscroll)*z, (550 - yscroll)*z,60*z,40*z);
                if (mouseY < 500){
                    fill(122, 121, 121, 177);
                    if (vej1 == 0){
                        rect(x*z0, y*z0, z0, z0);
                    } else {
                        if (((vej1.x - x)**2)**0.5 > ((vej1.y - y)**2)**0.5){
                            if (vej1.x > x){
                                rect(x * z0, vej1.y  * z0, z0 * (vej1.x - x + 1), z0)
                            } else {
                                rect(vej1.x * z0, vej1.y  * z0, z0 * (x - vej1.x + 1), z0)
                            }
                        } else {
                            if (vej1.y > y){
                                rect(vej1.x * z0, y * z0, z0 , (vej1.y - y + 1) * z0)
                            } else {
                                rect(vej1.x * z0, vej1.y * z0, z0 , (y - vej1.y + 1) * z0)
                            }
                        }
                    }
                }
            pop;
        break;
    }
    
    if (mouseY>500){
        if (mouseX - xselscroll >= 10 && mouseX - xselscroll <= 70 && mouseY >= 540){
            showStats(Hus);
        } else if (mouseX - xselscroll >= 90 && mouseX - xselscroll <= 150 && mouseY >= 540){
            showStats(Kontor);
        } else if (mouseX - xselscroll >= 170 && mouseX - xselscroll <= 230 && mouseY >= 540){
            showStats(Hotel);
        } else if (mouseX - xselscroll >= 250 && mouseX - xselscroll <= 310 && mouseY >= 540){
            showStats(Hospital);
        } 
    }
}

function showStats(KK) {
    fill(100);
    rect(mouseX*z - xscroll, (mouseY-120)*z - yscroll, 120*z, 120*z);
    KK.display(mouseX, mouseY-120);

}

function mouseClicked() {
    let x = floor((mouseX-xscroll)/zoom);
    let y = floor((mouseY-yscroll)/zoom);
    if (mouseY>500){
        if (mouseX - xselscroll >= 10 && mouseX - xselscroll <= 70 && mouseY >= 540){
            selected = Hus;
            selectedarray = buildings.huse;
        } else if (mouseX - xselscroll >= 90 && mouseX - xselscroll <= 150 && mouseY >= 540){
            selected = Kontor;
            selectedarray = buildings.kontorer;
        } else if (mouseX - xselscroll >= 170 && mouseX - xselscroll <= 230 && mouseY >= 540){
            selected = Hotel;
            selectedarray = buildings.hoteller;
        } else if (mouseX - xselscroll >= 250 && mouseX - xselscroll <= 310 && mouseY >= 540){
            selected = Hospital;
            selectedarray = buildings.hospitaler;
        } else if (mouseX - xselscroll >= 330 && mouseX - xselscroll <= 390 && mouseY >= 540){
            selected = Vej;
            selectedarray = buildings.veje;
        }
    } else {
        if (grid[x][y] == false){
            if (selected != Vej){
                if (Room(x,y,selected) && selected.price <= money){
                    buildings.constructionsite.push(new Constructionsite(x, y, selected, selectedarray));
                    money -= selected.price;
                }
            } else {
                if (vej1 == 0){
                    vej1 = {x: x,y: y};
                } else {
                    let roadSizeX = 1;
                    let roadSizeY = 1;
                    if (vej1.x - x > 0){
                        roadSizeX = 1 + vej1.x - x;
                    } else {
                        roadSizeX = 1 + x - vej1.x;
                    }
                    if (vej1.y - y > 0){
                        roadSizeY = 1 + vej1.y - y;
                    } else {
                        roadSizeY = 1 + y - vej1.y;
                    }
                    //print(roadSizeY);
                    if (roadSizeX >= roadSizeY && money >= selected.price * roadSizeX){
                        for (let i = 0; i < roadSizeX; i++){
                            if (vej1.x < x){
                                buildings.constructionsite.push(new Constructionsite(vej1.x + i, vej1.y, selected, selectedarray));
                                money -= selected.price;
                            } else {
                                buildings.constructionsite.push(new Constructionsite(x + i, vej1.y, selected, selectedarray));
                                money -= selected.price;
                            }
                        }
                    } else if (money >= selected.price * roadSizeY){
                        for (let i = 0; i < roadSizeY; i++){
                            if (vej1.y < y){
                                buildings.constructionsite.push(new Constructionsite(vej1.x, vej1.y + i, selected, selectedarray));
                                money -= selected.price;
                            } else {
                                buildings.constructionsite.push(new Constructionsite(vej1.x, y + i, selected, selectedarray));
                                money -= selected.price;
                            }                        }
                    }
                    vej1 = 0;
                }
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
