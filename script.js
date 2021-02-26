// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!","@","#","$","%","^","&","*","(",")","-","=","_","+","`","~","[","{","]","}",";",":","/","?","'"];
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  //prompt user for length
  
  var length = prompt("How many characters would you like your password?")
  console.log("Length:", length)
  //make sure between 8 and 128

  //prompt w confirm lowercase
  //prompt w confirm uppercase
  //prompt w confirm special
  //prompt w confirm special
  
    return "password should go here"
  }

//return arr[Math.floor(Math.random() * arr.length)];


// if (length != null) {
//   console.log(length)
// }


// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }

// var number = Math.floor((Math.random() * lowercase.length));

// console.log(lowercase[number])

// var number = Math.floor((Math.random() * uppercase.length));

// console.log(uppercase[number])

// var number = Math.floor((Math.random() * numeric.length));

// console.log(numeric[number])

// var number = Math.floor((Math.random() * special.length));

// console.log(special[number])

// var combo = ()

// console.log(combo)


// for slot in array array.length 

// var i 

// for (i = 0; i < special.length; i++){
  
// }

