// HTML variables  
var startQuizBtn = document.querySelector("#start-quiz");
var questionText = document.querySelector("#question-text");
var startPrompt = document.querySelector("#start-prompt");
var questionPrompt = document.querySelector("#question-prompt");
var questionOptions = document.querySelector("#question-options");
var timerContainer = document.querySelector("#timer-container");
var timeSpan = document.querySelector("#time");
var score = 0

// Data variables
var questionIndex = 0
var time = 60
var timer;

// List of question, options, and correct answer 
var questions = [
    {
        text: "What is the average life span of a cat?",
        options: ["12-18 years", "9-15 years", "20-25 years", "8-14 years"],
        answer: "12-18 years",
    },
    {
        text: "On average how many hours do cats sleep in a day?",
        options: ["8 hours", "10 hours", "15 hours", "20 hours"],
        answer: "15 hours",
    },
    {
        text: "What is the normal body temperature of a cat?",
        options: ["98°F", "102°F", "94°F", "106°F"],
        answer: "102°F",
    },
    {
        text: "What is the proper term for a group of Kittens?",
        options: ["Kindle", "Kettle", "Kine", "Kaboodle"],
        answer: "Kindle",
    },
    {
        text: "What is the largest breed of cat?",
        options: ["Savannah", "British Shorthair", "Ragdoll", "Maine Coon"],
        answer: "Maine Coon",
    },
];



// When start quiz button is clicked,
startQuizBtn.addEventListener("click", function () {
    console.log('started')
    // Hide start prompt  
    startPrompt.style.visibility = "hidden";
    // Show question prompt
    questionPrompt.style.visibility = "visible";
    // populate questions prompt with first question  
    renderQuestion();
    // start timer 
    startTimer();

})

//Functions 

function renderQuestion() {
    // Get reference to object 
    var question = questions[questionIndex];
    // Display question 
    questionText.textContent = question.text;
    // Empty out #question-options div 
    questionOptions.innerHTML = "";

    // We want to loop through all questions of the array
    for (var i = 0; i < question.options.length; i++) {
        var btn = document.createElement("button");
        btn.setAttribute("class", "btn btn-danger btn-sm question-options");
        btn.setAttribute("value", question.options[i]);
        btn.textContent = question.options[i];
        questionOptions.append(btn)

    }


}

function startTimer() {
    timerContainer.style.visibility = "visible";
    timeSpan.textContent = time;
    timer = setInterval(function () {
        time--;
        timeSpan.textContent = time;
        if (time === 0 || questionIndex > 4)  {
            endGame(); 
        }
    }, 1000);
}

function endGame() { 
    alert("Quiz over!");
    clearInterval(timer);
    // Give score = leftover time  
    score === time
    // Hide timer container
    timerContainer.style.visibility = "hidden";
    // Alert user of their final score
    alert("your score is " + time)
    // Hide question and options 
    questionPrompt.style.visibility = "hidden";
   
}

// check if user answer is correct or incorrect  
document.body.addEventListener("click", function (e) {
    if (!e.target.matches(".question-options")) return;
    var value = e.target.value;
    if (questions[questionIndex].answer === value) {
        console.log("correct");
    } else {
        console.log("wrong");
        time -= 10;
        timeSpan.textContent = time;
    }
    questionIndex++; 
    renderQuestion();
    

});
