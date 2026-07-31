let name = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('Password');
let form = document.getElementById('form');

let  text1 = document.getElementById('text_name');
let  text2 = document.getElementById('text_email');
let text3 = document.getElementById('text_pass');



form.addEventListener('submit',(e)=>{
    if(name.value === "" || name.value == null){
        e.preventDefault();
      text1.innerHTML = "Name is requried";
    }
    else{
        text.innerHTML = "";
    }

})

form.addEventListener('submit',(e)=>{
    if(email.value === "" || email.value == null){
        e.preventDefault();
      text2.innerHTML = "Email is requried";
    }
    else{
        text.innerHTML = "";
    }

})

form.addEventListener('submit',(e)=>{
    if(password.value.length <= 5){
        e.preventDefault();
        text3.innerHTML = "Password is more than 6 character";
    }
    if(password.value.length >= 12){
        e.preventDefault();
        text3.innerHTML = "Password is less than or equal to 12 character";
    }
})