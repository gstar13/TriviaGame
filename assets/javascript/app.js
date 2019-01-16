$(document).ready(function() {
    var now = 45;
    console.log(now);
    var intervalId;
  newGame();

  var correctAnswers = 0;
var incorrectAnswers = 0;
var currentQuestion = "";
var correctAnswer;


    function newGame () {
        $("#start").on('click', (function () {
            $(this).hide();
            $('#correctAnswers').empty();
            $('#wrongAnswers').empty();
            $('#answersSkipped').empty();
            intervalId =  setInterval (decrement, 1000); 
        // right here i think i can make a loop where it i++ on answer One[]     
    $('#questionOne').append(questionsAndAnswers[0].questionOne);
    $('#answerOneA').append(questionsAndAnswers[0].answerOne[0]);
    console.log("why not");
    $('#answer1b').append(questionsAndAnswers[0].answerOne[1]);
    $('#answer1c').append(questionsAndAnswers[0].answerOne[2]);
    $('#answer1d').append(questionsAndAnswers[0].answerOne[3]);

    $('#questionTwo').append(questionsAndAnswers[1].questionTwo);
    $('#answer2a').append(questionsAndAnswers[1].answerTwo[0]);
    $('#answer2b').append(questionsAndAnswers[1].answerTwo[1]);
    $('#answer2c').append(questionsAndAnswers[1].answerTwo[2]);
    $('#answer2d').append(questionsAndAnswers[1].answerTwo[3]);

    $('#questionThree').append(questionsAndAnswers[2].questionThree);
    $('#answer3a').append(questionsAndAnswers[2].answerThree[0]);
    $('#answer3b').append(questionsAndAnswers[2].answerThree[1]);
    $('#answer3c').append(questionsAndAnswers[2].answerThree[2]);
    $('#answer3d').append(questionsAndAnswers[2].answerThree[3]);

            
            }));
            console.log("why dont they append");
       
    


    $('#restart').on('click', function(){
        $(this).hide();
        $("#start").show();
        console.log("trying to stop timer");
       
       
      
    });
};



var questionsAndAnswers = [ {
    
    questionOne: "China’s Terracotta Army depicts the soldiers of what emperor?",
    answerOne : ["Emperor Qin Shi Huang","Emperor Jiajing","Emperor Taichang","Emperor Li Shimin"],
    correctAnswerOne: 0
    },
    {
    questionTwo : "The Rosetta Stone made the translation of Egyptian hieroglyphics possible because a passage of hieroglyphics was also written in what other language?",
    answerTwo : [ "Latin","Hebrew","Ancient Greek","French"],
    correctAnswerTwo : 2
    },
    {
    questionThree : "A long hidden cave with Ice Age art covering its walls was discovered in 1940 at which site?",
    answerThree : ["Cannes","Lascaux","Fontainebleu","Dijon"],
    correctAnswerThree : 1
    },
    ];
    
    function decrement(){
        now--;
        $("#timer").html("Timer: " + now + " Seconds Left.");
        if (now===0){
            clearInterval(intervalId);  
            console.log("hi from other side");
            
            endGame();
            alert("Time's Up");
        }
    }

    function endGame(){
        ///need to stop the timer and reset the form
        $("timer").empty();
      console.log("help");
      $("#input").val();
      console.log(val);
    }
    
    
    
 
    });
  
    



    
    




