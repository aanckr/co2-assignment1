const quiz1 = document.getElementById("quiz1");
const quiz2 = document.getElementById("quiz2");
const quiz3 = document.getElementById("quiz3");
const quiz4 = document.getElementById("quiz4");
const quiz5 = document.getElementById("quiz5");
const summaryPage = document.getElementById("summaryPage");
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

skipCount()

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

  value = value ? value : "Question skipped"
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

   const answer = "Question skipped";

   answers.push(answer);
}

function skipCount(){

   let button = document.getElementsByClassName("skip-btn");

   let value = document.getElementById("textField");
   if (value == ''){
      count++
   };

   if (count >= 5){
      document.getElementById("app").hidden = true;
      document.getElementById("noQuestionAnswered").hidden = false;
   }
}

function summary(){

   emailWindow.hidden = false;
   validateTextAnswer();
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

function emailQuestion(){
   emailInput.style.display = "unset";
   sendBtn.style.display = "unset";
}


const element = document.getElementsByClassName("themeBtn");
element.addEventListener("click", changeTheme);

function changeTheme(sheet){
   document.getElementById('theme').setAttribute('href', sheet);
}

  /* let changeTheme = document.getElementsByTagName('link')[0];

   if (changeTheme.getAttribute('href') == "lightTheme.css"){
      changeTheme.setAttribute('href', "darkTheme.css");
   }else {
      changeTheme.setAttribute('href', "lightTheme.css");
   }
}*/