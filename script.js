const questions = [
    {
        question: "What is the full meaning of IDE?",
        answers: [
            { text: "Integrated Display Environement", correct: false},
            { text: "Interval Display Editor", correct: false},
            { text: "Integrated Development Environment", correct: true},
            { text: "Interval Development Environemnt", correct: false},
        ]
    },
    {
        question: "An ordered list is laid out with _______ numbers.",
        answers: [
            { text: "Even", correct: false},
            { text: "Sequential", correct: true},
            { text: "Odd", correct: false},
            { text: "Whole", correct: false},
        ]
    },
    {
        question: "In HTML, a _____ is how you can structure your code or your website.",
        answers: [
            { text: "Tag", correct: true},
            { text: "Header", correct: false},
            { text: "Symbol", correct: false},
            { text: "Sheet", correct: false},
        ]
    },
    {
        question: "With _______, you can make multiple tags have the exact same class.",
        answers: [
            { text: "CSS", correct: false},
            { text: "Code", correct: false},
            { text: "HTML", correct: false},
            { text: "Class", correct: true},
        ]
    },
    {
        question: "Which of the following is the full meaning of CSS.",
        answers: [
            { text: "Cascading style sheets", correct: true},
            { text: "Computer style sheets", correct: false},
            { text: "Computer software sheets", correct: false},
            { text: "Control style sheets", correct: false},
        ]
    },
    {
        question: "In CSS, what is the code to make a background blue? Choose one.",
        answers: [
            { text: "background{color}blue;", correct: false},
            { text: "background:color:blue;", correct: false},
            { text: "background-color:blue.", correct: false},
            { text: "background-color:blue;", correct: true},
        ]
    },
    {
        question: "________ is where you can write down your CSS style code.",
        answers: [
            { text: "h1", correct: false},
            { text: "CSS style sheet", correct: true},
            { text: "HTML style sheet", correct: false},
            { text: "Dreamweaver", correct: false},
        ]
    },
    {
        question: "There is a large number of different things to do with _____ to make your website look unique.",
        answers: [
            { text: "PHP", correct: false},
            { text: "CSS", correct: true},
            { text: "HTML", correct: false},
            { text: "C++", correct: false},
        ]
    },
    {
        question: "_____  allow you to display information in a structured format",
        answers: [
            { text: "HTML", correct: false},
            { text: "TABLE", correct: true},
            { text: "CSS", correct: false},
            { text: "LIST", correct: false},
        ]
    },
    {
        question: "In HTML, we have ___ types of lists.",
        answers: [
            { text: "4", correct: false},
            { text: "3", correct: false},
            { text: "1", correct: false},
            { text: "2", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.
    length}!`;
    nextButton.innerHTML = "Test Completed!";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.lenght){
        handleNextButton();
    }else{
      startQuiz();
    }
});


startQuiz();


