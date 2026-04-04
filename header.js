let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
    let isSun = themeToggler.classList.toggle('fa-sun');
    if (themeToggler.classList.toggle('fa-moon')) {
        document.body.classList.add('active');
    }
    else {
        document.body.classList.remove('active');
    }
}

const toggleBtn = document.getElementById("theme-messager");
const chatPanel = document.getElementById("chatPanel");
const sendBtn = document.getElementById("sendBtn");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

toggleBtn.addEventListener("click", () => {
    chatPanel.classList.toggle("open");
});

sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    const msg = chatInput.value.trim();
    if (msg === "") return;

    appendMessage("user", msg);
    chatInput.value = "";

    const typingDiv = document.createElement("div");
    typingDiv.className = "chat-message bot typing";
    typingDiv.innerHTML = `<span class="dot-typing"></span>`;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(() => {
        const reply = getBotReply(msg);
        typingDiv.remove();
        appendMessage("bot", reply);
    }, 2500);
}

function appendMessage(sender, text) {
    const div = document.createElement("div");
    div.className = "chat-message " + sender;
    div.innerText = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotReply(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("selam") || msg.includes("merhaba")) {
        return "Merhaba! Nasılsın?";
    } else if (msg.includes("nasılsın")) {
        return "İyiyim, sen nasılsın?";
    } else if (msg.includes("saat kaç")) {
        return "Saat şu an: " + new Date().toLocaleTimeString();
    } else if (msg.includes("görüşürüz")) {
        return "Görüşmek üzere, kendine iyi bak!";
    } else {
        return "Bu konuyu anlayamadım, biraz daha detay verir misin?";
    }
}

