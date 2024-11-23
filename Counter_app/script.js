let count=0;
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

function increaseCount(){
    count=count+1;
    counterElement.innerText = count;
}
function decreaseCount(){
    count=count-1;
    counterElement.innerText = count;
}
incrementButton.addEventListener('click',increaseCount);
decrementButton.addEventListener('click',decreaseCount);