function focused() {
    let inputs = document.querySelectorAll('input');
    let inputArr = Array.from(inputs);

    inputArr.forEach(x => {
        x.addEventListener('focus', focusHandler);
        x.addEventListener('blur', blurHandler);
    });

    function focusHandler(e) {
        let element = e.target;
        let div = element.parentElement
        div.classList.add('focused');
    }

    function blurHandler(e) {
        let element = e.target;
        let div = element.parentElement;
        div.classList.remove('focused');
    }
}

function focus() {
    let elements = document.getElementsByTagName('input');
    for (let element of elements) {
        element.addEventListener('focus',focuseElement);
        element.addEventListener('blur', unfocuseElement);
    }

    function focuseElement(event) {
        event.target.parentNode.className = 'focused';
    }

    function unfocuseElement(event) {
        event.target.parentNode.className = '';
    }
}

function focus() {
    let mainDiv = document.getElementsByTagName("div")[0];

    Array.from(mainDiv.getElementsByTagName("input")).forEach(element => {
        element.addEventListener("focus",focus);
    });

    Array.from(mainDiv.getElementsByTagName("input")).forEach(element => {
        element.addEventListener("blur",focusLost);
    });


    function focus(e) {
        let parent = e.target.parentNode;
       parent.classList.add("focused");
    }


    function focusLost(e) {
        let parent = e.target.parentNode;
       parent.classList.remove("focused");
    }

 }

 function focused() {
    let inputElements = document.querySelectorAll('div div input');

    // With assistance from Soft-Uni forum - https://softuni.bg/forum/30364/05-highlight-active
    for (let element of inputElements) {
        element.addEventListener('focus', (e) => {
            // set 'focused' class for click event element
            e.target.parentNode.classList.add('focused');            
        });

        element.addEventListener('blur', (e) => {
            // remove 'focused' class
            e.target.parentNode.classList.remove('focused');
        });
    }
}



