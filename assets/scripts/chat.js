let chatButton = document.getElementById('chat-button');
let chatWindow = document.getElementById('chat-window');
let chatClose = document.getElementById('chat-close');
let linkedinOption = document.getElementById('linkedinOption');
let mailOption = document.getElementById('mailOption');
let cvOption = document.getElementById('cvOption');
let projectsOption = document.getElementById('projectsOption');
let chatContent = document.getElementById('chatContent');

// Open the chat function
chatButton.addEventListener('click', function() {
    chatWindow.style.display = 'block'; // Shows chat window
});

//  Close the chat function
chatClose.addEventListener('click', function() {
    chatWindow.style.display = 'none'; // Closes chat window
});

function chatLinkedinOption (){
    chatContent.innerHTML = "<p>Has seleccionado Linkedin.</p>";
}
function chatMailOption (){
    chatContent.innerHTML = "<p>Has seleccionado Mail.</p>";
}
function chatcvOption (){
    chatContent.innerHTML = "<p>Has seleccionado cV.</p>";
}
function chatProjectsOption (){
    chatContent.innerHTML = "<p>Has seleccionado Projects.</p>";
}

linkedinOption.addEventListener('click', chatLinkedinOption);
mailOption.addEventListener('click', chatMailOption);
cvOption.addEventListener('click', chatcvOption);
projectsOption.addEventListener('click', chatProjectsOption);

