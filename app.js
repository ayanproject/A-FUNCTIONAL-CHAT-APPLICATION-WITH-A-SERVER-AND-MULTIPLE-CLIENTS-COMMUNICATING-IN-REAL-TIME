var stompClient = null;
var username = null;

function setUsername() {
    const input = document.getElementById('username-input');
    username = input.value.trim();
    if (username === '') return alert("Username cannot be empty.");

    document.getElementById('usernameModal').style.display = 'none';
    document.getElementById('chat-container').style.display = 'flex';
    connect();
}

function connect() {
    var socket = new SockJS('http://localhost:8080/ws');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/messages', function (message) {
            const msg = JSON.parse(message.body);
            showMessage(msg);
        });
    });
}

function sendMessage() {
    var messageContent = document.getElementById('message-input').value.trim();
    if (messageContent && stompClient) {
        stompClient.send("/app/chat", {}, JSON.stringify({'username': username, 'content': messageContent}));
        document.getElementById('message-input').value = '';
    }
}

function showMessage(message) {
    const messagesDiv = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    if (message.username === username) {
        messageElement.classList.add('sent');
    } else {
        messageElement.classList.add('received');
    }

    messageElement.textContent = `${message.username}: ${message.content}`;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
