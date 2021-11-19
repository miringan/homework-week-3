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
  // Define password length.
  var passwordLength;
  
  // Define function to prompt user for a password length.
  function askPassLength() {
    passwordLength = prompt("Set a password length between 8 and 128 characters.");

    // If statement to prevent password lengths not within range.
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password length is not within the acceptable length range.");
      askPassLength();
    } 
  } 

  // Call askPassLength function to prompt user for a password length.
  askPassLength();

  // Create array to hold data for a generated password.
  let generatedPass = [];

  // Create password variable will later be returned.
  let password;

  // Define function to ask the user what password criteria to use.
  function askPassRequirements () {
    var passwordSpecialChar = confirm("Would you like to include special characers?");
    var passwordHasUpCase = confirm("Would you like to include upper case letters?");
    var passwordHasLowCase = confirm("Would you like to include lower case letters?");
    var passwordHasNums = confirm("Would you like to include numbers?");

    // If statement to make sure the user selects at least one password criteria.
    if (passwordSpecialChar === false && passwordHasUpCase === false && passwordHasLowCase === false && passwordHasNums === false) {
      alert("You must choose to include one of the aforementioned password criteria to include in your password.");
      askPassRequirements();
    }

    // Adds special characters to the generated password array.
    if (passwordSpecialChar){
      generatedPass = generatedPass.concat(specChar); 
    } 

    // Adds uppercase letters to the generated password array.
    if (passwordHasUpCase){
      generatedPass = generatedPass.concat(upperCaseAlpha);
    } 

    // Adds lowercase letters to the generated password array.
    if (passwordHasLowCase){
      generatedPass = generatedPass.concat(lowerCaseAlpha);
    } 

    // Adds numbers to the generated password array.
    if (passwordHasNums){
      generatedPass = generatedPass.concat(num);
    } 
  }

  // Call the askPassRequirements function to ask the user what password criteria to use.
  askPassRequirements();

  // Create array to pluck characters from the generatedPass array to set content for new password.
  let pluckedPassword = [];

  // Establish length of pluckedPassword array.
  pluckedPassword.length = passwordLength;

  // Populates the pluckedPassword array with randomly selected elements of the generatedPass array.
  for (var i = 0; i < passwordLength; i++) {
    pluckedPassword[i] = generatedPass[Math.floor(Math.random() * generatedPass.length)];
  }

  // Set password equal to the string content of the pluckedPassword array.
  password = pluckedPassword.join("").toString();

  // Return password.
  return password;

}
