// Funcion in js

//       Q1

function greater(num1, num2) {
    let sum = num1+num2;
    if (sum == 50 || num1 == 50 || num2 == 50) {
        return true;
    } else {
        return false;
    }
}

let value = greater(20, 30);
console.log(value);

//       Q2

function check(num){
    if(num >0){
      return 'Positive';
    }
    else if(num==0){
        return 'Neutral';
    }
    else{
        console.log('Negative')
    }
}
console.log(check(13));
console.log(check(-1));
console.log(check(0));

//       Q3

function checkNumber(x){
    if(x%2==0){
        return 'Even number';
    }
    else{
        return 'odd number';
    }
}
console.log(checkNumber(13));
console.log(checkNumber(6));
console.log(checkNumber(9));

//       Q4


function leapYear(year){
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        return 'Leap year';
    }
    else{
        return 'Not a leap year';
    }
}
console.log(leapYear(2013));
console.log(leapYear(2016));

//       Q5

function cheaker(a,b){
    if(a>b){
        return 'a is greaterthan b';
    }
    else if(a<b){
        return 'a is lessthan b';
    }
    else{
        return 'Both are equal';
    }
}
console.log(cheaker(3,7));
console.log(cheaker(9,7));
console.log(cheaker(3,3));

//       Q6

function mounth(str){
    if(str=='december' || str=='january' || str=='february'){
        return 'Its winter seasion';
    }
    else if(str=='march' || str=='april' || str=='may'){
        return 'Its spring seasion';
    }
    else if(str=='june' || str=='july' || str=='august'){
        return 'Its summar seasion';
    }
    else{
        return 'Its fall seasion';
    }

}
console.log(mounth('january'));
console.log(mounth('april'));
console.log(mounth('july'));
console.log(mounth('octuber'));

//       Q6

function area_ractangle(l,w){
    return(l*w);
}
console.log(area_ractangle(5,8));

//       Q7

function area_circle(radius){
    return (3.145*radius*radius);
}
console.log(area_circle(3));

//       Q8

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32; 
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
console.log(celsiusToFahrenheit(20));
console.log(fahrenheitToCelsius(77));