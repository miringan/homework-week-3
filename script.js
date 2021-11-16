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

function generatePassword () {
    //define variables
    passwordLength;
    passwordSpecialChar;
    passwordHasUpCase;
    passwordHasLowCase;

    // if (passwordLength > 7 && passwordLength < 129) {
    //     passwordLength = prompt("Set a password length between 8 and 128 characers.");
    // }
}
