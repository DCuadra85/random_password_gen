// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+ "

for (var i= 0; i < passwordText; i++) {
  userPasswordLength = password + valueChar.charAt(Math.floor(Math.random() * Math.floor(valueChar.length - 1)))
}

var userPasswordLength = 0
while (userPasswordLength < 8 || userPasswordLength > 128) {

  var userPasswordLengthInput = prompt("What is the password length?")
  ​
      if (isNaN(userPasswordLengthInput)) {
          alert('Please enter a number.')
  ​
          continue;
      }
      userPasswordLength = parseInt(userPasswordLengthInput)

      if (userPasswordLength < 8 || userPasswordLength > 128) {
        alert('Please enter a password length from 8-128 characters.')

        continue;
      }

  var userLowercase = confirm ("Does the password have lower case?");
  var userCaps = confirm ("Does the password have capitals?");
  var userNumbers = confirm ("Does the password have numbers?");
  var userSymbols = confirm("Does the password have special characters?");

      if (userCaps = true && userLowercase = true && userNumbers = true && userSymbols = true){
        valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+ ";
      }

      else if (userCaps = true && userLowercase = true && userNumbers = true && userSymbols = false){
        valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
      }

      else if (userCaps = true && userLowercase = true && userNumbers = false && userSymbols = false){
        valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      }

      else if (userCaps = true && userLowercase = false && userNumbers = false && userSymbols = false){
        valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }

      else if (userCaps = true && userLowercase = false && userNumbers = true && userSymbols = false){
        valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
      }

      else if (userCaps = true && userLowercase = false && userNumbers = false && userSymbols = true){
        valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+ ";
      }

      
  

      else if (userCaps = false && userLowercase = false && userNumbers = false && userSymbols = false) {
      alert ("You must choose at least one prompt to generate a password.")
      }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);