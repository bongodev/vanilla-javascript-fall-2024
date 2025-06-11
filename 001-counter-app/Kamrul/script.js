console.log('Hello World');

let count = 0;

const tittleElement = document.getElementById('title');

tittleElement.innerText = 'Counter App';


const incrementButton = document.getElementById('increment');

//increase function
function increaseCount() {
    if(count < 10){
        setCount(++count);
    }
    else{
        document.getElementById('increment').disabled = true;
        alert('Count can not be greater than 10');

    }
}


const decrementButton = document.getElementById('decrement');

decrementButton.addEventListener('click', decreaseCount);

//decrease function
function decreaseCount() {
    if(count > 0){
        setCount(--count);
    }
    else{
        document.getElementById('decrement').disabled = true;
        alert('Count can not be less than 0');
    }
   
}

//set count function
function setCount(countValue){
    const countElement = document.getElementById('counter');
    countElement.innerText = countValue;
}

incrementButton.addEventListener('click', increaseCount);



let resetButton = document.getElementById('reset');

resetButton.addEventListener('click', function(){
    count = 0;
    setCount(count);
    document.getElementById('increment').disabled = false;
    document.getElementById('decrement').disabled = false;
});