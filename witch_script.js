function markWitch() {
  if (validateWitch_Quiz()) {
       checkWitch_Quiz();
  }
}




function validateWitch_Quiz() {
  // Check a value is present for the groups of radio buttons:
  var WitchQ1 = document.forms.Witch_Quiz.elements.WitchQ1.value;
  var WitchQ2 = document.forms.Witch_Quiz.elements.WitchQ2.value;
  var WitchQ3 = document.forms.Witch_Quiz.elements.WitchQ3.value;
  var WitchQ4 = document.forms.Witch_Quiz.elements.WitchQ4.value;
  var WitchQ5 = document.forms.Witch_Quiz.elements.WitchQ5.value;
  //if there is no value present an alert will appear in the browser:
  if (WitchQ1 === "" || WitchQ2 === "" || WitchQ3 === "" || WitchQ4 === "" || WitchQ5 === "") {
    alert("Please select an answer for each question");
    return false;
  }
  else{
    return true;
  }
}

function checkWitch_Quiz(){
  //assign 0 to the score variable
  var score = 0;
  //assign the quiz elements to the quiz variable:
  quiz = document.forms. Witch_Quiz.elements;
  //assign the answer to the question to variables and check:
  answerQ1 = quiz.WitchQ1.value;
    // Check the answer to the first question:
    if (answerQ1 == "WitchQ1A1"){
        //Add 1 to the score if the user was correct
      score = score + 1;
 }
  answerQ2 = quiz.WitchQ2.value;
   if (answerQ2 == "WitchQ2A4"){
       //Add 1 to the score if the user was correct
      score = score + 1;
    }
  answerQ3 = quiz.WitchQ3.value;
   if (answerQ3 == "WitchQ3A2"){
       //Add 1 to the score if the user was correct
      score = score + 1;
    }
  answerQ4 = quiz.WitchQ4.value;
   if (answerQ4 == "WitchQ4A4"){
       //Add 1 to the score if the user was correct
      score = score + 1;
    }
  answerQ5 = quiz.WitchQ5.value;
   if (answerQ5 == "WitchQ5A3"){
       //Add 1 to the score if the user was correct
      score = score + 1;
    }
  //return the score value as part of an alert in the browser
  //feedback.innerHTML = '<h2>your score was ' + score + '</h2>';
  feedbackWitch_Quiz(score);

  // alert (score);
}


function feedbackWitch_Quiz(score){
  //assign the area of the form to the feedback variable. getElementsByTagName will return a list so [0] is used to access the first (and only) element.
  feedback = document.getElementsByTagName("form")[0];
  //replace the HTML content inside the form tag with a heading displaying the score
  if (score === 0){
    feedback.innerHTML = '<h2>Into the cauldron you go! Your score was 0!</h2>';
} else if (score < 5){
    feedback.innerHTML = '<h2>Time to join a coven! Your score was ' + score + '</h2>';
} else {
    feedback.innerHTML = '<h2>You must be a witch! You got every question correct!</h2>';
}
}










