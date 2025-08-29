const decrementButton =document.getElementById('decrement');
const incrementButton =document.getElementById('increment');

function increment(){
    alert("increment button has been clicked");
}

incrementButton.addEventListener("click",increment);

function decrement(){
    alert("decrement button has been clicked");
}

decrementButton.addEventListener("click",decrement);