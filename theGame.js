// FUNCTION RESTART THE GAME 

const restart = document.getElementById("spinoza");
restart.addEventListener("click", refresh);

function refresh() {
    console.log('refresh')
};

// FUNCTION THAT LINKS TO RANDOM QUESTIONS

const openCards = document.getElementsByClassName('column');
for(let i =0; i < openCards.length; i++) {
    openCards[i].addEventListener("click", function() {
        openDiv();
        let a = selectRandom(questions);
        // console.log(a);
        populateQuestion(a);
    });
};

// FUNCTION THAT OPENS THE CONTAINER WITH QUESTIONS 

function openDiv() {
    const openDiv = document.getElementById("questionsContainer");
    // console.log(openDiv)
    // console.log(openDiv.style.display)
    if (openDiv.style.display === '' || openDiv.style.display === 'none') {
        openDiv.style.display = "block";
    }
};

// FUNCTION THAT POPULATES QUESTIONS IN THE DIV 

function populateQuestion(question) {
    document.getElementById("questionToAnswer").innerHTML = question.question;
    document.getElementById("answerA").innerHTML = question.answerA;
    document.getElementById("answerB").innerHTML = question.answerB;
    document.getElementById("answerC").innerHTML = question.answerC;
};

// FUNCTION REPLY QUESTIONS

// with this one I select the entire container, included the question.

// const reply = document.querySelector("#questionsContainer");
// reply.addEventListener("click", function(e){
//     // console.log('click')
//     // console.log(e.target.id)
//     // console.log(questions[currentQuestion].correct)
//     if(e.target.id === questions[currentQuestion].correct) {
//         e.target.style.background = 'green';
//         console.log('correct answer')
//     } else {
//         e.target.style.background = 'red';
//     }
// });

const reply = document.querySelector('#questionsBox');
reply.addEventListener("click", function(e){
    // console.log('click')
    // console.log(e.target.id)
    // console.log(questions[currentQuestion].correct)
    if(e.target.id === questions[currentQuestion].correct) {
        e.target.style.background = 'green';
        console.log('correct answer')
        closeDiv(); //testing it out
    } else {
        e.target.style.background = 'red';
    } 
});

// FUNCTION RETURN TO HOME

function closeDiv() {
    const closeDiv = document.getElementById("questionsContainer");
    closeDiv.style.display = "none";
};

// IT WORKS TOO, BUT I CAN'T MANAGE TO GIVE IT A TIMER
// closeDiv(function() {
//     const closeDiv = document.getElementById("questionsContainer");
//         closeDiv.style.display = "none";
//         console.log('timer')
// }, 3000);

// QUESTION: HOW CAN I SET A TIMER?


// FUNCTION DO NOT REPEAT THE PREVIOUS QUESTION

function removeQuestionFromArray() {
   
}



function newQuestion() {
    // probably not needed since it should behave as openDiv.
    // just have to remove the previous question from the array.
}

// const openNewCards = document.getElementsByClassName('card');
// for(let i =0; i < openCards.length; i++) {
//     openCards[i].addEventListener("click", function() {
//         openDiv();
//         let a = selectRandom(questions);
//         // console.log(a);
//         // populateQuestion(lastQuestionIndex);
//         // let b = selectRandom(lastQuestionIndex); // ADDED THIS ONE
//         // populateQuestion(b); // ADDED THIS ONE
//     });
// };

// ADJUST FUNCTION REFRESH

// FUNCTION POINTS





