# Random Password Generator

A random password generator was created using primarily JavaScript with HTML & CSS for the visual. This was created to be a basic generator with a password length requirement of 8 - 128 characters. You will be prompted to choose the options for upper/lower case letters, numbers, and special characters. Based on your choices, a password will randomly generate. Everything was tied into a single function, that hooks into the generate password button.

* Use of JavaScript.
* Reactive prompts.

## Code

Prompt Code:

```
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
```

Symbol Selection Code:

```
var userLowercase = confirm ("Will this password have lower case?");
var userCaps = confirm ("Will this password have capitals?");
var userNumbers = confirm ("Will this password have numbers?");
var userSymbols = confirm("Will this password have special characters?");

      if ((userCaps === true) && (userLowercase === true) && (userNumbers === true) && (userSymbols === true)){
        var valueChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+ ";
        for (var i= 0; i < userPasswordLengthInput; i++) {
          var passwordSelection = valueChar[Math.floor(Math.random() * (valueChar.length))]
          passwordArray.push(passwordSelection)
          //console.log(passwordArray)
        }

      }
```

Password Output Code:

```
      var finalPassword = passwordArray.toString().split(",").join("");
      console.log("finalpassword" , finalPassword);
      document.getElementById("password").innerHTML = finalPassword
```
## Usage

This page's function was create through JavaScript. Click the "Generate Password" button and a series of prompts will start. Answer the prompts and then a password will generate based on what you enter. 

<img src=".\Assets\pwpromptexample.png">

---

<img src=".\Assets\passwordexample.png">


## Credits

* https://github.com/coding-boot-camp/
* https://www.w3schools.com/
* https://stackoverflow.com/questions/
* https://www.geeksforgeeks.org/
* https://guides.github.com/features/mastering-markdown/
* https://developer.mozilla.org/en-US/docs/Web/HTML/


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Deployed Link

* https://dcuadra85.github.io/my-portfolio/


## Authors

* **Daniel Cuadra** 

- [GitHub](https://github.com/DCuadra85)
- [LinkedIn](https://www.linkedin.com/in/daniel-cuadra-3705aa39/)


## License

MIT License

Copyright (c) [2020] [DanielCuadra]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.