var generateBtn = document.querySelector("#generate");
let passLength = document.getElementById("passLength").value;
var valid = false
let x = 0
//// Look ma, imma codin' like a champ


function generatePassword() {
  var length = x;
  /// WHY ISN'T THIS WORKING?!?!?!?!
  charlist = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*())_+=-';:/?.>,<~`,"

  retVal = "";

  for (var i = 0, n = charlist.length; i < length; ++i) {

    retVal += charlist.charAt(Math.floor(Math.random() * n));

  }

  return retVal;

}


function inputter() {
  x = this.value;
  console.log("My value is" + x);
  return;
}


/// Checks to make sure password is valid.
function validator() {
  x = this.value;
  console.log("My value is" + x);
  if (x < 8) {
    valid = false;
    alert("Password cannot be shorter than 8 characters.");
    return;
  }
  else if (x > 128) {
    valid = false;
    alert("Password cannot be longer than 128 characters");
    return;
  }
  else {
    valid = true;
    return;
  }
}
// Write password to the #password input
function writePassword() {
  if (valid == true) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  } else {
    return;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.getElementsByName("passLength")[0].addEventListener("change", validator);
