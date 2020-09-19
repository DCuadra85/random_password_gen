// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

for (var i= 0; i < passwordText; i++) {
  
}

var valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+ "

var userPasswordLength = 0
while (userPasswordLength < 8 || userPasswordLength > 128) {

  var userPasswordLengthInput = prompt("What is the password length?")
  ​
      if (isNaN(userPasswordLengthInput)) {
          alert('Please enter an number.')
  ​
          continue;
      }
      userPasswordLength = parseInt(userPasswordLengthInput)

      if (userPasswordLength < 8 || userPasswordLength > 128) {
        alert('Please enter a password length from 8-128 characters.')

        continue;
      }

      if (userCaps = false && userLowercase = false && userNumbers = false && userSymbols = false) {
      alert ("You must choose at least one prompt to generate a password.")
      }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);