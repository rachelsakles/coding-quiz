//create variables 
var startQuizBtn = document.getElementById('start-quiz')
var questionElement = document.getElementById('question')
var startPrompt = document.getElementById('start-prompt')
var questionPrompt = document.getElementById('question-prompt')
var questionOptions = document.getElementById('question-options')
var questionIndex = 0
var score = 0


// When start quiz button is clicked,
startQuizBtn.addEventListener('click', function (e) {
    // Hide start prompt
    startPrompt.style.display = "none";

    // Show question prompt   
    questionPrompt.style.display = "block";

    // populate questions prompt with first question 
    renderQuestion();

})




//Functions 
function startQuiz() {
    console.log('Started')
    startQuizBtn.classList.add('hide')
    questionPrompt.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    showQuestion[questionIndex]
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {

}






// List of question, options, and correct answer 
var questions = [
    {
        text: "What is the average life span of a cat?",
        options: ["12-18 years", "9-15 years", "20-25 years", "8-14 years"],
        answer: "12-18 years"
    },
    {
        text: "On average how many hours do cats sleep in a day?",
        options: ["8", "10", "15", "20"],
        answer: "15"
    },
    {
        text: "What is the normal body temperature of a cat?",
        options: ["98°F", "102°F", "94°F", "106°F"],
        answer: "102°F"
    },
    {
        text: "What is the proper term for a group of Kittens?",
        options: ["kindle", "kettle", "kine", "kaboodle"],
        answer: "kindle"
    },
    {
        text: "What is the largest breed of cat?",
        options: ["Savannah", "British Shorthair", "Ragdoll", "Maine Coon"],
        answer: "Maine Coon"
    },
];


function renderQuestion() {
    var question = questions[questionIndex];
    questionText.textContent = question.text;
    questionOptions.innerHTML= "";

    // We want to loop through all questions of the array
    for (var i = 0; i < questions.length; i++) {
        var btn = document.createElement("button"); 
        btn.setAttribute("class", "btn btn-danger btn-sm"); 
        btn.setAttribute("value", question.options[i]);
        btn.textContent = question.options[i];
        questionOptions.append(btn);
    }
} 

document.body.addEventListener('click', function (e) { 
    if (!e.target.matches(".question-option")) return; 
    var value = e.target.value; 
    if (questions[questionIndex].answer === value) { 
        console.log("correct");
    }else { 
        console.log("wrong")
    }

});