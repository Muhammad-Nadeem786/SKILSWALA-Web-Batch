let heading = document.getElementById("head");
let res = heading.setAttribute('class',"mainHeading");
let button = document.getElementById('btn');
let body = document.getElementsByTagName('body')
let player = document.getElementById('player_name');
let mode = document.querySelector("#mode");


let image = document.getElementById('img');
let src = image.setAttribute('src','parrot.jpg');

button.addEventListener('click',function(){
    console.log('button was clicked');
    image.removeAttribute('height');
    image.removeAttribute('width')
})

let arr = ['Haris','Babar','Rizwan','Imam','Amir']
for(a = 0; a<arr.length; a++){
    let li = document.createElement('li');
    let val = arr[a];
    li.append(val);
    player_name.appendChild(li);  
    
    li.addEventListener('click', function(){
        li.remove('li');
    })

}

let currMode = 'light';

mode.addEventListener('click',()=>{
    if(currMode==='light'){
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
    else{
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
})

    



