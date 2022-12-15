// var generateBtn = document.querySelector("#generate")
var generateBtn = document.querySelector(".btn")

function generatePassword(){
var characters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()"



var lowercharacters = "qwertyuiopasdfghjklzxcvbnm"
var uppercharacters = "QWERTYUIOPASDFGHJKLZXCVBNM"
var numbers = "1234567890"
var specialcharacters = "!@#$%^&*()"
var characterBase = ""

var length = prompt("how long?")

if
(confirm("Do you want lower") === true)
{
    characterBase += lowercharacters
    console.log(characterBase)
    // characterBase = characterBase + lowercharacters
}
if
(confirm("Do you want uppper") === true)
{
    characterBase += uppercharacters
    console.log(characterBase)
    // characterBase = characterBase + lowercharacters
}
if
(confirm("Do you want numbers") === true)
{
    characterBase += numbers
    console.log(characterBase)
    // characterBase = characterBase + lowercharacters
}
if
(confirm("Do you want special characters") === true)
{
    characterBase += specialcharacters
    console.log(characterBase)
    // characterBase = characterBase + lowercharacters
}

var randomPassword = ""

for (let i = 0; i < length; i++){
    randomPassword += characterBase.charAt(Math.floor(Math.random()*characterBase.length))
}


console.log(length)

return randomPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);