var timer = document.getElementById('countdown');
var ticker;
var timeInterval;
var questionIndex = 0;
var choicesIndex;
var questionQue= document.getElementById("qmup")
var choicesDiv = document.getElementById("choices")
var desiDiv = document.querySelector('#desicion')
document.getElementById("desicion").style.paddingTop = "25px";
var scoreDisplay = document.getElementById("score-display")
// scoreDisplay.textContent = score;
var score = 0;
var initials;
var storageArr = JSON.parse(localStorage.getItem("High-scores")) || []




var questions = 
[
    {
        question: "Inside which HTML element do we put the Javascript?",
        choices:["scripting", "javascript", "script", "js"],
        answer: "script"
    },
    {
        question: "Where is the correct place to insert a javascript?",
        choices:["both, head section and body section", "the body section", "the head section"],
        answer: "both, head section and body section"
    },
    {
        question: "What is the correct syntax for referring to an external script called xxx.js?",
        choices:["script href='xxx.js'", "script name= 'xxx.js'", "script src= 'xxx.js'"],
        answer: "script name= 'xxx.js'"
    },
    {
        question: "The external JavaScript file must contain the 'script' tag.?",
        choices:["True", "False"],
        answer: "False"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choices:["msgBox('Helo World');" , "alert('Hello World');", "alertBox('Hello World');", "msg('Hello World');"],
        answer: "alert('Hello World');"
        
    },

];

function askQuestions(){
    var currentQuestion = questions[questionIndex]
    questionQue.textContent = currentQuestion.question;
    choicesDiv.innerHTML = "";

    for (var i = 0; i < currentQuestion.choices.length; i++){
        var currentChoice = currentQuestion.choices[i] ;
        var button = document.createElement("button")
        button.textContent = currentChoice;
        button.setAttribute("value", currentChoice)
        button.onclick = correctAnswer
        choicesDiv.append(button)
        console.log (currentChoice)
    } 
    
    if (ticker <= 1){
        endOfQuiz();
    }

}

function correctAnswer(){

    if (this.value !== questions[questionIndex].answer){
        ticker -= 3;
        desiDiv.textContent= "Incorrect";    
    } else if(this.value === questions[questionIndex].answer){
        desiDiv.textContent= "Correct!";
        score += 100;
        updateScore();
    }
    questionIndex++

    if (questionIndex === questions.length){
        clearInterval(timeInterval);
        questionQue.textContent = "";
        choicesDiv.textContent = "";
        timer.textContent = "";
        endOfQuiz();
    } else {
        askQuestions();
    }
}


// function countdown() {
document.getElementById("btn").addEventListener("click", function () {
    ticker = 20;
    timeInterval = setInterval(function () {
        if (ticker > 1){
            timer.textContent = ticker + ' seconds remaining';
            ticker--;   
        } else if (ticker === 1) {
            timer.textContent = ticker + ' second remaining';
            ticker--;
        } else {
            timer.textContent = '';
            clearInterval(timeInterval);
            questionQue.textContent = "";
            choicesDiv.textContent = "";
            timer.textContent = "";
            endOfQuiz();
        }
    }, 1000);
    askQuestions();
    updateScore();
})

function endOfQuiz(){
    clearInterval(timeInterval);
    
    var okToLogScore = window.confirm(" Here's how you did! Click Ok to log your score. " + score);
    if (okToLogScore) {
        // var btn = document.createElement("button")
        // btn.innerHTML = "Submit";
        // btn.type = "submit";
        // btn.name = "formBtn";
        // document.body.appendChild(btn);

        // var initials = document.createElement("div")
        // initials.innerHTML += "<input type = 'text' id='initial'>";
        var form = document.createElement("form");
        form.setAttribute("id", "initials-form");
            //    form.setAttribute("method", "post");
            //    form.setAttribute("action", "highscore.html")
        initials = document.createElement("input");
        initials.setAttribute("type", "text")
        initials.setAttribute("name", "text")
        initials.setAttribute("placeholder", "Initials")
        var submit = document.createElement("input")
        submit.setAttribute("type", "submit")
        submit.setAttribute("value", "Submit")
        form.appendChild(initials);
        form.appendChild(submit);
        // userInitials = (name."text
        // ");
   

        document.getElementsByTagName("body")[0].appendChild(form);
        form.addEventListener("submit", addInitials);
    }
}

function updateScore(){
      scoreDisplay.textContent = (score + "  points");
  }

function addInitials(e){
    e.preventDefault();
    console.log(initials.value);
    var scoreObject = {
highScore:score, 
name:initials.value
    }
    storageArr.push(scoreObject)
    localStorage.setItem("High-scores", JSON.stringify(storageArr))
    
    // get the initials the user entered into the form + the score from the game
    // write the data to localStorage
    // 

    //location.href = "./highscores.html";
    // if(document.form.onsubmit())
    //localStorage.setItem("Initials", "Score", initials, scoreDisplay);
    //location.href = "file:///C:/Users/jbirk/Documents/bootcamp/homework/jsFundaTime_quiz/index.html";
}
  
// Listens when user enters initials
 

    //   askQuestions()
  
  
  

   

 






  






