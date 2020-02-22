// FUNCTION RESTART THE GAME 

// const restart = document.getElementById("spinoza");
// restart.addEventListener("click", refresh);

// function refresh() {
//     console.log('refresh')
// };

// SELECT RANDOM QUESTION 

let currentQuestion

function selectRandom(array) {
    currentQuestion = Math.floor(Math.random()*questions.length)
    return array[currentQuestion];
};

selectRandom(questions);

// MAIN FUNCTION of the GAME

const openCards = document.getElementsByClassName('column');
for(let i =0; i < openCards.length; i++) {
    openCards[i].addEventListener("click", function() {
        let a = selectRandom(questions);
        if(a){
        openDiv();
        populateQuestion(a);
        }
        else{
        document.getElementById("questionsContainer").innerHTML = `<img src="./Photos/Heidegger.jpg"/>`;
        openDiv();
        }
        
    });
};

// FUNCTION THAT OPENS THE CONTAINER WITH QUESTIONS 

function openDiv() {
    const openDiv = document.getElementById("questionsContainer");
    if (openDiv.style.display === '' || openDiv.style.display === 'none') {
        openDiv.style.display = "block";
    }
};

// FUNCTION RETURN TO HOME

function closeDiv() {
    const closeDiv = document.getElementById("questionsContainer");
    closeDiv.style.display = "none";
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
        
        setTimeout(()=>{
            for(let i = 0; i < this.children.length; i++) {
                this.children[i].style.background = ""
            }
            let array = questions.filter(item=> item.id !== questions[currentQuestion].id);
            questions = array;
            progressBar(); //TESTING OUT PROGRESS BAR
            closeDiv();
        },1500)
        
    } else {
        e.target.style.background = 'red';
    } 
});

var height = 0;

function progressBar() {
    var elem = document.getElementById("progress-bar");
    
    if (height >= 400) {
        height = 0;
    } else {
        height++;
        elem.style.height = height * 20 + "px";
    }    
}









