
const incrimentButton = document.getElementById('increment');
const decrimentButton = document.getElementById('decrement');
const countterElement = document.getElementById('counter');

let count=0;
function increaseCount(){
    //alert('Incriment Button Clicked')
    count = count+1;
    countterElement.innerText = count;
}


function decrimentCount(){
    //alert('Decriment Button Clicked')
    count = count-1;
    countterElement.innerText = count;
}

incrimentButton.addEventListener('click', increaseCount);

decrimentButton.addEventListener('click', decrimentCount);