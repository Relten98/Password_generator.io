var generateBtn = document.querySelector("#generate");
let passLength = document.getElementById("passLength").value;

let numberSwitch = document.getElementById("numberSwitch");
let symbolSwitch = document.getElementById("symbolSwitch");
var valid = false

let x = 0

var useNumbers = false
var useCharacters = false

//// Look ma, imma codin' like a champ



function generatePassword() {
  var length = x;
  /// HAHAHAHA TAKE THAT, BROKEN CODE!!!
  charlist = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZc"
  if (useCharacters = true) {
    charlist + "!@#$%^&*())_+=-';:/?.>,<~`,"
  }
  if (useNumbers = true) {
    charlist + "0123456789"
}

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
// Write password to the #password input, will not write if password is invalid.
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
symbolSwitch.addEventListener('change', function () {
  if (checkbox.checked) {
  var useCharacters = true
    console.log('Numbers');
  } else {
    var useCharacters = true
    console.log('No Numbers');
  };

numberSwitch.addEventListener('change', function () {
if (checkbox.checked) {
var useNumbers = true
  console.log('Numbers');
} else {
  var useNumbers = true
  console.log('No Numbers');
}