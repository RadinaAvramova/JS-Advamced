function addItem() {
    //capture elements
    const inputTextElement = document.getElementById("newItemText");
    const inputValueElement = document.getElementById("newItemValue");
    const menu = document.getElementById("menu");

    //create elements
    const optionElement = document.createElement("option");

    //setup option
    optionElement.textContent = inputTextElement.value;
    optionElement.value = inputValueElement.value;

    //append to menu
    menu.appendChild(optionElement);

    //clear
    inputTextElement.value = "";
    inputValueElement.value = "";
}

function addItem() {
    let text = document.getElementById('newItemText');
    let val = document.getElementById('newItemValue');
    let select = document.getElementById('menu');
    let option = document.createElement('option');
    option.value = val.value;
    option.textContent = text.value;
    select.appendChild(option);
    text.value = '';
    val.value = '';
  }


  function lockedProfile() {
    // constants
    const SHOW_MORE = "Show more";
    const HIDE_IT = "Hide it";
  
    // get elements
    const btnElements = Array.from(document.querySelectorAll("div button"));
  
    // attach event listener
    for (let btn of btnElements) {
      btn.addEventListener("click", show);
    }
  
    // on click event
    function show(e) {
      const divChildren = Array.from(e.target.parentElement.children);
      const locked = divChildren[2].checked;
  
      // if locked - do nothing
      if (locked) {
        return;
      }
  
      // else enable functionality
      const hiddenFieldsElement = e.target.previousElementSibling;
  
      if (e.target.textContent === SHOW_MORE) {
        hiddenFieldsElement.style.display = "inline";
        e.target.textContent = HIDE_IT;
        return;
      }
  
      hiddenFieldsElement.style.display = "";
      e.target.textContent = SHOW_MORE;
    }
  }
