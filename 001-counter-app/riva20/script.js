const incrimentButton = document.getElementById('increment');
const decrimentButton = document.getElementById('decrement');
const countterElement = document.getElementById('counter');

let count = 0;
countterElement.innerText = count;
function increaseCount() {

    if (count >= 10) {
        alert('count overflow');
    }
    else {


        count = count + 1;
        countterElement.innerText = count;
    }
}
function decrimentCount() {

    if (count <= 0) {
        alert('count overflow');
    }
    else {
        count = count - 1;
        countterElement.innerText = count;
    }
}

incrimentButton.addEventListener('click', increaseCount);

decrimentButton.addEventListener('click', decrimentCount);