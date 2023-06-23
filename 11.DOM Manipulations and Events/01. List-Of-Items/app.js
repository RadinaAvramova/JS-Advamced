function addItem() {
    let text = document.getElementById('newItemText').value;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    document.getElementById("items").appendChild(li);
    //clearing the input
    document.getElementById('newItemText').value = '';
}

function addItem() {
    console.log('here');
    let input = document.getElementById('newItemText');
    let value = input.value;

    let ul = document.getElementById('items');
    let newLi = document.createElement('li');
    newLi.textContent = value;
    ul.appendChild(newLi);
}

function addItem() {
    let newLi = document.createElement('li');
    newLi.textContent = document.getElementById('newItemText').value;
    document.getElementById('items').appendChild(newLi);
    document.getElementById('newItemText').value = "";
}