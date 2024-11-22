const decrementBtn = document.getElementById("decrement")
const incrementBtn = document.getElementById('increment')
const counterElement = document.getElementById('counter')
let count = 0

function handleDecrementClick(){
    counterElement.innerText = --count
}
function handleIncrementClick(){
    counterElement.innerText = ++count
}
incrementBtn.addEventListener('click', handleIncrementClick)
decrementBtn.addEventListener('click', handleDecrementClick)