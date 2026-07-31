
let array = [
    {
        queston: "What does HTML stand for?",
        A: "Hyper Trainer Marking Language",
        B: "Hyper Text Markup Language",
        C: "Hyper Tool Multi Language",
        D: "Hyper Text Managing Links",
        CorrectAnswer: "Hyper Text Markup Language"
    },
    {
        queston: "Which of the following is a CSS framework?",
        A: "Laravel",
        B: "Django",
        C: "Bootstrap",
        D: "Flask",
        CorrectAnswer: "Bootstrap"
    },
    {
        queston: "What is the purpose of JavaScript in web development?",
        A: "Styling web pages",
        B: "Structuring web content",
        C: "Adding interactivity and dynamic behavior",
        D: "Managing databases",
        CorrectAnswer: "Adding interactivity and dynamic behavior"
    },
    {
        queston: "Which database is commonly used with PHP?",
        A: "MongoDB",
        B: "MySQL",
        C: "Firebase",
        D: "PostgreSQL",
        CorrectAnswer: "MySQL"
    },
    {
        queston: "What is the correct syntax to create a function in PHP?",
        A: "def myFunction() { }",
        B: "function myFunction() { }",
        C: "func myFunction() { }",
        D: "function myFunction() { }",
        CorrectAnswer: "function myFunction() { }"
    }
];

let currentQuestionIndex = 0;
let score = 0;

window.addEventListener('load', function (e) {
    let quizcontainer = document.querySelector('.Quizcontainer');
    if (quizcontainer) {
        startGame(quizcontainer);
    }
});

function startGame(quizcontainer) {
    quizcontainer.innerHTML = `<button class='startbtn button'>Start Quiz</button>`; 
    
    document.querySelector('.startbtn').addEventListener('click', function (e) {
        displayQuestion(currentQuestionIndex,quizcontainer);
      
    })
}


function displayQuestion(currentQuestionIndex,quizcontainer)
 {

    if(currentQuestionIndex >= array.length){
        endQuiz(quizcontainer);
        
    }

    quizcontainer.innerHTML = `<h3>${array[currentQuestionIndex].queston}</h3>
    <div id = 'box'>
    <p class='button options'>${array[currentQuestionIndex].A}</p>
    <p class='button options'>${array[currentQuestionIndex].B}</p>
    <p class='button options'>${array[currentQuestionIndex].C}</p>
    <p class='button options'>${array[currentQuestionIndex].D}</p>
    </div>`;

    let options = document.querySelectorAll('.options');
    let correctAns = array[currentQuestionIndex].CorrectAnswer;
    for(let i = 0; i<options.length;i++){
        options[i].addEventListener('click',function(e){
            if(this.innerHTML==correctAns){
                score += 10;
                currentQuestionIndex++;
                displayQuestion(currentQuestionIndex,quizcontainer);

            }
            else{
                currentQuestionIndex++;
                displayQuestion(currentQuestionIndex,quizcontainer);
            }
        })
    }
}

function endQuiz(quizcontainer){
    quizcontainer.innerHTML = `<h1 id="end-head">Quiz Ended</h1>
    <h2 id="score">Your Score : ${score}/${10*array.length}</h2>
    <button id="resetbtn" class="button">Restart Quiz</button>`;
    document.getElementById('resetbtn').addEventListener('click',function(e){
        score = 0;
        currentQuestionIndex = 0;
        startGame(quizcontainer);
    });

}

