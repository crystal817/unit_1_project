let count2 = 1;

// const restartBtn = document.getElementById('restart');
// const nextBtn = document.getElementById('next');
// const submitBtn = document.getElementById('submit');
// const options = document.querySelector('.options');
// const userScore=document.getElementById('user-score');
// const questionContainer = document.getElementById('question-container');
const questionText2 = document.getElementById('question-text2')

const choice7 = document.getElementById('choice7');
const choice8 = document.getElementById('choice8');
const choice9 = document.getElementById('choice9');

// const countTracker1 = document.getElementById('count')
// console.log(countTracker1)

// let checkAnswer1 = [];


// restartBtn.addEventListener('click',restart);
// submitBtn.addEventListener('click',submit);
// options.addEventListener('click',choice1);


function game() {
    return  questionText2.innerHTML = question[2].question,
        choice7.innerHTML = question[2].choices[0].incorrect1,
        console.log('choice7'),
        console.log(choice7),
        choice8.innerHTML = question[2].choices[0].incorrect2,
        choice9.innerHTML = question[2].choices[1].correct
    }

game()


choice7.addEventListener('click',function(){
    checkAnswer = choice7
    alert("incorrect");
})

choice8.addEventListener('click',function(){
    checkAnswer = choice8
    console.log(checkAnswer)
    
    alert("incorrect");
})

choice9.addEventListener('click',function(){
    checkAnswer = choice9

    countTracker.innerText = count++
    console.log(count)
    alert("correct");
})












// console.log(question);








