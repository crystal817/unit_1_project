let count4 = 1;

// const restartBtn = document.getElementById('restart');
// const nextBtn = document.getElementById('next');
// const submitBtn = document.getElementById('submit');
// const options = document.querySelector('.options');
// const userScore=document.getElementById('user-score');
// const questionContainer = document.getElementById('question-container');
const questionText4 = document.getElementById('question-text4')

const choice13 = document.getElementById('choice13');
const choice14 = document.getElementById('choice14');
const choice15 = document.getElementById('choice15');

// const countTracker1 = document.getElementById('count')
// console.log(countTracker1)

// let checkAnswer1 = [];


// restartBtn.addEventListener('click',restart);
// submitBtn.addEventListener('click',submit);
// options.addEventListener('click',choice1);


function game() {
    return  questionText4.innerHTML = question[4].question,
        choice13.innerHTML = question[4].choices[0].incorrect1,
        choice14.innerHTML = question[4].choices[0].incorrect2,
        choice15.innerHTML = question[4].choices[1].correct
    }

game()


choice13.addEventListener('click',function(){
    checkAnswer = choice13
    alert("incorrect");
})

choice14.addEventListener('click',function(){
    checkAnswer = choice14
    
    
    alert("incorrect");
})

choice15.addEventListener('click',function(){
    checkAnswer = choice15

    countTracker.innerText = count++
    console.log(count)
    alert("correct");
})












// console.log(question);





