"use strict";

let chatButton = document.getElementById('chat-button');
let chatWindow = document.getElementById('chat-window');
let chatClose = document.getElementById('chat-close');
let linkedinOption = document.getElementById('linkedinOption');
let mailOption = document.getElementById('mailOption');
let cvOption = document.getElementById('cvOption');
let projectsOption = document.getElementById('projectsOption');
let userChatContent = document.getElementById('userChatContent');

let buttonOptions = [
    linkedinOption,
    mailOption,
    cvOption,
    projectsOption,
]

// Open the chat function
chatButton.addEventListener('click', function() {
    chatWindow.style.display = 'block'; // Shows chat window
    chatButton.style.display = 'none'; // Hides opening-button
});

//  Close the chat function
chatClose.addEventListener('click', function() {
    /*
    When windows closes, the options appear again if
    user wants to chat again
    */
    makeOptionsAppear(buttonOptions);    
    chatWindow.style.display = 'none'; // Closes chat window
    chatButton.style.display = 'block'; // Shows opening-button
});

function chatLinkedinOption (){
    userChatContent.innerHTML = '<p>Sure! Here you have it</p><a href="https://www.linkedin.com/in/miguelangelguaita/" title="My Linkedin">My Linkedin</a>';
    makeOptionsDisappear(buttonOptions);
}
function chatMailOption (){
    userChatContent.innerHTML = '<p>Okay! Send me an email</p><a href="mailto:miguelanguai@gmail.com?subject=Contact%20From%20Web%20Portfolio&body=Hi%20I%20think%20your%20website%20is%20interesting" title="Send me an email">Mail me</a>';
    makeOptionsDisappear(buttonOptions);
}
function chatCvOption (){
    userChatContent.innerHTML = '<p>Great! You can download my CV from this link: <a href="assets/pdf/miguelAngelGuaitaCV.pdf" download="resume-MiguelAngel-Guaita.pdf" title="My updated CV">Download CV (PDF, 164 kB)</a></p>';   
    makeOptionsDisappear(buttonOptions);
}
function chatProjectsOption (){
    userChatContent.innerHTML = `<p>Sure! Let's guide you to the projects I did in the past</p> <p> <a href="#projects" title="My Projects">My Projects</a></p>`;
    makeOptionsDisappear(buttonOptions);
}

function makeOptionsDisappear(buttonOptions){
    buttonOptions.forEach(element => {
        element.style.display='none';    
    });
    /*As options disappear, even if the window for chat is closed,
    it's needed to make them appear again if the windows is closed,
    in order to start chatting again if the user wants to. So, 
    I need to create a makeOptionsAppear */
}

function makeOptionsAppear(buttonOptions){
    buttonOptions.forEach(element => {
        element.style.display='block';    
    });
    userChatContent.innerHTML="<p></p>"
}

linkedinOption.addEventListener('click', chatLinkedinOption);
mailOption.addEventListener('click', chatMailOption);
cvOption.addEventListener('click', chatCvOption);
projectsOption.addEventListener('click', chatProjectsOption);


