let form = document.getElementById('form');
let nameerror = document.getElementById('nameerror');
let emailerror = document.getElementById('emailerror');
let passerror = document.getElementById('passerror');
let success = document.getElementById('success');



form.addEventListener('submit', function(e)
{
    e.preventDefault();
let name = document.getElementById('name').value; 
let email = document.getElementById('email').value; 
let password = document.getElementById('password').value;   


if(name == "")
{
    nameerror.innerHTML = 'please Enter name ..';
}
else if(email == "")
{
    emailerror.innerHTML = 'please Enter Email ..';

}
else if(password == "")
    {
    passerror.innerHTML = 'please Enter Password ..';
        
    }

else
{
    success.innerHTML  = " submitted";
    nameerror.innerHTML = "";
    passerror.innerHTML = "";
    emailerror.innerHTML = "";

}

// console.log(name);
// console.log(email);
// console.log(password);

})