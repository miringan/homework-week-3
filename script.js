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

// Prompt user for criteria
// User selects criteria
// Prompt user for length of password - needs to be between 8 and 128 characters
// User enters in a password length between 8 and 128 characters
// Prompt user for character types to include in the password
// User confirms whether or not to include lowercase, uppercase, numeric, and/or special characters
// Each answer should be validated and a random selection of the criteria should be selected
// After all the prompts are answered, a password is generated.
// The password is then displayed in an alert or written to the page.

// Create and populate array of lower case letters.
const lowerCaseAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Create array of upper case letters.
const upperCaseAlpha = [];

// Populate upperCaseAlpha.
for (var i = 0; i < lowerCaseAlpha.length; i++) {
  upperCaseAlpha[i] = lowerCaseAlpha[i].toUpperCase();
}

// Create and populate array of numbers.
const num = [0,1,2,3,4,5,6,7,8,9];

// Create and populate array of special characters. sans backslash.
const specChar = [" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];


function generatePassword () {
  // Prompt for password length.
  var passwordLength;
  
  function askPassLength() {
    passwordLength = prompt("Set a password length between 8 and 128 characters.");

    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password length is not within the acceptable length range.");
      askPassLength();
    } 
  } 

  askPassLength();

  // if (passwordLength < 8 || passwordLength > 128) {
  //   alert("Password length is not within the acceptable length range.");
  //   passwordLength = prompt("Set a password length between 8 and 128 characers.");
  // } 



  // var passwordSpecialChar = confirm("Would you like to include special characers?");
  // var passwordHasUpCase = confirm("Would you like to include upper case letters?");
  // var passwordHasLowCase = confirm("Would you like to include lower case letters?");
  // var passwordHasNums = confirm("Would you like to include numbers?");

  // if (passwordSpecialChar === false && passwordHasUpCase === false && passwordHasLowCase === false && passwordHasNums === false) {
  //   alert("You must choose to include one of the aforementioned password criteria to include in your password.");
  //   passwordSpecialChar = confirm("Would you like to include special characers?");
  //   passwordHasUpCase = confirm("Would you like to include upper case letters?");
  //   passwordHasLowCase = confirm("Would you like to include lower case letters?");
  //   passwordHasNums = confirm("Would you like to include numbers?");
  // }

  let generatedPass = [];

  let password = "hellow world.";

  function askPassRequirements () {
    var passwordSpecialChar = confirm("Would you like to include special characers?");
    var passwordHasUpCase = confirm("Would you like to include upper case letters?");
    var passwordHasLowCase = confirm("Would you like to include lower case letters?");
    var passwordHasNums = confirm("Would you like to include numbers?");

    if (passwordSpecialChar === false && passwordHasUpCase === false && passwordHasLowCase === false && passwordHasNums === false) {
      alert("You must choose to include one of the aforementioned password criteria to include in your password.");
      askPassRequirements();
    }

      // Adds special characters to the generated password array.
    if (passwordSpecialChar){
      generatedPass = generatedPass.concat(specChar); 
    } 

    if (passwordHasUpCase){
      generatedPass = generatedPass.concat(upperCaseAlpha);
    } 

    if (passwordHasLowCase){
      generatedPass = generatedPass.concat(lowerCaseAlpha);
    } 

    if (passwordHasNums){
      generatedPass = generatedPass.concat(num);
    } 
  }

  askPassRequirements();

  let pluckedPassword = [];

  pluckedPassword.length = passwordLength;

  console.log(pluckedPassword);

  for (var i = 0; i < passwordLength; i++) {
    pluckedPassword[i] = generatedPass[Math.floor(Math.random() * generatedPass.length)];
  }

  

  password = pluckedPassword.join("").toString();

  return password;

  // console.log(generatedPass);

  // if (passwordLength > 7 && passwordLength < 129) {
  //     passwordLength = prompt("Set a password length between 8 and 128 characers.");
  // }
}
