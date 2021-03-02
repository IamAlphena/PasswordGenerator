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
  
  var passChoice = []
  

  var length = prompt("How many characters would you like your password?")
  console.log("Length:", length)
  //make sure between 8 and 128

  if(length < 8 || length > 128){
    alert("Please select a value between 8 and 128");
    return
  }

  //prompt w confirm lowercase
 var lower = confirm("Do you want to use lowercase letters?")
 if (lower) {
   passChoice = passChoice.concat(lowercase)
 } 
 console.log(passChoice)
  //prompt w confirm uppercase
  var Upper = confirm("Do you want to use Uppercase letters?")
  if (Upper) {
    passChoice = passChoice.concat(uppercase)
  } 
  console.log(passChoice)
  //prompt w confirm numbers
  var numeral = confirm("Do you want to use numbers?")
  if (numeral) {
    passChoice = passChoice.concat(numeric)
  } 
  console.log(passChoice)

  //prompt w confirm special 
  
  var spec = confirm("Do you want to use special characters?")
 if (spec)  {
  passChoice = passChoice.concat(special)
 } 

 console.log(passChoice)

 // return gives number of random items from passChoice = length

 var password = []
 //  password.push(passChoice[Math.floor(Math.random() * passChoice.length)]) 
 
  for (var i = 0; i < length; i++) {
   password.push(passChoice[Math.floor(Math.random() * passChoice.length)]) 
 }
 
    return password.join('');
  }

