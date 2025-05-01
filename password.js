let passwordbox = document.getElementById("password");
let upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase ="abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "!@#$%^&*()_+";
let passwordlength = 6;

totalPassword = upperCase + lowerCase+ number + symbol;
function createpassword(){
    let password ="";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];
    
    while(passwordlength > password.length){
        password += totalPassword[Math.floor(Math.random()*totalPassword.length)]; }
        passwordbox.value = password;
}
function copyPassword(){
    passwordbox.select();
    document.execCommand("copy");
    alert("Password Copied");
}

