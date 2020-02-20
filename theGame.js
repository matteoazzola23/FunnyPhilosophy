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
        populateQuestion(a);
    });
};

// FUNCTION THAT OPENS THE CONTAINER WITH QUESTIONS 

function openDiv() {
    const openDiv = document.getElementById("questionsContainer");
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

const reply = document.querySelector('#questionsBox');
reply.addEventListener("click", function(e){

    if(e.target.id === questions[currentQuestion].correct) {
        e.target.style.background = 'green';
        console.log('correct answer');
        
        setTimeout(()=>{
            for(let i = 0; i < this.children.length; i++) {
                this.children[i].style.background = ""
            }
            console.log("friend", questions[currentQuestion])

            let array = questions.filter(item=> item.id !== questions[currentQuestion].id)
            questions = array
            closeDiv();
        },1000)
        
    } else {
        e.target.style.background = 'red';
    } 
});

// FUNCTION RETURN TO HOME

function closeDiv() {
    const closeDiv = document.getElementById("questionsContainer");
    closeDiv.style.display = "none";
};



// ADJUST FUNCTION REFRESH

// FUNCTION POINTS





