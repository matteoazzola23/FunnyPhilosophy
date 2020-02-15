// FUNCTION RESTART THE GAME 

const restart = document.getElementById("spinoza");
restart.addEventListener("click", refresh);

function refresh() {
    console.log('refresh')
};

// FUNCTION THAT LINKS TO RANDOM QUESTIONS

const openCards = document.getElementsByClassName('card')
for(let i =0; i < openCards.length; i++) {
    openCards[i].addEventListener("click", function() {
        openDiv();
        let a = selectRandom(questions);
        console.log(a);
        populateQuestion(a)
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
    // console.log("inside populate")
    // const openDiv = document.getElementById("questionsContainer");

    //OPTION ONE 

    // document.querySelectorAll(".la").forEach((item, index)=>{
    //    if(index === 0){
    //        item.innerHTML = question.question
    //    }
    //    if(index === 1){
    //     item.innerHTML = question.answerA
    // }

    //    if(index === 2){
    //     item.innerHTML = question.answerB
    // } 
    //  if(index === 3){
    //     item.innerHTML = question.answerC
    // }
    // })

    // OPTION TWO 

    document.getElementById("questionToAnswer").innerHTML = question.question;
    document.getElementById("answerA").innerHTML = question.answerA;
    document.getElementById("answerB").innerHTML = question.answerB;
    document.getElementById("answerC").innerHTML = question.answerC;
};

// CHECK RANA'S FILE WITH SOUNDS AND INDEX OF IT

// function openTest() {
//     console.log('open')
//     selectRandom(questions);

// };



