var generateBtn = document.querySelector("#generate");
var x = document.getElementById("passlength").value;

//// Look ma, imma codin' like a champ

function generatePassword() {
  /// WHY ISN'T THIS WORKING?!?!?!?!
  console.log("My value is" + x);
  charlist = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*())_+=-';:/?.>,<~`,"

  var length = x,

    retVal = "";

  for (var i = 0, n = charlist.length; i < length; ++i) {

    retVal += charlist.charAt(Math.floor(Math.random() * n));

  }

  return retVal;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
