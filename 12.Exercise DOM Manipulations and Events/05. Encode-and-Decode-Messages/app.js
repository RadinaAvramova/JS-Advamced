function encodeAndDecodeMessages() {
    //capture buttons 
    const [encodeBtn, decodeBtn] = [...document.querySelectorAll("#main button")];
    const textContainers = [...document.querySelectorAll("#main textarea")];

    //attach events
    encodeBtn.addEventListener("click", encodeAndSend);
    decodeBtn.addEventListener("click", decodeAndRead);

    //helper functions
    function transformText(text, cb) {
        return text.split("").map(cb).join("");
    }
    
    function prevChar(c) {
        return String.fromCharCode(c.charCodeAt(0) - 1);
    }

    function nextChar(c) {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }

    //on click callbacks
    function encodeAndSend(e) {
        textContainers[1].value = transformText(textContainers[0].value, nextChar);
        textContainers[0].value = "";
    }

    function decodeAndRead(e) {
        textContainers[1].value = transformText(textContainers[1].value, prevChar);
    }
}


function encodeAndDecodeMessages() {
    document.getElementById('main').addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') {
            return;
        }
 
        let decodedMessage = document.getElementsByTagName('textarea')[0];
        let encodedMessage = document.getElementsByTagName('textarea')[1];
 
        if (e.target.textContent.includes('Encode')) {
            let message = decodedMessage.value;
            let encoded = [];
            for (let i = 0; i < message.length; i++) {
                let currSymbol = message.charCodeAt(i);
                encoded.push(String.fromCharCode(currSymbol + 1));
            }
            decodedMessage.value = '';
            encodedMessage.value = encoded.join('');
        } else if (e.target.textContent.includes('Decode')) {
            let message = encodedMessage.value;
            let decoded = [];
            for (let i = 0; i < message.length; i++) {
                let currSymbol = message.charCodeAt(i);
                decoded.push(String.fromCharCode(currSymbol - 1));
            }
            encodedMessage.value = decoded.join('');
        }
    });
}

function encodeAndDecodeMessages() {
    let textarea = document.getElementsByTagName('textarea');
    [...document.getElementsByTagName('button')].forEach(b => b.addEventListener('click', message));
 
    function message(btn) {
        if (btn.target.textContent === 'Encode and send it') {
            let encoded = [...textarea[0].value].map(e => String.fromCharCode(e.charCodeAt(0) + 1)).join('');
            textarea[1].value = encoded;
            textarea[0].value = '';
        } else if (btn.target.textContent === 'Decode and read it') {
            let decoded = [...textarea[1].value].map(e => String.fromCharCode(e.charCodeAt(0) - 1)).join('');
            textarea[1].value = decoded;
        }
    }
}

function encodeAndDecodeMessages() {
    let encodeBtn = document.querySelectorAll('button')[0];
    let dencodeBtn = document.querySelectorAll('button')[1];
    let messageInput = document.querySelectorAll('textarea')[0];
    let messageOutput = document.querySelectorAll('textarea')[1];

    encodeBtn.addEventListener('click', encodeMessages);
    dencodeBtn.addEventListener('click', decodeMessages);

    function encodeMessages() {
        let theText = messageInput.value;
        let encodedMessage = '';
        for (let i = 0; i < theText.length; i++) {
            encodedMessage += String.fromCharCode(ascii(`${theText[i]}`) + 1);
        }
        messageInput.value = '';
        messageOutput.value = encodedMessage;
    }

    function decodeMessages() {
        let theText = messageOutput.value;
        let decodedMessage = '';
        for (let i = 0; i < theText.length; i++) {
            decodedMessage += String.fromCharCode(ascii(`${theText[i]}`) - 1);
        }
        messageOutput.value = decodedMessage;
    }

    function ascii(a) {
        return a.charCodeAt(0);
    }
}


function encodeAndDecodeMessages() {
    // capture elements
    const [encodeBtn, decodeBtn] = Array.from(
      document.querySelectorAll("#main button")
    );
    const textContainers = Array.from(document.querySelectorAll("main textarea"));
  
    // attach events
    encodeBtn.addEventListener("click", encodeAndSend);
    decodeBtn.addEventListener("click", decodeAndRead);
  
    // helper functions
    function transform(text, cb) {
      return text.split("").map(cb).join("");
    }
  
    function nextChar(c) {
      return String.fromCharCode(c.charCodeAt(0) + 1);
    }
    function prevChar(c) {
      return String.fromCharCode(c.charCodeAt(0) - 1);
    }
  
    // callback functions
    function encodeAndSend() {
      textContainers[1].value = transform(textContainers[0].value, nextChar);
      textContainers[0].value = "";
    }
  
    function decodeAndRead() {
      textContainers[1].value = transform(textContainers[1].value, prevChar);
    }
  }