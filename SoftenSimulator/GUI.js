xselscroll = 0;
showpriorities = false;
swap1 = 0;
swap2 = 0;
function GUI(){
    z = z0/zoom
    rect((0 - xscroll)*z, (500 - yscroll)*z, 800*z, 200*z)
    push()
        fill(255)
        textSize(14*z)
        text("Population: " + population.length, (10 - xscroll)*z, (512 - yscroll)*z)
        text("money: " + money, (200 - xscroll)*z, (512 - yscroll)*z)
    pop()
    image(husimg, (10 - xscroll + xselscroll)*z, (550 - yscroll)*z, 60*z, 40*z)
    image(kontor1img, (90 - xscroll + xselscroll)*z, (550 - yscroll)*z, 60 * z, 40 * z)
    image(hotel1img, (170 - xscroll + xselscroll)*z, (550 - yscroll)*z, 60 * z, 40 * z)
    image(hospitalimg, (250 - xscroll + xselscroll)*z, (550 - yscroll)*z, 60 * z, 40 * z)
    fill(255)
    rect((750 - xscroll + xselscroll)*z, (500 - yscroll)*z, 50 * z, 20 * z)
    if (showpriorities){
        rect(100 -xscroll,0 - yscroll,600,700)
        let arbejder = [];
        for (let i = 0; i < prioriteretArbejde.length; i++){
            if (prioriteretArbejde[i].length>0){
                arbejder.push(prioriteretArbejde[i]);
            }
        }
        for (let i = 0; i < arbejder.length; i++){
            switch (arbejder[i][0].constructor.name){
                case "Kontor":
                    image(kontor1img, 370 - xscroll, i*40 + 10 - yscroll, 60*z, 40*z);
                break;
                case "Hospital":
                    image(hospitalimg, 370 - xscroll, i*40 + 10 - yscroll, 60*z, 40*z);
                break;
            }
        }
        if (mouseIsPressed){
            if (!swap1){
                swap1 = arbejder[floor((mouseY-10)/40)]
                print(swap1);
            } else {
                swap2 = arbejder[floor((mouseY-10)/40)]
                for (let i = 0; i < prioriteretArbejde; i++){
                    print(2)
                    print(prioriteretArbejde[i])
                    if(str(prioriteretArbejde[i]) == swap1){
                        print("swapper")
                        prioriteretArbejde[i] = swap2;
                    } else if (prioriteretArbejde[i] == swap2){
                        print("swapper")
                        prioriteretArbejde[i] = swap1;
                    }
                }
            }
        }
    }

    switch (selected){
        case Hus:
            push;
                fill(170, 240, 30, 100);
                rect((10 - xscroll + xselscroll)*z, (550 - yscroll)*z,60*z,40*z);
            pop;
        break;
        case Kontor:
            push;
                fill(170, 240, 30, 100);
                rect((90 - xscroll + xselscroll)*z, (550 - yscroll)*z,60*z,40*z);
            pop;
        break;
        case Hotel:
            push;
                fill(170, 240, 30, 100);
                rect((170 - xscroll + xselscroll)*z, (550 - yscroll)*z,60*z,40*z);
            pop;
        break;
        case Hospital:
            push;
                fill(170, 240, 30, 100);
                rect((250 - xscroll + xselscroll)*z, (550 - yscroll)*z,60*z,40*z);
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
        } else if (mouseX - xselscroll >= 750 && mouseY < 520){
            showpriorities = true;
        }
    } else {
        if (grid[x][y] == false && !showpriorities){
            if (Room(x,y,selected) && selected.price <= money){
              //  selectedarray.push(new selected(x, y, selected));
                buildings.constructionsite.push(new Constructionsite(x, y, selected, selectedarray));
                money -= selected.price;
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