let addBtn = document.getElementById("addBtn");
let ul = document.querySelector('ul');

addBtn.addEventListener('click',()=>{
 let input = document.getElementById("inputBox").value;
    if(input.trim() !== ""){
        let item = document.createElement('li');
        item.innerText = input;
        ul.appendChild(item);

        document.getElementById("inputBox").value = "";

        // let span = document.createElement('span');
        // span.innerText = "\u00d7";
        // li.appendChild(span);
        
        

        checked(item);
    }
    else{
        alert("Enter any text to add")
    }
})

function checked(item) {
    item.addEventListener('click', () => {
        if (item.style.textDecoration === "line-through") {
            item.style.textDecoration = "none";
        } else {
            item.style.textDecoration = "line-through";
        }
    });
}


