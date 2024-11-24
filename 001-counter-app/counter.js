let count=0;
const counterElement=document.getElementById('counter');
const incrementButton=document.getElementById('increment');
function increaseCount(){
    count=count+1;
    counterElement.innerText=count;
}
incrementButton.addEventListener('click', increaseCount);
function decrementCount()
{
    count=count-1;
    counterElement.innerText=count;
}
const decrementButton=document.getElementById('decrement');
decrementButton.addEventListener('click',decrementCount );