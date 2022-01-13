/*

    - Add an event listener for the true/false buttons

    - Check if div fact is in true or false array

    - Display result in h1

    - Generate a random number between 0 and 1 to select true or false array

    - Generate a random number to select item from array to display fact

*/

let trueAnswer = ['A cat is a mammal'];

let falseAnswer = ['A dog is a marsupial.'];

let fact = document.getElementById('fact');

fact.innerHTML = trueAnswer[0];

document.getElementById('true').addEventListener('click', checkAnswer);
document.getElementById('false').addEventListener('click', checkAnswer);

function checkAnswer(event) {

    let answer = event.target.value;

    if (trueAnswer.includes(fact.innerText) && answer == 'true' || falseAnswer.includes(fact.innerText) && answer == 'false') {

        document.getElementById('response').innerHTML = 'correct';

    } else {

        document.getElementById('response').innerHTML = 'incorrect';

    }

}