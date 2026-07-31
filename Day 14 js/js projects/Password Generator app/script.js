

let upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerSet = "abcdefghijklmnopqrstuvwxyz";
let numberSet = "0123456789";
let symbolSet = "#@£$%&/";

let passwordBox = document.getElementById("pass_box");
let passwordLength = document.getElementById("pas_length");
let uppercase = document.getElementById("upercase");
let lowerCase = document.getElementById("lowercase");
let numbers = document.getElementById("number");
let symbols = document.getElementById("symbol");
let generateBtn = document.getElementById("generator_btn");

let getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
};

let generatePassword = () => {
    let passLength = parseInt(passwordLength.value) || 8; // Default to 8 if empty
    let availableChars = "";
    let password = "";

    if (uppercase.checked) {availableChars += upperset;}
    if (lowerCase.checked) availableChars += lowerSet;
    if (numbers.checked) availableChars += numberSet;
    if (symbols.checked) availableChars += symbolSet;

    if (availableChars.length === 0) {
        passwordBox.innerText = "Select at least one option!";
        return;
    }

 
    for (let i = 0; i < passLength; i++) {
        password += getRandomData(availableChars);
        
    }

    passwordBox.innerText = password;
};

generateBtn.addEventListener("click", function () {
    generatePassword();
});
