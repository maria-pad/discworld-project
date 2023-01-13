function finishFunction() {
  alert("Thank you for completing the quiz.");
}

function validateRadio() {
  // Check a value is present for the groups of radio buttons:
  var radioQ1 = document.forms.WizardsQ.elements.WizardQ1.value;
  var radioQ2 = document.forms.WizardsQ.elements.WizardQ2.value;
  var radioQ3 = document.forms.WizardsQ.elements.WizardQ3.value;
  var radioQ4 = document.forms.WizardsQ.elements.WizardQ4.value;
  var radioQ5 = document.forms.WizardsQ.elements.WizardQ5.value;
  //if there is no value present an alert will appear in the browser:
  if (radioQ1 === "") {
    alert("One answer button must be selected for Question 1");
    return false;
  }
    else if (radioQ2 === "") {
    alert("One answer button must be selected for Question 2");
    return false;
  }
  else if (radioQ3 === "") {
    alert("One answer button must be selected for Question 3");
    return false;
  }
  else if (radioQ4 === "") {
    alert("One answer button must be selected for Question 4");
    return false;
  }
  else if (radioQ5 === "") {
    alert("One answer button must be selected for Question 5");
    return false;
  }
else{
    return true;
  }
}


function checkAnswers(){
  //assign 0 to the score variable
  var score = 0
  //assign the quiz elements to the quiz variable:
  quiz = document.forms.WizardsQ.elements;
  //assign the answer to the question to variables and check:
  answerQ1 = quiz.WizardQ1.value;
    // Check the answer to the first question:
    if (answerQ1 == "Q1Answer3"){
        //Add 1 to the score if the user was correct
      score = score + 1;
 }
   
  answerQ2 = quiz.WizardQ2.value;
   if (answerQ2 == "Q2Answer4"){
       //Add 1 to the score if the user was correct
      score = score + 1;
    }
    
    
  answerQ3 = quiz.WizardQ3.value;
   if (answerQ3 == "Q3Answer1"){
       //Add 1 to the score if the user was correct
      score = score + 1;
  }
  answerQ4 = quiz.WizardQ4.value;
   if (answerQ4 == "Q4Answer1"){
       //Add 1 to the score if the user was correct
      score = score + 1;
  }
  
  answerQ5 = quiz.WizardQ5.value;
   if (answerQ5 == "Q5Answer3"){
       //Add 1 to the score if the user was correct
      score = score + 1;
  }
  
  //return the score value as part of an alert in the browser
  alert("Your score is " + score);
  showFeedback(score);
}

function showFeedback(score){
  //assign the area of the form to the feedback variable. getElementsByTagName will return a list so [0] is used to access the first (and only) element.
  feedback = document.getElementsByTagName("form")[0]
  //replace the HTML content inside the form tag with a heading displaying the score
  if (score === 0){
    feedback.innerHTML = '<h2>Sorry, your score is... 0, The Lugagge is not happy! </h2>';
} else if (score < 5){
    feedback.innerHTML = '<h2>The Lugagge is coming... your score is ' + score + '</h2>';
} else {
    feedback.innerHTML = '<h2>Congratulations, you are ready to enter the Unseen University!! Your score is... ' + score + '</h2>';
}
}

function quizCheck() {
  if (validateRadio()) {
       alert("Thank you for completing the quiz.");
       checkAnswers();
  }
  else 
       alert("Please complete incomplete entries");

}