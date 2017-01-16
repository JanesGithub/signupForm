//sign in form
document.getElementById("inputUsername").addEventListener('keyup', function(e) {
  var un = document.getElementById("inputUsername");
  if (un.value.length === 0) {
    un.parentNode.className = "col-sm-10 has-error";
  } else {
    un.parentNode.className = "col-sm-10 has-success";
  }
  enableDisableButton("signIn");
  if (e.keyCode === 13) {
    document.getElementById("inputPassword").focus();
    e.preventDefault();
    return false;
  }
}, false);

document.getElementById("inputPassword").addEventListener('keyup', function(e) {
  var psw = document.getElementById("inputPassword");
  if (psw.value.length === 0) {
    psw.parentNode.className = "col-sm-10 has-error";
  } else {
    psw.parentNode.className = "col-sm-10 has-success";
  }
  enableDisableButton("signIn");
  if (e.keyCode === 13) {
    if (!checkIfFormIsValid("signIn")) {
      document.getElementById("alert-signin").className = "alert";
    }
    document.getElementById("inputPassword").blur();
    e.preventDefault();
    return false;
  }
}, false);


//sign up form

function validateUsername(username) {
  var letters = /^[a-zA-Z]+[0-9a-zA-Z]{5,}$/;
  var un = document.getElementById(username);
  if (!un.value.match(letters)) {
    un.parentNode.className = "col-sm-10 has-error";
    return false;
  } else {
    un.parentNode.className = "col-sm-10 has-success";
    return true;
  }
}

function validatePassword(password) {
  var letters = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w]{8,}$/;
  var psw = document.getElementById(password);
  if (!psw.value.match(letters)) {
    psw.parentNode.className = "col-sm-10 has-error";
    return false;
  } else {
    psw.parentNode.className = "col-sm-10 has-success";
    return true;
  }
}

function validateConfirm(password) {
  var psw = document.getElementById("inputPassword2");
  var confirmPsw = document.getElementById(password);
  if (confirmPsw.value.length > 0 && confirmPsw.value !== psw.value) {
    confirmPsw.parentNode.className = "col-sm-10 has-error";
    return false;
  } else if (confirmPsw.value.length > 0) {
    confirmPsw.parentNode.className = "col-sm-10 has-success";
    return true;
  }
}

document.getElementById('inputUsername2').addEventListener("keyup", function(e) {
  validateUsername("inputUsername2");
  enableDisableButton("signUp");
});

document.getElementById('inputPassword2').addEventListener("keyup", function(e) {
  validatePassword("inputPassword2");
  validateConfirm("confirmPassword");
  enableDisableButton("signUp");
});

document.getElementById('confirmPassword').addEventListener("keyup", function(e) {
  validateConfirm("confirmPassword");
  enableDisableButton("signUp");
});

var signUp = document.getElementById("signUp");
var inputs = Array.prototype.slice.call(signUp.getElementsByTagName("input"));

// inputs.forEach(function(item, i, arr) {
//   item.addEventListener("keypress", function(e) {
//     if (e.which === 13) {
//       }
//   });
//   console.log( i + ": " + item + " (массив:" + arr + ")" );
// });
var i;
for (i = 0; i < inputs.length - 1; i++) {
  inputs[i].onkeypress = function(i) {
    return function(e) {
      if (e.which === 13) {
        console.log(inputs[i]);
        inputs[i + 1].focus();
      }
    };
  }(i);
}
// inputs.foreach(addEventListener("keypress", function(e) {
//   if (e.which === 13) {
//     this.parentNode.parentNode.nextSibling.lastChild.firstChild.focus();
//   }
// }));

function checkIfFormIsValid(formId) {
  var form = document.getElementById(formId);
  var numberOfFields = (formId === "signIn") ? 2 : 3;
  console.log(form.getElementsByClassName("has-success"));
  if (form.getElementsByClassName("has-success").length < numberOfFields) {
    return false;
  }
  return true;
}

function enableDisableButton(formId) {
  var formIsValid = checkIfFormIsValid(formId);
  if (formIsValid) {
    document.getElementById(formId+"Button").removeAttribute("disabled");
  } else {
    document.getElementById(formId+"Button").setAttribute("disabled","disabled");
  }
}
