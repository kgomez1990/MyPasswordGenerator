// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var arrUpperChar = upperChar.split('')

var lowerChar = 'abcdefghijklmnopqrstuvwxyz'
var arrLowerChar = lowerChar.split('')

var specialChar = '!@#$%^&*()+|~'
var arrSpecialChar = specialChar.split('')

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  var initialHello = alert('Hello! First we need some answers!')

  var passwordLenth = prompt('What is your desired length of password? (Min char-8 Max-128)')

  var confirmedLength = confirm('Are you sure?')
  var confirmedSpecChar = confirm('Do you want Special Characters?')
  var confirmedLowerChar = confirm('Do you potentially want lowercase characters?')
  var confirmedUpperChar = confirm('Do you potentially want Uppercase characters?')

  var passwordArr = []
  var newPassword = ''

  if (confirmedSpecChar === true) {
    passwordArr.concat(specialChar)
  }

  if (confirmedLowerChar === true) {
    passwordArr.concat(lowerChar)
  }

  if (confirmedUpperChar === true) {
    passwordArr.concat(upperChar)
  }

  for (let i = 0; i < passwordArr.length; i++) {
    newPassword += passwordArr[i].Math.random() * i
  } 
    return newPassword

});


writePassword()
