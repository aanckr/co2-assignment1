const quiz1 = document.getElementById("quiz1");
const quiz2 = document.getElementById("quiz2");
const quiz3 = document.getElementById("quiz3");
const quiz4 = document.getElementById("quiz4");
const quiz5 = document.getElementById("quiz5");
const summaryPage = document.getElementById("summaryPage");
const finishBtn = document.getElementById("finish-btn").value;
const noQuestion = document.getElementById("noQuestionAnswered");
const emailWindow = document.getElementById("emailWindow");
const emailInput = document.getElementById("emailInput");
const sendBtn = document.getElementById("sendBtn");


quiz2.hidden = true;
quiz3.hidden = true;
quiz4.hidden = true;
quiz5.hidden = true;
summaryPage.hidden = true;
noQuestion.hidden = true;
emailWindow.hidden = true;



let score = 0;
let index = 0;
let count = 0;
let answers = [];



function validate(value, userAnswer){

   if (value === true){
      score += 2;
   }

   answers.push(userAnswer);

   console.log(userAnswer);

   console.log(score);

   nextQuestion()

}

function validateTextAnswer(){

  let value = document.getElementById("textField").value;

  if(!value){
     value = "Question skipped";
     count++;
  }

   if(value === 'Artificial Intelligence'){
      score += 2;
   }

   answers.push(value);
}

function nextQuestion(){

   index++;

   switch (index){
      case 1:
         quiz1.hidden = true;
         quiz2.hidden = false;
         break;
      case 2:
         quiz2.hidden = true;
         quiz3.hidden = false;
         break;

      case 3:
         quiz3.hidden = true;
         quiz4.hidden = false;
         break;

      case 4:
         quiz4.hidden = true;
         quiz5.hidden = false;
         break;
   }
}
function skipQuestion(){
   nextQuestion()

   count++
   console.log(count);


   const answer = "Question skipped";

   answers.push(answer);
}

/*function skipCount(){
   let value = document.getElementById("textField").value;

   if (finishBtn.click && value == ''){
      count++
   }

   console.log(count);

   if (count >= 5){
      noQuestion.hidden = false;
      summaryPage.hidden = true;
      emailWindow.hidden = true;
   }
}*/

function summary(){
   validateTextAnswer();

   const appWindow = document.getElementById("app");

   if (count >= 5){
      noQuestion.hidden = false;
      summaryPage.hidden = true;
      emailWindow.hidden = true;
      appWindow.hidden = true;
   }else {
      emailWindow.hidden = false;
      document.getElementById("app").hidden = true;
      summaryPage.hidden = false;

      document.getElementById("score").innerHTML = score;
      const correctAnswers = document.getElementsByClassName("correctAnswer");

      for(let i = 1; i <= answers.length; i++){
         const answer = document.getElementById("answer"+i);
         answer.innerHTML = answers[i-1];


         if (correctAnswers[i-1].innerHTML === answers[i-1]){
            answer.style.color = "green";
         }else {
            answer.style.color = "red";
         };
      }
   }
}

function emailQuestion(){
   emailInput.style.display = "unset";
   sendBtn.style.display = "unset";
}