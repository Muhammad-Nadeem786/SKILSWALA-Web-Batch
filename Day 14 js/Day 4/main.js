// Arrays in js

let arr = ['Ali','Ahmed','saqlain','Amir','Hadi'];
console.log(arr);

// let arr2 = ['a','b','c','d','e'];
// for(let i in arr2){
//     console.log(arr2[i])
// }

let arr2 = ['a','b','c','d','e'];
for(let i = 0; i<arr2.length; i++){
    console.log(arr2[i])
}

let ar1 = ['A','B','C'];
let ar2 = ['D','E','F'];
let ar3 = ar1.concat(ar2);
console.log(ar3);
//push method

ar2.push('F','G');
console.log(ar2);

//pop method

ar3.pop();
console.log(ar3);

//shift method

let arrr = ['A','B','C','D'];
arrr.shift();
console.log(arrr);

//unshift method

let arr8 = [1,2,3,4,5,6,7];
arr8.unshift(0);
console.log(arr8);

//slice method

let ary = ['v','w','x','y','z'];
console.log(ary);
console.log(ary.slice(1,4));

//splice method

let spl = [1,2,3,4,5,6];
spl.splice(2,0,555);
console.log(spl);

let aR = [102,201,301,401,501];
aR.splice(4,0,601,701);
console.log(aR);

// ---------------------------Assignment-------------------------

//Q1-------------------------------

let fruits = ['Apple','Banana','Mango','Litchi'];
console.log(fruits);

//for indivisual index
console.log(fruits[3]);



//Q2-------------------------------
let numbers = [5,3,6,4,8];

function checkFirst_last(value){
    if(numbers[0]===value || numbers[numbers.length -1]===value)
    {
        return true
    }
    else{
        return false
    }
}

let value = 5;
let result = checkFirst_last(value);
console.log(result);


//Q3-------------------------------

let students = ['Ali','Ahmed','Nadeem','Saleem','Akram']

function cheaker(str){
    if(students.includes(str)){
        console.log('Your entered name is exist at index ',students.indexOf(str));
    }
    else{
        console.log('Your entered name is not exist');
    }
}
cheaker('Nadeem');

//Q3-------------------------------

let animals = ['Lion','Tiger','Hourse','Monkey']

animals.splice(1,0,'Donckey','Zabra')
console.log(animals);

// to delete the element at any specific index

animals.splice(3,1);
console.log(animals);


let str = 'Muhammad Nadeem';
for( let s in str){
    console.log(str[s]);
}


let str2 = 'Hello world';
for(let s of str2){
    console.log(s);
}

let obj = {
    name:'Muhammad Nadeem',
    age:20,
    contact:3421713449,
    address:'abc123'
}
for(let ob in obj){
    console.log(obj[ob]);
}

let arRr = ['s','t','u','v','w'];
for(let a of arRr){
    console.log(a)
}