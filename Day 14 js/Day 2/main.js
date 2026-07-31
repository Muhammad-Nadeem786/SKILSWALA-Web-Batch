// -----------------------Q1----------------------------
let num1 = 40;
let num2 = 50;

if(num1 + num2 ==50 || num1 ==50 ||num2 ==50){
   console.log('true')
}
else{
    console.log('false')
}

// -----------------------Q2----------------------------

let integer = 0;
if(integer>0){
    console.log('Poitive integer')
}
else if(integer==0){
    console.log('Neutral number')
}
else{
    console.log('Negative integer')
}

// -----------------------Q3----------------------------

let  x = 10;
if(x%2==0){
    console.log('The number ',x,' is even number' )
}
else{
    console.log('The number ',x,' is odd number' )
}

// -----------------------Q4----------------------------

let y = 27;
if(y%3==0){
    console.log('The number ',y,' is multiple of three')
}
else{
    console.log('The number ',y,' is not multiple of three')
}

// -----------------------Q5----------------------------
let year = 2016;
if(year%4==0){
    console.log(year +' is leap year')
}
else{
    console.log('Not a leap year')
}

// -----------------------Q6----------------------------

let first_num = 13;
let second_num = 17;
if(first_num>second_num){
    console.log('First number is greater')
}
else if(first_num<second_num){
    console.log('Second number is greater')
}
else('Both number are equal')

// -----------------------Q7----------------------------

let mounth = 'December';
if(mounth=='December'||mounth=='January'||mounth=='Febreuary'){
    console.log('Its winer mounth')
}
else if(mounth=='March'||mounth=='April'||mounth=='May'){
    console.log('Its spring mounth')
}
else if(mounth=='June'||mounth=='July'||mounth=='August'){
    console.log('Its Autumn mounth')
}
else{
    console.log('Its Fall mounth')
}