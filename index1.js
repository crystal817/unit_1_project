let count1 = 1;

// const restartBtn = document.getElementById('restart');
// const nextBtn = document.getElementById('next');
// const submitBtn = document.getElementById('submit');
// const options = document.querySelector('.options');
// const userScore=document.getElementById('user-score');
// const questionContainer = document.getElementById('question-container');
const questionText1 = document.getElementById('question-text1')

const choice4 = document.getElementById('choice4');
const choice5 = document.getElementById('choice5');
const choice6 = document.getElementById('choice6');

// const countTracker1 = document.getElementById('count')
// console.log(countTracker1)

// let checkAnswer1 = [];


// restartBtn.addEventListener('click',restart);
// submitBtn.addEventListener('click',submit);
// options.addEventListener('click',choice1);


function game() {
    return  questionText1.innerHTML = question[1].question,
        choice4.innerHTML = question[1].choices[0].incorrect1,
        console.log('choice4'),
        console.log(choice4),
        choice5.innerHTML = question[1].choices[0].incorrect2,
        choice6.innerHTML = question[1].choices[1].correct
    }

game()


choice4.addEventListener('click',function(){
    checkAnswer = choice4
    alert("incorrect");
})

choice5.addEventListener('click',function(){
    checkAnswer = choice5
    
    
    alert("incorrect");
})

choice6.addEventListener('click',function(){
    checkAnswer = choice6

    countTracker.innerText = count++
    console.log(count)
    alert("correct");
})












// console.log(question);









