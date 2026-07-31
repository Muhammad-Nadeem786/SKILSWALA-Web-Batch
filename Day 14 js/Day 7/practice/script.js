let button = document.querySelector('#btn');
let img = document.getElementById('image');
let btn2 = document.getElementById('btn2');



button.addEventListener('click',()=>{
    para = document.getElementById('para');
    heading = document.getElementById('heading1');

    if(para.style.display!='none'){
        para.style.display = 'none';
        heading.style.color = 'red';
        let cont = document.querySelector('.container');
        cont.style.backgroundColor = 'lightgray';
    }
    else{
        para.style.display = 'block';
        heading.style.color = 'black';
        let cont = document.querySelector('.container');
        cont.style.backgroundColor = 'green';
    }
})

img.addEventListener('click',()=>{
    img.style.height = '400px';
    img.style.width = '400px';
})

img.addEventListener('dblclick',()=>{
    img.style.height = '200px';
    img.style.width = '200px';
})

