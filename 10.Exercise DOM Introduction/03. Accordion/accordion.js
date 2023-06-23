function toggle() {
    // constants
    const MORE = "More";
    const LESS = "Less";
  
    // capture elements
    const buttonSpan = document.querySelector(".button");
    const divWrapperText = document.querySelector("#extra");
  
    // toggle functionality
    // change text of the button
    buttonSpan.textContent = buttonSpan.textContent === MORE ? LESS : MORE;
  
    // hide/show the text
    divWrapperText.style.display =
      divWrapperText.style.display === "none" ||
      divWrapperText.style.display === ""
        ? "block"
        : "none";
  }

  function toggle() {
    let button = document.querySelector(`span.button`);
    let divHiden = document.getElementById(`extra`);
    if (button.textContent == `More`) {
        divHiden.style.display = `block`;
        button.textContent = `Less`;
    } else if (button.textContent == `Less`) {
        divHiden.style.display = `none`;
        button.textContent = `More`;
    }
}

function toggle() {

  let el = document.getElementsByClassName("button")[0]

  let extra = document.getElementById("extra")

  extra.style.display = extra.style.display == "none" ? "block" : "none"

  el.textContent= el.textContent == "Less" ? "More" : "Less"

}

function toggle() {
  let button = document.getElementsByClassName('button')[0];
  let divElement = document.getElementById('extra');

  if(button.textContent === 'More'){
      button.textContent = 'Less';
      divElement.style.display = 'block';
  }else if(button.textContent === 'Less'){
      button.textContent = 'More';
      divElement.style.display = 'none';
  }
}

function toggle() {
  let span = document.querySelector('#accordion div.head span.button');
  let extra = document.getElementById('extra');
  if (span.textContent === 'More') {
    span.textContent = 'Less';
    extra.style.display = 'block';
  } else {
    span.textContent = 'More';
    extra.style.display = 'none';
  }
}