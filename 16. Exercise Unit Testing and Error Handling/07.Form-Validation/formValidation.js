function validate() {
    document.querySelector("#submit").type = "button";
    document.querySelector("#company").addEventListener("change", (e) => {
      console.log(e.target);
      if (document.querySelector("#company").checked) {
        document.querySelector("#companyInfo").style.display = "block";
      } else {
        document.querySelector("#companyInfo").style.display = "none";
      }
    });
   
    document.querySelector("#submit").addEventListener("click", (e) => {
      let validOut = [];
      let userName = document.querySelector("#username");
      let email = document.querySelector("#email");
      let passWord = document.querySelector("#password");
      let confirmPass = document.querySelector("#confirm-password");
      let checkBox = document.querySelector("#company");
      let userTest = /^[A-Za-z0-9]{3,20}$/;
      let emailTest = /^[^@.]+@[^@]*\.[^@]*$/;
      let passTest = /^[\w]{5,15}$/;
   
      //console.log(checkBox.checked);
   
      if (userTest.exec(userName.value) === null) {
        userName.style.borderColor = "red";
        validOut.push(false);
      } else {
        userName.style.borderColor = "";
        validOut.push(true);
      }
   
      if (emailTest.exec(email.value) === null) {
        email.style.borderColor = "red";
        validOut.push(false);
      } else {
        email.style.borderColor = "";
        validOut.push(true);
      }
   
      if (
        passWord.value === confirmPass.value &&
        passTest.exec(confirmPass.value) != null &&
        passTest.exec(passWord.value) != null
      ) {
        confirmPass.style.borderColor = "";
        passWord.style.borderColor = "";
        validOut.push(true);
      } else {
        confirmPass.style.borderColor = "red";
        passWord.style.borderColor = "red";
        validOut.push(false);
      }
   
      if (checkBox.checked) {
        let company = document.querySelector("#companyNumber");
        if (company.value < 1000 || company.value > 9999) {
          company.style.borderColor = "red";
          validOut.push(false);
        } else {
          company.style.borderColor = "";
          validOut.push(true);
        }
      }
   
      if (!validOut.includes(false)) {
        document.querySelector("#valid").style.display = "block";
      } else {
        document.querySelector("#valid").style.display = "none";
      }
    });
  }

  function solve(){
 
    let isCompany = false;
    setEventHandlers();
 
 
    function setEventHandlers() {
        $("#registerForm").submit(function(e) {
            e.preventDefault();
            ValidateData();
        });
 
        $("#company").on("change", function () {
            if ($("#company").is(":checked")){
                $("#companyInfo").show();
                isCompany = true;
            }
            else{
                $("#companyInfo").hide();
                isCompany = false;
            }
        });
    }
 
    function ValidateData() {
        let formIsValid = true;
 
        let username = $('#username').val();
        if (!username.match(/^[a-zA-Z0-9]{3,20}$/)){
            $('#username').css('border-color', 'red');
            formIsValid = false;
        }
        else{
            $('#username').css('border', 'none');
        }
 
        let email = $('#email').val();
        if (!email.match(/^.*@.*\..*$/)){
            $('#email').css('border-color', 'red');
            formIsValid = false;
        }
        else{
            $('#email').css('border', 'none');
        }
 
        let password = $('#password').val();
        let confirmPassword = $('#confirm-password').val();
 
        console.log(password);
        console.log(confirmPassword);
 
        if (!password.match(/^[\w]{5,15}$/)){
            $('#password').css('border-color', 'red');
            $('#confirm-password').css('border-color', 'red');
            formIsValid = false;
        }
        else{
            if (!confirmPassword.match(/^[\w]{5,15}$/) ||
                password != confirmPassword){
                $('#password').css('border-color', 'red');
                $('#confirm-password').css('border-color', 'red');
                formIsValid = false;
            }
            else{
 
                $('#password').css('border', 'none');
                $('#confirm-password').css('border', 'none');
            }
        }
 
        if (isCompany){
            let companyNumber = $("#companyNumber").val();
            if (!companyNumber.match(/^[1-9][0-9]{3}$/)){
                $("#companyNumber").css('border-color', 'red');
                formIsValid = false;
            }
            else{
                $("#companyNumber").css('border', 'none');
            }
        }
 
        console.log(formIsValid);
        if (formIsValid){
            $('#valid').show();
        }
    }
}



function validate() {
  // dictionaries
  const html = {
    companyCheck: document.getElementById("company"),
    submit: document.getElementById("submit"),
    validDiv: document.getElementById("valid"),
    companyInfo: document.getElementById("companyInfo"),
  };

  const inputFields = {
    usersname: document.getElementById("username"),
    email: document.getElementById("email"),
    password: document.getElementById("password"),
    "confirm-password": document.getElementById("confirm-password"),
    companyNumber: document.getElementById("companyNumber"),
  };

  // helper funcs
  const checkLength = (inputValue, lowerLen, greaterLen) =>
    inputValue.length >= lowerLen && inputValue.length <= greaterLen;

  const checkPassword = (inputValue, lowerLen, greaterLen, field) => {
    return (
      checkLength(inputValue, lowerLen, greaterLen) &&
      /^\w+$/g.test(inputValue) &&
      inputValue === inputFields[field].value
    );
  };

  const validate = {
    usersname: (v) => checkLength(v, 3, 20) && /^[a-zA-Z0-9]*$/g.test(v),
    password: (v) => checkPassword(v, 5, 15, "confirm-password"),
    "confirm-password": (v) => checkPassword(v, 5, 15, "password"),
    email: (v) => /^.*@.*\..*$/g.test(v),
    companyNumber: (v, isChecked) => {
      if (isChecked) {
        return v >= 1000 && v <= 9999;
      }

      return true;
    },
  };

  const changeBorder = (isChecked, element) => {
    const style = isChecked ? "border: none" : "border-color: red";
    element.style = style;
  };

  // attach event listeners
  html.companyCheck.addEventListener("change", onChange);
  html.submit.addEventListener("click", onClick);

  // callbacks
  function onChange(e) {
    const displayStyle = e.target.checked === true ? "block" : "none";
    html.companyInfo.style.display = displayStyle;
  }

  function onClick(e) {
    e.preventDefault();

    const isChecked = html.companyCheck.checked;
    let oneInvalid = false;

    Object.entries(inputFields).forEach(([name, valueField]) => {
      const valid = validate[name](valueField.value, isChecked);
      changeBorder(valid, inputFields[name]);

      if (!valid) {
        oneInvalid = true;
      }
    });

    const displayStyled = oneInvalid ? "none" : "block";
    html.validDiv.style.display = displayStyled;
  }
}

const obj = {
  a: 1,
  b: 2,
  c: 3,
  //   key: ?/??
};

obj.a; // 1
obj["a"]; // 1

const keys = ["a", "b", c];
keys.forEach((key) => {
  obj[key] = 4;
});