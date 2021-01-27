var generateBtn = document.querySelector("#generate");
let passLength = document.getElementById("passLength").value;

var valid = false

let x = 0

var useNumbers = false
var useSymbols = false

//// Look ma, imma codin' like a champ
function ToggleN() {
  let numberSwitch = document.getElementById("numberSwitch").checked;
  if (numberSwitch) {
    var useNumbers = true
    console.log("Using Numbers");
  } else {
    var useNumbers = false
    console.log("NOT using numbers");
  }
};

function ToggleS() {
  let symbolSwitch = document.getElementById("symbolSwitch").checked;
  if (symbolSwitch) {
    var useSymbols = true
    console.log("Using Symbols");
  } else {
    var useSymbols = false
    console.log("NOT using symbols");
  }
};




function generatePassword() {
  var length = x;
  /// HAHAHAHA TAKE THAT, BROKEN CODE!!!
  if (useSymbols = true) {
  var charlist = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*())_+=-';:/?.>,<~`,"

  }
  if (useNumbers = true) {
    charlist = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  }
  if (useNumbers, useSymbols = true) {
    charlist = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*())_+=-';:/?.>,<~`,0123456789";
  }
  else {
    charlist = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  console.log('Charlist is' + charlist)

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
  ToggleN();
  ToggleS();

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