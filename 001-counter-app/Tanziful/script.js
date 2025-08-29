const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");

function decrement() {
    alert("Decrement button has been clicked!");
}
function increment() {
    alert("Increment button has been clicked!");
}

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);
