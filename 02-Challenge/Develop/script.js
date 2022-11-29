// Assignment Code
document.querySelector("#generate").addEventListener("click", typepasword);

// Write password to the #password input
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numbers = ["0","1","2","3","4","5","6","7","8","9",];
  var specialCharacters = ["!","@","#","$","%","^","&","*","-","+",];
  var Uppercase;
  var specialChar;
  var Lowercase;
  var Numbers;
  function generatePassword() {
    var length = (prompt("how many chracters would you like your password to contain"));
    while(length <= 8 || length >= 51){
    alert("Password must be 7 through 50 characters");
    var length = (prompt("how many chracters would you like your password to have?"));
}
alert(`your password is going to have ${confirm.apply ,length} characters`);
var Uppercase=confirm("press okay if you would like to include uppercase letters in your password")
var specialChar=confirm("press okay if you would like to include special characters in your password")
var Lowercase=confirm("press okay if you would like to include lowercase letters in your password")
var Numbers=confirm("press okay if you would like to include numbers in your password")
while(Uppercase===false && specialChar===false && Lowercase===false && Numbers===false){
alert("choose atleast one parameter");
var Uppercase=confirm("press okay if you would like to include uppercase letters in your password")
var specialChar=confirm("press okay if you would like to include special characters in your password")
var Lowercase=confirm("press okay if you would like to include lowercase letters in your password")
var Numbers=confirm("press okay if you would like to include numbers in your password")
}
  var passwordCharacters =[]
  if(specialChar){
    passwordCharacters=passwordCharacters.concat(specialCharacters)
  }
  if(Numbers){
    passwordCharacters=passwordCharacters.concat(numbers)
  }
  if(Uppercase){
    passwordCharacters=passwordCharacters.concat(upperCase)
  }
  if(Lowercase){
    passwordCharacters=passwordCharacters.concat(lowerCase)
  }
console.log(passwordCharacters)
  retval ="";
  for (var i = 0; i < length; i++) {
    retval = retval + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  return retval;
}



// Add event listener to generate button

function typepasword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
