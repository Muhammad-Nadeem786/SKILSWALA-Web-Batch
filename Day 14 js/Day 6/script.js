let heading = document.getElementById('heading1');
heading.innerText = heading.innerText + ' from skillswalla';
console.log(heading.innerText);

let body = document.getElementsByTagName('body');
body[0].style.backgroundColor = 'red';
body[0].style.color = 'white';

let div = document.getElementById('div');
div.style.backgroundColor = 'green';
div.style.borderRadius = '50%';
div.style.textAlign = 'center';


newBox = document.createElement("div");
newBox.style.height='100px';
newBox.style.width='100px';
newBox.innerText = 'Good luck';
newBox.style.textAlign = 'center';
newBox.style.fontSize = '1.5rem';
newBox.style.backgroundColor='orange';
newBox.style.border='1px solid black';
document.querySelector('body').append(newBox);


let btn = document.createElement('button');
btn.innerText = 'click me';
document.querySelector('body').append(btn);
btn.style.backgroundColor = 'yellow'

let newHeading = document.createElement('h2');
newHeading.innerText = 'Wellcome to learn js';
newHeading.style.color = 'black';
document.querySelector('h2').prepend(newHeading);