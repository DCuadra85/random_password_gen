// Assignment Code
//var generateBtn = document.querySelector("#generate");

// var valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+ "

function generateBtn(){

var userLowercase = confirm ("Will this password have lower case?");
var userCaps = confirm ("Will this password have capitals?");
var userNumbers = confirm ("Will this password have numbers?");
var userSymbols = confirm("Will this password have special characters?");

var passwordArray = []

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
        for (var i= 0; i < userPasswordLengthInput; i++) {
          var passwordSelection = valueChar[Math.floor(Math.random() * (valueChar.length))]
          passwordArray.push(passwordSelection)
          console.log(passwordArray)
        }

      }

      //tttf
      else if((userCaps === true) && (userLowercase === true) && (userNumbers === true) && (userSymbols === false)){
        valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
        for (var i= 0; i < userPasswordLengthInput; i++) {
          var passwordSelection = valueChar[Math.floor(Math.random() * (valueChar.length))]
          passwordArray.push(passwordSelection)
          console.log(passwordArray)
        }
      }

      //ttff
      else if((userCaps === true) && (userLowercase === true) && (userNumbers === false) && (userSymbols === false)){
        valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i= 0; i < userPasswordLengthInput; i++) {
          var passwordSelection = valueChar[Math.floor(Math.random() * (valueChar.length))]
          passwordArray.push(passwordSelection)
          console.log(passwordArray)
        }
      }

      //tfff
      else if((userCaps === true) && (userLowercase === false) && (userNumbers === false) && (userSymbols === false)){
        valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (var i= 0; i < userPasswordLengthInput; i++) {
          var passwordSelection = valueChar[Math.floor(Math.random() * (valueChar.length))]
          passwordArray.push(passwordSelection)
          console.log(passwordArray)
        }
      }

      //tfft
      else if((userCaps === true) && (userLowercase === false) && (userNumbers === false) && (userSymbols === true)){
        valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+ ";
        for (var i= 0; i < userPasswordLengthInput; i++) {
          var passwordSelection = valueChar[Math.floor(Math.random() * (valueChar.length))]
          passwordArray.push(passwordSelection)
          console.log(passwordArray)
        }
      }

      //tftf
      else if((userCaps === true) && (userLowercase === false) && (userNumbers === true) && (userSymbols === false)){
        valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        for (var i= 0; i < userPasswordLengthInput; i++) {
          var passwordSelection = valueChar[Math.floor(Math.random() * (valueChar.length))]
          passwordArray.push(passwordSelection)
          console.log(passwordArray)
        }
      }

      //tftt
      else if((userCaps === true) && (userLowercase === false) && (userNumbers === true) && (userSymbols === true)){
        valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+ ";
        for (var i= 0; i < userPasswordLengthInput; i++) {
          var passwordSelection = valueChar[Math.floor(Math.random() * (valueChar.length))]
          passwordArray.push(passwordSelection)
          console.log(passwordArray)
        }
      }

      //ttft
      else if((userCaps === true) && (userLowercase === true) && (userNumbers === false) && (userSymbols === true)){
        valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+ ";
        for (var i= 0; i < userPasswordLengthInput; i++) {
          var passwordSelection = valueChar[Math.floor(Math.random() * (valueChar.length))]
          passwordArray.push(passwordSelection)
          console.log(passwordArray)
        }
      }

      //fttt
      else if((userCaps === false) && (userLowercase === true) && (userNumbers === true) && (userSymbols === true)){
        valueChar = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+ ";
        for (var i= 0; i < userPasswordLengthInput; i++) {
          var passwordSelection = valueChar[Math.floor(Math.random() * (valueChar.length))]
          passwordArray.push(passwordSelection)
          console.log(passwordArray)
        }
      }

      //fftt
      else if ((userCaps === false) && (userLowercase === false) && (userNumbers === true) && (userSymbols === true)){
        valueChar = "1234567890!@#$%^&*()_+ ";
        for (var i= 0; i < userPasswordLengthInput; i++) {
          var passwordSelection = valueChar[Math.floor(Math.random() * (valueChar.length))]
          passwordArray.push(passwordSelection)
          console.log(passwordArray)
        }
      }

      //ffft
      else if((userCaps === false) && (userLowercase === false) && (userNumbers === false) && (userSymbols === true)){
        valueChar = "!@#$%^&*()_+ ";

        for (var i= 0; i < userPasswordLengthInput; i++){
          var passwordSelection = valueChar[Math.floor(Math.random() * (valueChar.length))]
          passwordArray.push(passwordSelection)
          console.log(passwordArray)
        }

      }
      //ffff
      else if((userCaps === false) && (userLowercase === false) && (userNumbers === false) && (userSymbols === false)) {
      alert ("You must choose at least one prompt to generate a password.")
      }

      var finalPassword = passwordArray.toString().split(",").join("");
      console.log("finalpassword" , finalPassword);
      document.getElementById("password").innerHTML = finalPassword

    }


// Write password to the #password input
// function writePassword() {
  

//   var passwordSelection = document.querySelector("#password");

//   passwordSelection.value = userPassword;

// }

// alert passwordArray


//example of the RNG array function
// for (var i= 0; i < valueChar; i++) {
//   userPasswordLength = password + valueChar.charAt(Math.floor(Math.random() * Math.floor(valueChar.length - 1)))
// }
// Add event listener to generate button
// var generateBtn = document.getElementById("#generate")
// generateBtn.addEventListener("click", generateButton);