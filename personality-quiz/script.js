/*Add your JavaScript here*/
var introvertScore = 0; //store the introvert score
var extrovertScore = 0; //store the extrovert score

var questionCount = 0; //store the number of answers clicked on

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1"); 
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2"); 

q1a1.addEventListener("click", introvert); 
q1a2.addEventListener("click", extrovert); 

q2a1.addEventListener("click", extrovert);
q2a2.addEventListener("click", introvert); 

q3a1.addEventListener("click", extrovert);
q3a2.addEventListener("click", introvert);

function introvert() {
introvertScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " introvertScore = " + introvertScore); 
  if (questionCount == 3) {
  console.log("The quiz is done!") 
    updateResult();
  
} 
}






function extrovert() {
  extrovertScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " extrovertScore = " + extrovertScore); 
  if (questionCount == 3) {
    console.log("The quiz is done!") 
    updateResult();
  }
}

  


//update your quiz result
function updateResult() {
    if (introvertScore >= 2) {
      result.innerHTML = "You are an introvert";
      
  console.log("You are an introvert"); 
      
} else if (extrovertScore >=2) {
      result.innerHTML = "You are an extrovert";
      
  console.log("You are an extrovert"); 
    }
}





