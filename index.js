let count = 1;

const restartBtn = document.getElementById('restart');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const options = document.querySelector('.options');
const userScore=document.getElementById('user-score');
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text')

const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');

const countTracker = document.getElementById('count')
console.log(countTracker)

let checkAnswer = [];


restartBtn.addEventListener('click',restart);
submitBtn.addEventListener('click',submit);
options.addEventListener('click',choice1);


function game() {
    return  questionText.innerHTML = question[0].question,
        choice1.innerHTML = question[0].choices[0].incorrect1,
        choice2.innerHTML = question[0].choices[1].correct,
        choice3.innerHTML = question[0].choices[0].incorrect2
    }

game()


choice1.addEventListener('click',function(){
    checkAnswer = choice1
    alert("incorrect");
})

choice2.addEventListener('click',function(){
    checkAnswer = choice1
    
    countTracker.innerText = count++
    console.log(count)
    alert("Correct");
})

choice3.addEventListener('click',function(){
    checkAnswer = choice1
    alert("incorrect");
})












// console.log(question);









