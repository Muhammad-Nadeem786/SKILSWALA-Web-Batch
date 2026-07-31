function pickValue(num){
    document.getElementById("a").value += num;
}

function clear(){
    document.getElementById("a").value = " ";
}

function solve(num){
   let x = document.getElementById("a").value;
    let y = eval(x);
    document.getElementById('a').value = y;
}