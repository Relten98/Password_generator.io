var generateBtn = document.querySelector("#generate");

/// Sets a number value based on input from html
var DesiredLength = document.getElementById("properlength").value;

/// Set of values for different responses for a randomized, condescending comment from the generator. 
var snarky = ["Yeah, like you can memorize this.", "Good luck not forgetting this one.", "Not even the NSA is going to remember that password.", "Hopefully you have a pen handy", "Nothing screams 'secure' quite like a sticky note attached to the monitor filled with absolute gibberish... eh?", "Hopefully you aren't in a rush when have to input THAT password."]

function snarkList(list){
  return list[Math.floor(Math.random()* list.length)]; 
}

function snark() {
var comment = snarkList(snarky);
alert(comment)
}

//// Look ma, imma codin' like a champ

function generatePassword() {
  var length = DesiredLength,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()1234567890",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
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
