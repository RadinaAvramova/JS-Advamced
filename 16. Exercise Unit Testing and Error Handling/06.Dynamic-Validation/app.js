function validate() {
    let reg = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
    let inputElement = document.getElementById('email');
    let value = inputElement.value;

    inputElement.addEventListener('change',checkEmail);

    function checkEmail(event) {
        if(reg.test(event.target.value)){
            event.target.removeAttribute('class');
            return;
        }

        event.target.className = 'error';
    }
 }


 function validate() {
    // capture events
    const emailInput = document.getElementById("email");
  
    // attach events
    emailInput.addEventListener("change", onChange);
  
    // callbacks
    function onChange(e) {
      const { target } = e;
      const targetStringValue = target.value;
  
      const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
      const isRemoveOperation = pattern.test(targetStringValue);
  
      const operation = isRemoveOperation ? "remove" : "add";
      target.classList[operation]("error");
    }
  }