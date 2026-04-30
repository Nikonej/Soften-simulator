xselscroll = 0;
showpriorities = false;
vej1 = 0;
Vej2 = 0;


function GUI(){
    let x = floor((mouseX-xscroll)/zoom);
    let y = floor((mouseY-yscroll)/zoom);
    z = z0/zoom
    rect((0 - xscroll)*z, (500 - yscroll)*z, 800*z, 200*z);
    rect((660 - xscroll)*z, (0 - yscroll)*z, 200*z, 120*z);
    push();
        fill(255);
        textSize(14*z);
        text("Population: " + population.length, (10 - xscroll)*z, (512 - yscroll)*z);
        text("money: " + floor(money), (150 - xscroll)*z, (512 - yscroll)*z);
        text("workers: " + workers, (300 - xscroll)*z, (512 - yscroll)*z);
        text("jobs: " + jobs, (450 - xscroll)*z, (512 - yscroll)*z);
        text("happiness: " + floor(happiness*100) + "%", (600 - xscroll)*z, (512 - yscroll)*z);

        text("Satisfaction:", (690 - xscroll)*z, (20 - yscroll)*z);
        text("Health: " + floor(lastSatisfaction.health) + "/" + needs.health, (675 - xscroll)*z, (40 - yscroll)*z);
        text("Natur: " + floor(lastSatisfaction.natur) + "/" + needs.natur, (675 - xscroll)*z, (60 - yscroll)*z);
        text("Education: " + floor(lastSatisfaction.education) + "/" + needs.education, (675 - xscroll)*z, (80 - yscroll)*z);
        text("Safety: " + floor(lastSatisfaction.safety) + "/" + needs.safety, (675 - xscroll)*z, (100 - yscroll)*z);

    pop();
    image(husimg, (10 - xscroll + xselscroll)*z, (550 - yscroll)*z, 60*z, 40*z);
    image(kontor1img, (90 - xscroll + xselscroll)*z, (550 - yscroll)*z, 60 * z, 40 * z);
    image(hotel1img, (170 - xscroll + xselscroll)*z, (550 - yscroll)*z, 60 * z, 40 * z);
    image(hospitalimg, (250 - xscroll + xselscroll)*z, (550 - yscroll)*z, 60 * z, 40 * z);
    image(parkimg, (970 - xscroll + xselscroll)*z, (550 - yscroll)*z, 60 * z, 40 * z);
    image(skoleimg, (410 - xscroll + xselscroll)*z, (550 - yscroll)*z, 60 * z, 40 * z);
    image(politiimg, (490 - xscroll + xselscroll)*z, (550 - yscroll)*z, 60 * z, 40 * z);
    image(kontor2img, (570 - xscroll + xselscroll)*z, (550 - yscroll)*z, 60 * z, 40 * z);
    image(fabrikimg, (650 - xscroll + xselscroll)*z, (550 - yscroll)*z, 60 * z, 40 * z);
    image(ikeaimg, (730 - xscroll + xselscroll)*z, (550 - yscroll)*z, 60 * z, 40 * z);
    image(bankimg, (810 - xscroll + xselscroll)*z, (550 - yscroll)*z, 60 * z, 40 * z);
    image(wtcimg, (890 - xscroll + xselscroll)*z, (550 - yscroll)*z, 60 * z, 40 * z);
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
        case fabrik:
            push;
                fill(170, 240, 30, 100);
                rect((650 - xscroll + xselscroll)*z, (550 - yscroll)*z,60*z,40*z);
                if (mouseY < 500){
                    tint(255,177);
                    image(fabrikimg, x*z0, y*z0, selected.sizex*z0, selected.sizey*z0);
                    tint(255,255);
                }
            pop;
        break;
        case Storkontor:
            push;
                fill(170, 240, 30, 100);
                rect((570 - xscroll + xselscroll)*z, (550 - yscroll)*z,60*z,40*z);
                if (mouseY < 500){
                    tint(255,177);
                    image(kontor2img, x*z0, y*z0, selected.sizex*z0, selected.sizey*z0);
                    tint(255,255);
                }
            pop;
        break;
        case Park:
            push;
                fill(170, 240, 30, 100);
                rect((970 - xscroll + xselscroll)*z, (550 - yscroll)*z,60*z,40*z);
                if (mouseY < 500){
                    tint(255,177);
                    image(parkimg, x*z0, y*z0, selected.sizex*z0, selected.sizey*z0);
                    tint(255,255);
                }
            pop;
        break;
        case Skole:
            push;
                fill(170, 240, 30, 100);
                rect((410 - xscroll + xselscroll)*z, (550 - yscroll)*z,60*z,40*z);
                if (mouseY < 500){
                    tint(255,177);
                    image(skoleimg, x*z0, y*z0, selected.sizex*z0, selected.sizey*z0);
                    tint(255,255);
                }
            pop;
        break;
        case Politi:
            push;
                fill(170, 240, 30, 100);
                rect((490 - xscroll + xselscroll)*z, (550 - yscroll)*z,60*z,40*z);
                if (mouseY < 500){
                    tint(255,177);
                    image(politiimg, x*z0, y*z0, selected.sizex*z0, selected.sizey*z0);
                    tint(255,255);
                }
            pop;
        break;
        case IKEA:
            push;
                fill(170, 240, 30, 100);
                rect((730 - xscroll + xselscroll)*z, (550 - yscroll)*z,60*z,40*z);
                if (mouseY < 500){
                    tint(255,177);
                    image(ikeaimg, x*z0, y*z0, selected.sizex*z0, selected.sizey*z0);
                    tint(255,255);
                }
            pop;
        break;
        case Bank:
            push;
                fill(170, 240, 30, 100);
                rect((810 - xscroll + xselscroll)*z, (550 - yscroll)*z,60*z,40*z);
                if (mouseY < 500){
                    tint(255,177);
                    image(bankimg, x*z0, y*z0, selected.sizex*z0, selected.sizey*z0);
                    tint(255,255);
                }
            pop;
        break;
        case Wtc:
            push;
                fill(170, 240, 30, 100);
                rect((890 - xscroll + xselscroll)*z, (550 - yscroll)*z,60*z,40*z);
                if (mouseY < 500){
                    tint(255,177);
                    image(wtcimg, x*z0, y*z0, selected.sizex*z0, selected.sizey*z0);
                    tint(255,255);
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
        } else if (mouseX - xselscroll >= 330 && mouseX - xselscroll <= 390 && mouseY >= 540){
            showStats(Vej);
        } else if (mouseX - xselscroll >= 660 && mouseX - xselscroll <= 720 && mouseY >= 540){
            showStats(fabrik);
        } else if (mouseX - xselscroll >= 570 && mouseX - xselscroll <= 630 && mouseY >= 540){
            showStats(Storkontor);
        } else if (mouseX - xselscroll >= 970 && mouseX - xselscroll <= 1030 && mouseY >= 540){
            showStats(Park);
        } else if (mouseX - xselscroll >= 410 && mouseX - xselscroll <= 470 && mouseY >= 540){
            showStats(Skole);
        } else if (mouseX - xselscroll >= 490 && mouseX - xselscroll <= 550 && mouseY >= 540){
            showStats(Politi);
        } else if (mouseX - xselscroll >= 730 && mouseX - xselscroll <= 790 && mouseY >= 540){
            showStats(IKEA);
        } else if (mouseX - xselscroll >= 810 && mouseX - xselscroll <= 870 && mouseY >= 540){
            showStats(Bank);
        } else if (mouseX - xselscroll >= 890 && mouseX - xselscroll <= 950 && mouseY >= 540){
            showStats(Wtc);
        }
    }
}

function showStats(KK) {
    fill(100);
    rect(mouseX*z - xscroll*z, (mouseY-120)*z - yscroll*z, 120*z, 120*z);
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
        } else if (mouseX - xselscroll >= 660 && mouseX - xselscroll <= 720 && mouseY >= 540){
            selected = fabrik;
            selectedarray = buildings.fabrikker;
        } else if (mouseX - xselscroll >= 570 && mouseX - xselscroll <= 630 && mouseY >= 540){
            selected = Storkontor;
            selectedarray = buildings.storKontore;
        } else if (mouseX - xselscroll >= 970 && mouseX - xselscroll <= 1030 && mouseY >= 540){
            selected = Park;
            selectedarray = buildings.parker;
        } else if (mouseX - xselscroll >= 410 && mouseX - xselscroll <= 470 && mouseY >= 540){
            selected = Skole;
            selectedarray = buildings.skoler;
        } else if (mouseX - xselscroll >= 490 && mouseX - xselscroll <= 550 && mouseY >= 540){
            selected = Politi;
            selectedarray = buildings.politier;
        } else if (mouseX - xselscroll >= 730 && mouseX - xselscroll <= 790 && mouseY >= 540){
            print("ikeas");
            selected = IKEA;
            selectedarray = buildings.IKEAer;
        } else if (mouseX - xselscroll >= 810 && mouseX - xselscroll <= 870 && mouseY >= 540){
            selected = Bank;
            selectedarray = buildings.banke;
        } else if (mouseX - xselscroll >= 890 && mouseX - xselscroll <= 950 && mouseY >= 540){
            selected = Wtc;
            selectedarray = buildings.wtcer;
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
                    let placeable = true;
                    if (roadSizeX > roadSizeY){
                        for (let i = 0; i < roadSizeX; i++){
                            if (vej1.x < x){
                                if (grid[vej1.x + i][vej1.y]){
                                    placeable = false;
                                    break;
                                }
                            } else{
                                if (grid[vej1.x - i][vej1.y]){
                                    placeable = false;
                                    break;
                                }
                            }
                        }
                    } else {
                        for (let i = 0; i < roadSizeY; i++){
                            if (vej1.y < y){
                                if (grid[vej1.x][vej1.y + i]){
                                    placeable = false;
                                    break;
                                }
                            } else{
                                if (grid[vej1.x][vej1.y - i]){
                                    placeable = false;
                                    break;
                                }
                            }
                        }
                    }
                    if (roadSizeX >= roadSizeY && money >= selected.price * roadSizeX && placeable){
                        for (let i = 0; i < roadSizeX; i++){
                            if (vej1.x < x){
                                buildings.constructionsite.push(new Constructionsite(vej1.x + i, vej1.y, selected, selectedarray));
                                money -= selected.price;
                            } else {
                                buildings.constructionsite.push(new Constructionsite(x + i, vej1.y, selected, selectedarray));
                                money -= selected.price;
                            }
                        }
                    } else if (roadSizeY > roadSizeX && money >= selected.price * roadSizeY && placeable){
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
