$(document).ready(function() {
    var now = 45;
    console.log(now);
    var intervalId;
    newGame();
    function newGame () {
        $("#start").on('click', (function () {
            $(this).hide();
            intervalId =  setInterval (decrement, 1000); 
            
    $('#question-one').append(questionsAndAnswers[0].questionOne);
    $('#answer1a').append(questionsAndAnswers[0].answerOne[0]);
    $('#answer1b').append(questionsAndAnswers[0].answerOne[1]);
    $('#answer1c').append(questionsAndAnswers[0].answerOne[2]);
    $('#answer1d').append(questionsAndAnswers[0].answerOne[3]);
            if (now === 0) {
                clearInterval(intervalId);
                console.log("hello");
                }
            }));
            console.log("trying to start timer");
       
    


    $('#restart').on('click', function(){
        $(this).hide();
        console.log("trying to stop timer");
       
      
    });
};

var correctAnswers = 0;
var incorrectAnswers = 0;
var currentQuestion = "";
var correctAnswer;

var questionsAndAnswers = [ {
    
    questionOne: "China’s Terracotta Army depicts the soldiers of what emperor?",
    answerOne : ["Emperor Qin Shi Huang","Emperor Jiajing","Emperor Taichang","Emperor Li Shimin"],
    correctAnswerOne: "Qin Shi Huang Emperor"
    },
    {
    questionTwo : "The Rosetta Stone made the translation of Egyptian hieroglyphics possible because a passage of hieroglyphics was also written in what other language?",
    answerTwo : [ "Latin","Hebrew","Ancient Greek","French"],
    correctAnswerTwo : "Ancient Greek",
    },
    {
    questionThree : "A faunal analysis at an archaeological dig produces data relating to which characteristic of the people who lived there?",
    answerThree : [ "physical stature","tribal organization","hunting and dietary practices","religious beliefs and ceremonies"],
    correctAnswerThree : "hunting and dietary practices",
    },
    {
        questionFour : "A long hidden cave with Ice Age art covering its walls was discovered in 1940 at which site?",
        answerOne : ["Cannes","Lascaux","Fontainebleu","Dijon"],
    }];
    
    function decrement(){
        now--;
        $("#timer").html("#timer" + now + "Seconds Left.");
        if (now===0){
            clearInterval(intervalId);  
            console.log("hi from other side");
        }
    }
    
 
    });

    



    
    




