const buttonIncrement = document.getElementById('increment');
const buttonDecrement = document.getElementById('decrement');
const countNumber =document.getElementById('counter');

let count=0;

function increaseNumber(){

    count++;
    countNumber.innerText= count;

};

function decreaseNumber(){

    count--;
    countNumber.innerText= count;

};

buttonIncrement.addEventListener('click',increaseNumber);
buttonDecrement.addEventListener('click',decreaseNumber);