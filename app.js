/////////////////////////////
// Coding Challenge

/*
----- Fun Quiz Game -------

1. Build a function constructor called Question to describe a question. A qeustion should include:
a. Question
b. The answer from which the player can choose the correct one. (Choose an adequate data
    structore here, array object, etc)
c. correct answer

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each qeustion should have a number)
(Hint: write a method for the question objects for this task)

5. use the 'prompt' function to ask the user for the correct answer. The user should input the
number of the correct answer such as you displayed it on Task 4

6. Check if the answer is correct and print to the console whether the answer is correct or not
(Hint: write another method for this)

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that
all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique
    to do exactly that).


    --- Expert Level ----
    8. After you display the result, display the next random question, so that the game never ends
    (Hint: write a function for this and call it right after displaying the result)

    9. Be careful: after Task 9, the game literally never ends. So include the option to quit the game if the user writes 'exit' 
    instead of the answer. In this case, Don't call the function from task 8

    10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score
    (Hint: I'm going to use the power of closures for this, but you don't have to, just do this 
    with the tools you feel more comfortable at this point)

    11. Display the score in the console. Use yet another method for this. 

*/
(function(){
    //Constructor Question

    function Question(question, answers, correctAns){

        this.question = question;
        this.answers = answers;
        this.correctAns = correctAns;

    }

    Question.prototype.displayQuestion = function(){
        console.log(this.question);

        for(var i = 0; i < this.answers.length; i++){
            console.log(this.answers[i]);
        }
    }

    Question.prototype.checkAnswers = function(ans, fn){
        var score;

        if(ans == this.correctAns){
            console.log("Congratulation ! You Won");
            score = fn(true);
        }else{
            console.log("Sorry try Again !");
            score = fn(false);
        }

        this.displayAns(score);
    }

    Question.prototype.displayAns = function(score){
        console.log("Your current score is: "+ score);
        console.log("=-----------------------------------------=")
    }

    //Question Objects

    var ques1 = new Question("Which is the Most Beautiful Library in JS in context of UI designing?", ["1. React JS","2. Vue JS", "3. Angular"], 1);
    var ques2 = new Question("Which is the Most Beautiful Language?", ["1. JavaScript","2. Python", "3. Php"], 1);
    var ques3 = new Question("Who is the founder of JavaScript?", ["1. Dennis Ritchie","2. Bjarne Stroustrup", "3. Brendan Eich"], 3);

    //Storing in an array;
    var quesArray = [ques1, ques2, ques3];

    // Closure and First Class function
    function score(){
        var sc = 0;
        return function(status) {
            if(status){
                sc++;
            }
            return sc;
        }
    }

    var updateScore = score();

    nextQuestion();

    function nextQuestion(){
         //Generating Random number
         var quesNo = Math.floor(Math.random() * 3) ;

         //Displayed Question
         quesArray[quesNo].displayQuestion();
 
         //Asked answer
         var ans = prompt("Which is the correct answer ?");
 
         if(ans != 'exit'){
              //Validate Answer
            quesArray[quesNo].checkAnswers(parseInt(ans), updateScore);

            nextQuestion();
         }
    }


    
    // nextQuestion();

    // console.log(state);

})();
