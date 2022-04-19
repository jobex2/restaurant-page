function removeOld() {
    let oldContent = document.querySelector("#content");
    if(oldContent){
        oldContent.remove();
    }

    let oldFooter = document.querySelector("#footer");
    if(oldFooter){
        oldFooter.remove();
    }
}

function menuSection(type, content) {

    const section = document.createElement('div');
    section.classList.add('menu-sectionBorder');
    let h2 = document.createElement('h2')
    h2.classList.add('menu-sectionHeader');
    h2.innerText = type;
    section.append(h2);
    content.append(section);
}

function menuItem(name, discription, content) {

    //item container
    const itemContainer= document.createElement('div');
    itemContainer.classList.add('menu-itemContainer');
    //item name
    let h3 = document.createElement('h3')
    h3.classList.add('menu-itemName');
    h3.innerText = name;
    itemContainer.append(h3);
    //item discription
    let discript = document.createElement("div");
    discript.classList.add('menu-itemDiscription');
    discript.innerText = discription;
    itemContainer.append(discript);

    content.append(itemContainer);
}

export {
    removeOld,
    menuSection,
    menuItem
};
