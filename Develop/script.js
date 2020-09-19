// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// var valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+ "

var userLowercase = confirm ("Will this password have lower case?");
var userCaps = confirm ("Will this password have capitals?");
var userNumbers = confirm ("Will this password have numbers?");
var userSymbols = confirm("Will this password have special characters?");

var userPasswordLength = 0
while (userPasswordLength < 8 || userPasswordLength > 128) {

  var userPasswordLengthInput = prompt("What is the password length?");
      if (isNaN(userPasswordLengthInput)) {
          alert("Please enter a number.")
          continue;
      }
      userPasswordLength = parseInt(userPasswordLengthInput)

      if (userPasswordLength < 8 || userPasswordLength > 128) {
        alert("Please enter a password length from 8-128 characters.")

          continue;
      }
}

      //need to ask if there is an easier way of doing this
      //tttt
      if ((userCaps === true) && (userLowercase === true) && (userNumbers === true) && (userSymbols === true)){
        var valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+ ";
      }
      //tttf
      else if((userCaps === true) && (userLowercase === true) && (userNumbers === true) && (userSymbols === false)){
        valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
      }
      //ttff
      else if((userCaps === true) && (userLowercase === true) && (userNumbers === false) && (userSymbols === false)){
        valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      }
      //tfff
      else if((userCaps === true) && (userLowercase === false) && (userNumbers === false) && (userSymbols === false)){
        valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      //tfft
      else if((userCaps === true) && (userLowercase === false) && (userNumbers === false) && (userSymbols === true)){
        valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
      }
      //tftf
      else if((userCaps === true) && (userLowercase === false) && (userNumbers === true) && (userSymbols === false)){
        valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+ ";
      }
      //tftt
      else if((userCaps === true) && (userLowercase === false) && (userNumbers === true) && (userSymbols === true)){
        valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
      }
      //ttft
      else if((userCaps === true) && (userLowercase === true) && (userNumbers === false) && (userSymbols === true)){
        valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      }
      //fttt
      else if((userCaps === false) && (userLowercase === true) && (userNumbers === true) && (userSymbols === true)){
        valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      //fftt
      else if((userCaps === false) && (userLowercase === false) && (userNumbers === true) && (userSymbols === true)){
        valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
      }
      //ffft
      else if((userCaps === false) && (userLowercase === false) && (userNumbers === false) && (userSymbols === true)){
        valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+ ";
      }
      //ffff
      else if((userCaps === false) && (userLowercase === false) && (userNumbers === false) && (userSymbols === false)) {
      alert ("You must choose at least one prompt to generate a password.")
      }


while 

for (var i= 0; i < valueChar; i++) {
  userPasswordLength = password + valueChar.charAt(Math.floor(Math.random() * Math.floor(valueChar.length - 1)))
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);