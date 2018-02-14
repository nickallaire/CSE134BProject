window.onload = function() {
    startup()
}

function startup() {
    // allow the user to hit enter to submit a chat message
    document.getElementById("message").addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("submit-message-button").click();
        }   
    });
    // populate the chatbox with chat history
    populateChatBox()
}

function populateChatBox() {
    messages = JSON.parse(window.sessionStorage.getItem("messages"))
    if(messages == null) return;
    for (let i = 0; i < messages.length; i++) {
        addEntry(messages[i])
    }
}

function alterChatbox() {
    var chat = document.getElementById('chat');
    var chatMessage = document.getElementById('chat-message');
    var chatContent = document.getElementById('chat-content');
    var chatButton = document.getElementById('chat-button');

    if (chatMessage.style.display === "none") {
        chatMessage.style.display = "block";
        chatContent.style.display = "block";
        chatButton.style.bottom = "240px";
    } else {
        chatMessage.style.display = "none";
        chatContent.style.display = "none";
        chatButton.style.bottom = "0px";
    }
}

function sendMessage() {
    message = document.getElementById("message").value
    // no message entries stored, create a new one
    if(window.sessionStorage.getItem("messages") == null) {
        messages = []
    } else {
        messages = JSON.parse(window.sessionStorage.getItem("messages"))
    }
    // append the message to the list
    messages.push(message)
    window.sessionStorage.setItem("messages", JSON.stringify(messages))

    addEntry(message)
}

function addEntry(message) {
    var li = document.createElement("li");
    var t = document.createTextNode(message);    
    li.appendChild(t);
    document.getElementById("messages-list").appendChild(li);
    document.getElementById("message").value = ""
    updateScroll();
}

function updateScroll(){
    var element = document.getElementById("chat-message");
    element.scrollTop = element.scrollHeight;
}



