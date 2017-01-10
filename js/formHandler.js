function checkIfSignInFilled() {
  if (document.getElementById("inputUsername").value.length === 0 ||
      document.getElementById("inputPassword3").value.length === 0) {
        console.log("the form is not filled out");
        return false;
  }
  return true;
}

function enableSignInButton() {
  if (document.getElementById("signIn").hasAttribute("disabled") && checkIfSignInFilled()) {
    document.getElementById("signIn").removeAttribute("disabled");
    console.log("enableSignInButton");
  }
}

function disableSignInButton() {
  if (!document.getElementById("signIn").hasAttribute("disabled") && !checkIfSignInFilled()) {
    document.getElementById("signIn").setAttribute("disabled","disabled");
    console.log("disableSignInButton");
  }
}

document.getElementById("inputUsername").addEventListener('keypress', function(e) {
  enableSignInButton();
  if (e.which === 13) {
    document.getElementById("inputPassword3").focus();
    e.preventDefault();
    return false;
  }
}, false);

document.getElementById("inputPassword3").addEventListener('keypress', function(e) {
  enableSignInButton();
  if (e.which === 13) {
    if (!checkIfSignInFilled()) {
      document.getElementById("alert-signin").className = "alert";
    }

    document.getElementById("inputPassword3").blur();
    e.preventDefault();
    return false;
  }
}, false);
