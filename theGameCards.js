
// create several const and get the element from the html document.getElementByID, etc.
// https://www.google.com/search?q=create+a+simple+quiz+in+javascript&oq=create+a+quiz+in+js&aqs=chrome.3.69i57j0l5.10694j0j4&sourceid=chrome&ie=UTF-8#kpvalbx=_TOxCXpODK4HykwWPjKGwDw28

// QUESTIONS 
let questions = [
    {
    question: "bla bla bla?",
    answerA: "BLO",
    answerB: "BLU",
    answerC: "BLI",
    correct: "answerA"
},

    {
    question: "qui quo qua?",
    answerA: "QUI",
    answerB: "QUADRO",
    answerC: "QUELLO",
    correct: "answerA",
},

{
    question: "hhhhhhhhhhh?",
    answerA: "YEP",
    answerB: "YET",
    answerC: "YETI",
    correct: "answerA",
},

{
    question: "qqqquuuuuua?",
    answerA: "MAYBE",
    answerB: "MAH",
    answerC: "BOH",
    correct: "answerA",
},

];

// AND SO ON UP TO 20 QUESTIONS
// SELECT RANDOM QUESTION (not sure if it has to go in another js file or not) 

let currentQuestion

function selectRandom(array) {
    currentQuestion = Math.floor(Math.random()*questions.length)
    return array[currentQuestion];
};

selectRandom(questions);



