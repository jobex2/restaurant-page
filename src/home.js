import {removeOld, banner} from './supplemental.js'


export default function home(body) {
    //remove all content on page
    removeOld();
    //content
    const content = document.createElement("div");
    content.id = "content";

    //create name banner
    const banner = document.createElement('h1')
    banner.classList.add('name');
    banner.innerText = "Chewy's Gumbo";
    content.append(banner);

    body.append(content);

    //create about section
    let about = document.createElement('div');
    about.classList.add('about');
    about.innerText = "This restaurant is all about the gum baby!";
    content.append(about);

    //create hours
    const hours = document.createElement('div');
    hours.classList.add('hours');
    let h2 = document.createElement('h2')
    h2.innerText = "Hours";
    hours.append(h2);
    let days = ["Monday thru Thursday: 12 - 8pm", "Friday: 12 - 10pm", "Saturday: 12 - 6pm", "Sunday: Closed"];
    const hoursList = document.createElement('ul');
    days.forEach(function(e){
        let li = document.createElement('li');
        li.innerText = e;
        hoursList.append(li);
    });
    hours.append(hoursList);
    content.append(hours);

    //create location
    const location = document.createElement('div');
    location.classList.add('location');
    let h2l = document.createElement('h2')
    h2.innerText = "Location";
    location.append(h2l);
    const address = document.createElement('div');
    address.innerText = "This side of Paradise";
    location.append(address);
    content.append(location);

    body.append(content)

}