// Assignment

    // Q1

    let student_info = [
        {
            name:'Muhammad Nadeem',
            age:21,
            registraton_number:'s22bscs005',
            course:'Web development',
            favorite_programming_language:['JavaScript','C++','Python'],
            marks: {
                Math:90,
                English:89,
                Programming:96,
                computer:92,
                Physics:88
            }
        },

        {
            name:'Muhammad saleem',
            age:23,
            registraton_number:'s22bscs008',
            course:'App development',
            favorite_programming_language:['C language','C++','Ruby'],
            marks: {
                Math:70,
                English:89,
                Programming:76,
                computer:91,
                Physics:68
            }
        }
    ];
    console.log(student_info[0].name);
    console.log(student_info[0].age);
    console.log(student_info[0].registraton_number);
    console.log(student_info[0].course);

    //for favorite programming language

    console.log(student_info[0].favorite_programming_language[0]);
    console.log(student_info[0].favorite_programming_language[1]);
    console.log(student_info[0].favorite_programming_language[2]);



//to display every single property of any student
console.log(student_info[1]);

//first  and last favorite programming language

console.log(student_info[0].favorite_programming_language[0]);
console.log(student_info[0].favorite_programming_language[2]);

//Display marks of any two subject


function display_marks(indx,subj1,subj2){
    let sub = student_info[indx].marks;
    console.log(sub);
}

display_marks(1,'Math','English');





// Q--------------------------2--------------------------
//sum of all array element with loop


//for of loop
let array = [1,4,7,9,11];
let sum = 0;
for(let s of array){
    sum = sum+s;
}
console.log(sum);


//using for loop

let arr = [1,2,3,4,5];
let Addtion = 0;

for(let i = 0; i<arr.length; i++){
    Addtion = Addtion + arr[i];
}
console.log(Addtion);



//reverse of array using for loop

let reverse = [1,2,3,4,5,6,7,8,9];
for(let rev = reverse.length; rev>=0; rev--){
    console.log(reverse[rev]);
}

//find largest number in the array

let largest = [10,40,20,50,90];
let max = 0;
for(let i = 0; i<largest.length; i++){
    if(max<largest[i]){
        max = largest[i]
    }
}
console.log('Maximum number is : ',max);

//find minemum number in the array

let min = largest[4];
for(let i = 0; i<largest.length; i++){
    if(min>largest[i]){
        min = largest[i]
    }
}
console.log('Minemum number is : ',min);

//factorial of any number
let result = 1;
function factorial(num){
    for(let i = 1; i<=num; i++){
     result = result*i;
    }
    return result;
}

let facto = factorial(6);
console.log(facto);

//cheak prime number

function prime_or_not(number){

    if(number <= 1){
        return false;
    }
    for(let i = 2; Math.sqrt(number); i++){
        if(number % i === 0){
            return false;
        }
    }

    return true;
}
console.log(prime_or_not(2));
console.log(prime_or_not(17));
console.log(prime_or_not(10));
console.log(prime_or_not(4));

 