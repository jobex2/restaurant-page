import {removeOld,menuSection,menuItem} from './supplemental.js'

export default function menu(body) {
    //remove all content on page
    removeOld();

    //content
    const content = document.createElement("div");
    content.id = "content";

    //create name banner
    const banner = document.createElement('h1')
    banner.classList.add('name');
    banner.innerText = "Menu";
    content.append(banner);

    menuSection("Beverages", content);
    menuItem("Blue Milk", "The best darn milk you have ever tasted", content);
    menuItem("Wookie Whiskey", "When you need somthing a bit stronger to calm down after a long day in the cockpit", content);
    
    menuSection("Appetizers", content);
    menuItem("Fried Jaw Plant", "When they aren't eating you, try eating them!", content);
    menuItem("Wookie Wambos", "I know you have never heard of them, but they are actually pretty good", content);
    
    menuSection("Entrees", content);
    menuItem("Terentatek Steak", "Cooked to perfection, with just the right amount of spice.", content);
    menuItem("Shi-Shok Salad", "Fresh and crisp, with the shi-shok taste you love", content);
    menuItem("Araykyak Gumbo", "You know you want it, the best gumbo in the Mid Rim", content);

    menuSection("Dessert", content);
    menuItem("Kashyyyk Cake", "Made from the finest locally sourced Wyyyschokk. So good", content);

    body.append(content)
}