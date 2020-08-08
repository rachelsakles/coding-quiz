//create variables 
var startQuizBtn = document.querySelector("#start-quiz");
var startPrompt = document.querySelector("#start-prompt");
var questionPrompt = document.querySelector("#question-prompt");

// List of question and options 
var questions = [
    {
        question: "What is the average life span of a cat?",
        options: ["12-18 years", "9-15 years", "20-25 years", "8-14 years"],
        answer: "12-18 years"
    },

]; 
var questionIndex = 0;



// When start quiz button is clicked,
startQuizBtn.addEventListener("click", function (e) { 
// Hide start prompt 
startPrompt.getElementsByClassName.display= "none"; 
// Show question prompt 
questionPrompt.getElementsByClassName.display = "block"; 
// Show questions prompt with the first question 
renderQuestion();   

})  

function renderQuestion() { 
    varquestion = question[questionIndex]; 
    questionOptions = question.options;
} 


// User starts with quiz title and start quiz button 
// When user hits start quiz button the title and button dissappear 
// Timer begins and questions pop up 
// If user answers correctly the next question pops up- alert correct 
// If user gets a question wrong 5 seconds are subtracted from time and next question pops up-alert wrong