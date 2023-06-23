function lockedProfile() {
    //constants
    const SHOW_MORE = "Show more";
    const HIDE_IT = "Hide it";

    //capture elements
    const btnElements = Array.from(document.querySelectorAll("div button"));
    console.log({ btnElements });

    //attach event listener
    for(const btn of btnElements) {
        btn.addEventListener("click", show);
    }

    //on click functionality
    function show(e) {
        const divChildren = Array.from(e.target.parentElement.children);
        const isLocked = divChildren[2].checked;

        //if is locked - do nothing
        if(isLocked) { 
            return;
        }

        //else enable functionality
        const hiddenFieldElements = e.target.previousElementSibiling;

        //toggling functionality
        if(e.target.textContent === SHOW_MORE) {
            hiddenFieldElements.style.display = "inline";
            e.target.textContent = HIDE_IT;
            return;
        }

        hiddenFieldElements.style.display = "";
        e.target.textContent = SHOW_MORE;
    }

}


function lockedProfile() {
    const btns = [...document.getElementsByTagName('button')];
    btns.forEach(btn => btn.addEventListener('click', showHide));
 
    function showHide(event) {
        const button = event.target;
        const profile = button.parentNode;
        const moreInformation = profile.getElementsByTagName('div')[0];
        const lockStatus = profile.querySelector('input[type="radio"]:checked').value;
 
        if (lockStatus === 'unlock') {
            if (button.textContent === 'Show more') {
                moreInformation.style.display = 'inline-block';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                moreInformation.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }
}

function lockedProfile() {
    const btns = [...document.getElementsByTagName('button')];
    btns.forEach(btn => btn.addEventListener('click', showHide));
 
    function showHide(event) {
        const button = event.target;
        const profile = button.parentNode;
        const moreInformation = profile.getElementsByTagName('div')[0];
        const lockStatus = profile.querySelector('input[type="radio"]:checked').value;
 
        if (lockStatus === 'unlock') {
            if (button.textContent === 'Show more') {
                moreInformation.style.display = 'inline-block';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                moreInformation.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }
}

