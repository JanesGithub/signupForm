function checkIfSignInFilled() {
  if (document.getElementById("inputUsername").value.length === 0 ||
      document.getElementById("inputPassword").value.length === 0) {
        console.log("the form is not filled out");
        return false;
  }
  return true;
}

function enableDisableButton(ButtonId) {
  if (checkIfSignInFilled()) {
    document.getElementById(ButtonId).removeAttribute("disabled");
    console.log("enableSignInButton");
  } else {
    document.getElementById(ButtonId).setAttribute("disabled","disabled");
    console.log("disableSignInButton");
  }
}

document.getElementById("inputUsername").addEventListener('keyup', function(e) {
  enableDisableButton("signIn");
  if (e.keyCode === 13) {
    document.getElementById("inputPassword").focus();
    e.preventDefault();
    return false;
  }
}, false);

document.getElementById("inputPassword").addEventListener('keyup', function(e) {
  enableDisableButton("signIn");
  if (e.keyCode === 13) {
    if (!checkIfSignInFilled()) {
      document.getElementById("alert-signin").className = "alert";
    }
    document.getElementById("inputPassword").blur();
    e.preventDefault();
    return false;
  }
}, false);


//sign up

function validateUsername(username) {
  var letters = /^[a-zA-Z]+[0-9a-zA-Z]{5,}$/;
  var un = document.getElementById(username);
  if (!un.value.match(letters)) {
    un.parentNode.className += " has-error";
    return false;
  } else {
    un.parentNode.className = "col-sm-10";
    return true;
  }
}

function validatePassword(password) {
  var letters = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w]{8,}$/;
  var psw = document.getElementById(password);
  if (!psw.value.match(letters)) {
    psw.parentNode.className += " has-error";
    return false;
  } else {
    psw.parentNode.className = "col-sm-10";
    return true;
  }
}

function validateConfirm(password) {
  var psw = document.getElementById("inputPassword2");
  var confirmPsw = document.getElementById(password);
  if (confirmPsw.value.length > 0 && confirmPsw.value !== psw.value) {
    confirmPsw.parentNode.className += " has-error";
    return false;
  } else {
    confirmPsw.parentNode.className = "col-sm-10";
    return true;
  }
}

document.getElementById('inputUsername2').addEventListener("keyup", function(e) {
  validateUsername("inputUsername2");
});

document.getElementById('inputPassword2').addEventListener("keyup", function(e) {
  validatePassword("inputPassword2");
  validateConfirm("confirmPassword");
});

document.getElementById('confirmPassword').addEventListener("keyup", function(e) {
  validateConfirm("confirmPassword");
});
