
import home from './home.js'

//get element from html
const body = document.body;



//add content to dev

//header
function Fheader (body) {
    const header= document.createElement("div");
    header.id = "header";

    //array of of nav items
    let nav = ["Home", "Menu", "Contact"];
    //create list of items 
    let navList = document.createElement('ul');
    let count = 0;
    nav.forEach(function(e){
        count++;
        let li = document.createElement('li');
        li.innerText = e;
        if(count == 1){
            li.addEventListener("click", function(){
                home(body);
                Ffooter(body);
            });
        }
        navList.append(li);
    });
    //add to header
    header.append(navList);
    body.append(header);
}

//create footer;
function Ffooter (body) {
    const footer= document.createElement("div");
    footer.id = "footer";
    const tag = document.createElement("div");
    tag.innerText = "Made by JoBeX2 for The Odin Project";
    footer.append(tag);
    body.append(footer);
}



//add to page
Fheader(body);
home(body);
Ffooter(body);
