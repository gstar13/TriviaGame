$(document).ready(function() {
    $("label").hide();
    $("#questionsCorrectBox").hide();
    var now = 30;
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
        {
        questionFour : "Some believe that the legendary Atlantis may have been part of the an island known today as Thera. By what other name is this island known today",
        answerFour :["Mykonos","Crete","Santorini","Sicily"]
        },
        {
        questionFive : "The tar of La Brea are a rich source of Pleistocene Fossils. In which state of the United States are these pits located",
        answerFive : ["Hawaii","Nevada","California","Wyoming"]
        }]

///define fxns
    function newGame () {
        $("#start").on('click', (function () {
            $(this).hide();
            
            $("label").show();
            $("#questionOne").append(questionsAndAnswers[0].questionOne);
            $("#questionTwo").append(questionsAndAnswers[1].questionTwo);
            $("#questionThree").append(questionsAndAnswers[2].questionThree);
            $("#questionFour").append(questionsAndAnswers[3].questionFour);
            $("#questionFive").append(questionsAndAnswers[4].questionFive);
            console.log(questionsAndAnswers[4]);
           
            
            intervalId =  setInterval (decrement, 1000);
            }));     
    console.log("the newGame fxn is running"); 
};
    function decrement(){
        now--;
        $("#timer").html("Timer: " + now + " Seconds Left.");
        console.log("the decrement fxn is about to run"); 
        if (now===0){
            clearInterval(intervalId); 
            $('#timer').empty();      
            
        
            var answerChosenOne = $('#questionOnea input:checked').val();         
            var answerChosenTwo = $('#questionTwoa input:checked').val();           
            var answerChosenThree = $('#questionThreea input:checked').val();
            var answerChosenFour = $('#questionFoura input:checked').val();
            var answerChosenFive = $('#questionFivea input:checked').val();

            correctAnswers.push(answerChosenOne);
            correctAnswers.push(answerChosenTwo);
            correctAnswers.push(answerChosenThree);
            correctAnswers.push(answerChosenFour);
            correctAnswers.push(answerChosenFive);
            console.log(correctAnswers);
            if (answerChosenOne === "3"){
                    correct++;
                    console.log(correct);
            }
            if (correctAnswers[0]  !==  "3") {
                incorrect++;
                console.log(incorrect);
            }
            if (correctAnswers[1] === "2"){
                correct++;
                console.log(correct);
            }
            if (correctAnswers[1]  !== "2") {
                incorrect++;
                console.log(incorrect);
               
            }
           
            if (correctAnswers[2] === "1"){
                correct++;
                console.log(correct);
            }
            if (correctAnswers[2]  !== "1") {
            incorrect++;
            console.log(incorrect); 
        }   
        if (correctAnswers[3]  === "3") {
            correct++;
            console.log(correct);  
        }   
        if (correctAnswers[3]  !== "3") {
            incorrect++;
            console.log(incorrect);
        }
        if (correctAnswers[4]  === "4") {
            correct++;
            console.log(correct);   
        }
        if (correctAnswers[4]  !== "4") {
            incorrect++;
            console.log(incorrect);
        }   
        
        //hide the questions
        $("#questionOne").hide();
        $("#questionTwo").hide();
        $("#questionThree").hide();
        $("#questionFour").hide();
        $("#questionFive").hide();

            //display the user totals
            $("#questionsCorrectBox").show();
            $("#totalCorrect").append(correct);
            $("#wrongAnswers").append(incorrect);
           stop();  
    }
}

     function stop() {   
        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
            $("#start").hide();    
            $('form').empty();
            $("timer").empty();
          
      }
    
})
  

