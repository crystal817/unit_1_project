let count3 = 1;

// const restartBtn = document.getElementById('restart');
// const nextBtn = document.getElementById('next');
// const submitBtn = document.getElementById('submit');
// const options = document.querySelector('.options');
// const userScore=document.getElementById('user-score');
// const questionContainer = document.getElementById('question-container');
const questionText3 = document.getElementById('question-text3')

const choice10 = document.getElementById('choice10');
const choice11 = document.getElementById('choice11');
const choice12 = document.getElementById('choice12');

// const countTracker1 = document.getElementById('count')
// console.log(countTracker1)

// let checkAnswer1 = [];


// restartBtn.addEventListener('click',restart);
// submitBtn.addEventListener('click',submit);
// options.addEventListener('click',choice1);


function game() {
    return  questionText3.innerHTML = question[3].question,
        choice10.innerHTML = question[3].choices[0].incorrect1,
        choice11.innerHTML = question[3].choices[0].incorrect2,
        choice12.innerHTML = question[3].choices[1].correct
    }

game()


choice10.addEventListener('click',function(){
    checkAnswer = choice10
    alert("incorrect");
})

choice11.addEventListener('click',function(){
    checkAnswer = choice11
    
    
    alert("incorrect");
})

choice12.addEventListener('click',function(){
    checkAnswer = choice12

    countTracker.innerText = count++
    console.log(count)
    alert("correct");
})












// console.log(question);





