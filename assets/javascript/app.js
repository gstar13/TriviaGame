$(document).ready(function() {
    $("label").hide();
    var now = 15;
    console.log(now);
    var intervalId;
  newGame();
  ///create variables and arrays
  var correct  = 0;
  var incorrect = 0;
  var correctAnswers= []; 
  //creating variables that hold references to places in the HTML where we want to display things.

  var questionsAndAnswers = [ {
    
        questionOne: "China’s Terracotta Army depicts the soldiers of what emperor?",
        answerOne : ["Emperor Qin Shi Huang","Emperor Jiajing","Emperor Taichang","Emperor Li Shimin"]
        },
        {
        questionTwo : "The Rosetta Stone made the translation of Egyptian hieroglyphics possible because a passage of hieroglyphics was also written in what other language?",
        answerTwo : [ "Latin","Hebrew","Ancient Greek","French"]
        },
        {
        questionThree : "A long hidden cave with Ice Age art covering its walls was discovered in 1940 at which site?",
        answerThree : ["Cannes","Lascaux","Fontainebleu","Dijon"]  
        },
        ];
///list onclick functions
$('#restart').on('click', function(){
    $(this).hide();
    $("#start").show();
    $('#timer').empty();
    $("#restart").show();
    $("label").hide();
    now=15;
    newGame();
   
});
$('#stopGame').on('click', function(){
    $(this).stop();
    console.log("this");
});
///define fxns
    function newGame () {
        $("#start").on('click', (function () {
            $(this).hide();
            $("label").show();
            $("#questionOne").append(questionsAndAnswers[0].questionOne);
            $("#questionTwo").append(questionsAndAnswers[1].questionTwo);
            $("#questionThree").append(questionsAndAnswers[2].questionThree);
            console.log(questionsAndAnswers[0]);
            $('#totalCorect').empty();
            $('#wrongAnswers').empty();
            
            intervalId =  setInterval (decrement, 1000);
            }));
            console.log("hi");
    
    console.log("the newGame fxn is running"); 
};
    function decrement(){
        now--;
        $("#timer").html("Timer: " + now + " Seconds Left.");
        if (now===0){
            clearInterval(intervalId);       
            alert("Time's Up");
            console.log("hi from other side");
           stop();  
    }
}
     function stop() {
            var answerChosenOne = $('#questionOnea input:checked').val();         
            var answerChosenTwo = $('#questionTwoa input:checked').val();           
            var answerChosenThree = $('#questionThreea input:checked').val();
            correctAnswers.push(answerChosenOne);
            correctAnswers.push(answerChosenTwo);
            correctAnswers.push(answerChosenThree);
            console.log(correctAnswers);
            if (correctAnswers[0] === 3){
                    correct++;
                    console.log(correct);
            }
            if (correctAnswers[0]  ===! 3) {
                incorrect++;
                console.log(incorrect);
            }
            if (correctAnswers[1] === 2){
                correct++;
                console.log(correct);
            }
            if (correctAnswers[1]  ===! 2) {
                incorrect++;
                console.log(incorrect);
            }
            console.log(incorrect);
            if (correctAnswers[2] === 1){
                correct++;
        }if (correctAnswers[2]  ===! 1) {
            incorrect++;
        }   
            //display the user totals
            $("#totalCorrect").append(correct);
            $("#wrongAnswers").append(incorrect);
            
        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
            $("#start").show();
            $('#restart').show();
            $('form').empty();
            $("timer").empty();
      }
    
})


  

