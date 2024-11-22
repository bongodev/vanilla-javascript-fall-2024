
let count = 0;

const incrementElement = document.getElementById("increment");
const decrementElement = document.getElementById("decrement");
const counterElement = document.getElementById("counter");
function increaseCount(){
    count = count + 1;
    counterElement.innerText = count;
}

incrementElement.addEventListener('click', increaseCount);
