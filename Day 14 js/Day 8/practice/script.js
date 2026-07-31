let form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
e.preventDefault();
let name = document.getElementById('name').value;
let emal = document.getElementById('email').value;
let password = document.getElementById('password').value;
let phone = document.getElementById('phone').value;

 if(name == ""){
    // alert('Please enter your name')
    console.log("enter name")
 }

 else if(emal == ""){
    // alert('Please enter your email')
    console.log("enter email")
 }

 else if(password == ""){
    // alert('Please enter your password')
    console.log("enter password")
 }
 else if(phone == ""){
    // 
    console.log("enter contact no")
 }
 else{
    // alert("Your form has been successfully submitted");
    console.log("form has been successfully")
 }
})

