
// create several const and get the element from the html document.getElementByID, etc.
// https://www.google.com/search?q=create+a+simple+quiz+in+javascript&oq=create+a+quiz+in+js&aqs=chrome.3.69i57j0l5.10694j0j4&sourceid=chrome&ie=UTF-8#kpvalbx=_TOxCXpODK4HykwWPjKGwDw28

// QUESTIONS 
let questions = [
    {
    question: "bla bla bla?",
    answerA: "BLO",
    answerB: "BLU",
    answerC: "BLI",
    correct: "A"
},

    {
    question: "qui quo qua?",
    answerA: "QUI",
    answerB: "QUADRO",
    answerC: "QUELLO",
    correct: "B",
},

];
// AND SO ON UP TO 20 QUESTIONS


// SELECT RANDOM QUESTION (not sure if it has to go in another js file or not) 

function selectRandom(array) {
    return array[Math.floor(Math.random()*questions.length)];
};

selectRandom(questions);

// THIS WORKS 

// console.log('testone')


//TO CREATE A QUESTION IN THE PAGE

let lastQuestionIndex = questions.lenght-1;
let runningQuestionIndex = 0;

function renderQuestions() {
    let q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}







