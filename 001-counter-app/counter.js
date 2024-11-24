let count=0;
const counterElement=document.getElementById('counter');
const incrementButton=document.getElementById('increment');
function increaseCount(){
    if(count>10)
    {
        alert('count overflow');
    }
    else{
    count=count+1;
    counterElement.innerText=count;
    }
}
incrementButton.addEventListener('click', increaseCount);
function decrementCount()
{
    if(count==0)
    {
        alert('count will be negative');
    }
    else{
    count=count-1;
    counterElement.innerText=count;
    }
}
const decrementButton=document.getElementById('decrement');
decrementButton.addEventListener('click',decrementCount );