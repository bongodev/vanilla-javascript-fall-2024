const counterElement= document.getElementById('counter');
const incrementButton= document.getElementById('increment');
const decrementButton= document.getElementById('decrement');
const resetButton= document.getElementById('reset');
let count=0;
// function can be called directly
incrementButton.addEventListener('click', function(){
    count=count+1;
    counterElement.innerText=count;
});

//function called separetely
function decreaseCount(){
    if (count===0){
        alert('The count can not be negative');
    }
    else{
    count=count-1;
    counterElement.innerText=count;
    };
}
decrementButton.addEventListener('click', decreaseCount);

function resetCount(){
    count=0;
    counterElement.innerText=count;
}
resetButton.addEventListener('click', resetCount);
