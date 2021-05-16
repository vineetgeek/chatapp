const socket = io('http://localhost:8000');


const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");


const append = (message, positon)=>{
          const messageElement = document.createElement('div')
          messageElement.innerText = message;
          messageElement.classList.add('message')
          messageElement.classList.add(positon);
          messageContainer.append(messageElement);


}

const name = prompt('enter your name to join')
socket.emit('new-user-joined', name)

socket.on('user-joined', name =>{
          append(`${name} joined the chat`, 'right')  
})

socket.on('recevie', data =>{
          append(`${data.message}: ${data.user}`, 'left')  
})