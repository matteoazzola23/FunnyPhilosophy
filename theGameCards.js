// QUESTIONS ARRAY
let questions = [
    {
    id:1, 
    question: "bla bla bla?",
    answerA: "BLO",
    answerB: "BLU",
    answerC: "BLI",
    correct: "answerA"
},

    {
    id:2,
    question: "qui quo qua?",
    answerA: "QUI",
    answerB: "QUADRO",
    answerC: "QUELLO",
    correct: "answerA",
},

{   id:3,
    question: "hhhhhhhhhhh?",
    answerA: "YEP",
    answerB: "YET",
    answerC: "YETI",
    correct: "answerB",
},

{   id:4,
    question: "qqqquuuuuua?",
    answerA: "MAYBE",
    answerB: "MAH",
    answerC: "BOH",
    correct: "answerC",
},

];

// AND SO ON UP TO 20 QUESTIONS
// SELECT RANDOM QUESTION (not sure if it has to go in another js file or not) 

let currentQuestion
// let lastQuestionIndex = questions.length - currentQuestion; // Added this one

function selectRandom(array) {
    currentQuestion = Math.floor(Math.random()*questions.length)
    return array[currentQuestion];
};

selectRandom(questions);



