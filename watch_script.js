function markWatch() {
  if (validateWatch()) {
       alert("Thank you for completing the quiz.");
       checkWatch();
  }
}

function validateWatch() {
  // Check a value is present for the groups of radio buttons:
  var WatchQ1 = document.forms.Watch_quiz.elements.WatchQ1.value;
  var WatchQ2 = document.forms.Watch_quiz.elements.WatchQ2.value;
  var WatchQ3 = document.forms.Watch_quiz.elements.WatchQ3.value;
  var WatchQ4 = document.forms.Watch_quiz.elements.WatchQ4.value;
  var WatchQ5 = document.forms.Watch_quiz.elements.WatchQ5.value;
  //if there is no value present an alert will appear in the browser:
  if (WatchQ1 === "" || WatchQ2 === "" || WatchQ3 === "" || WatchQ4 === "" || WatchQ5 === "") {
    alert("Please select an answer for each question");
    return false;
  }
  else{
    return true;
  }
}

function checkWatch(){
  //assign 0 to the score variable
  var score = 0;
  //assign the quiz elements to the quiz variable:
  quiz = document.forms.Watch_quiz.elements;
  //assign the answer to the question to variables and check:
  answerQ1 = quiz.WatchQ1.value;
    // Check the answer to the first question:
    if (answerQ1 == "WatchQ1A3"){
        //Add 1 to the score if the user was correct
      score = score + 1;
 }
  answerQ2 = quiz.WatchQ2.value;
   if (answerQ2 == "WatchQ2A1"){
       //Add 1 to the score if the user was correct
      score = score + 1;
    }
  answerQ3 = quiz.WatchQ3.value;
   if (answerQ3 == "WatchQ3A1"){
       //Add 1 to the score if the user was correct
      score = score + 1;
    }
  answerQ4 = quiz.WatchQ4.value;
   if (answerQ4 == "WatchQ4A2"){
       //Add 1 to the score if the user was correct
      score = score + 1;
    }
  answerQ5 = quiz.WatchQ5.value;
   if (answerQ5 == "WatchQ5A3"){
       //Add 1 to the score if the user was correct
      score = score + 1;
    }
  //return the score value as part of an alert in the browser
  //feedback.innerHTML = '<h2>your score was ' + score + '</h2>';
  feedbackWatch(score);
}

function feedbackWatch(score){
  //assign the area of the form to the feedback variable. getElementsByTagName will return a list so [0] is used to access the first (and only) element.
  feedback = document.getElementsByTagName("form")[0];
  //replace the HTML content inside the form tag with a heading displaying the score
  if (score === 0){
    feedback.innerHTML = '<h2>Arrest this person! Their score was 0!</h2>';
} else if (score < 5){
    feedback.innerHTML = '<h2>You would make a fine sergeant, your score was ' + score + '</h2>';
} else {
    feedback.innerHTML = '<h2>Commander Vimes, is that you? You got every question correct!</h2>';
}
}

