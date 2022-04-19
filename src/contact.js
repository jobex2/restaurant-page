import {removeOld,menuItem} from './supplemental.js'

export default function contact(body) {
    //remove all content on page
    removeOld();

    //content
    const content = document.createElement("div");
    content.id = "content";

    //create name banner
    const banner = document.createElement('h1')
    banner.classList.add('name');
    banner.innerText = "Contact Us";
    content.append(banner);

    menuItem("Location","555 South 123 North, Mount Arayakyak, Kashyyyk", content);
    menuItem("Email","wookieegumbo@superfakeresturant.com", content);

    //set up form
    let form = document.createElement('form');
    form.setAttribute("action", "");
    //name
    let person = document.createElement('input');
    let personLabel = document.createElement('label');
    personLabel.setAttribute('for', 'name');
    personLabel.innerText = 'Name';
    let nameAttributes = {
        name:"name",
        placeholder: "Name",
        autocomplete: "off",
        type: "text"
    }
    Object.keys(nameAttributes).forEach(attr => {
        person.setAttribute(attr, nameAttributes[attr]);
    });

    //email
    let email = document.createElement('input');
    let emailLabel = document.createElement('label');
    emailLabel.innerText = 'Email';
    emailLabel.setAttribute('for', 'email')
    let emailAttributes = {
        name:"enail",
        placeholder: "youremail@example.com",
        type: "email"
    }
    Object.keys(emailAttributes).forEach(attr => {
        email.setAttribute(attr, emailAttributes[attr]);
    })

    //message
    let message = document.createElement('textarea');
    message.setAttribute('name', 'message');
    message.setAttribute('placeholder', 'Your message here');
    let messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message')
    messageLabel.innerText = 'Message';


    //submit
    let submit = document.createElement('input');
    submit.setAttribute("type", "submit");
    

    form.append(personLabel);
    form.append(person);
    form.append(emailLabel);
    form.append(email);
    form.append(messageLabel);
    form.append(message);
    form.append(submit);
    content.append(form);
    body.append(content);
}