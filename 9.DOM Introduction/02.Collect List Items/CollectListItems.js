//<ul id ="items">
    //<li>first item</li>
    //<li>second item</li>
    //<li>third item</li>
//</ul>

//<textarea id="result">
//</textarea>

//<br>

//<button onclick="extractText()">
//Extract Text</button>

function extractText() {
    let itemNodes = document.querySelectorAll("ul#items li");
    let textarea = document.querySelector("#result");
    for(let node of itemNodes) {
        textarea.value += node.textContent + "\n";
    }
}

function extractText() {
    let lis = document.getElementsByTagName('li');
    let liArray = Array.from(lis);
    let allTexts = liArray.map(x => x.textContent);

    let textarea = document.getElementById('result');
    textarea.value = allTexts.join('\n');
}