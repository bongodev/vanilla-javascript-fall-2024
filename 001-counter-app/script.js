const incrimentButton = document.getElementById('increment');
const decrimentButton = document.getElementById('decrement');
const countterElement = document.getElementById('counter');

let count=0;
function increaseCount(){
    if (count === 10) {
        alert('Count overflow!');
        return;
      }
    count++;
    countterElement.innerText = count;
}

function decrementCount(){
    if(count==0){
        alert('Count will be negative');
    }else {
        count--;
        countterElement.innerText = count;
    }
   
}

incrimentButton.addEventListener('click', increaseCount);

decrimentButton.addEventListener('click', decrementCount);
