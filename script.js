function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatbox = document.getElementById('chatbox');
    const message = userInput.value;

    if (message.trim() === '') {
        return;
    }

    const messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';

    const userAvatar = document.createElement('img');
    userAvatar.src = 'img/user.png';
    userAvatar.className = 'avatar';

    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.textContent = message;

    messageContainer.appendChild(userMessage);
    messageContainer.appendChild(userAvatar);

    chatbox.appendChild(messageContainer);

    userInput.value = '';

    chatbox.scrollTop = chatbox.scrollHeight;

    setTimeout(() => {
        const botMessageContainer = document.createElement('div');
        botMessageContainer.className = 'message-container';

        const botAvatar = document.createElement('img');
        botAvatar.src = 'img/robot.png'; 
        botAvatar.className = 'avatar';

        const botMessage = document.createElement('div');
        botMessage.className = 'message bot';
        botMessage.textContent = getBotResponse(message);

        botMessageContainer.appendChild(botAvatar);
        botMessageContainer.appendChild(botMessage);

        chatbox.appendChild(botMessageContainer);

        chatbox.scrollTop = chatbox.scrollHeight;
    }, 1000);
}

function getBotResponse(message) {
    
}
