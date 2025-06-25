let count = 0;
    const counterValue = document.getElementById('counter');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const reset = document.getElementById('reset');

    function handleIncrement(){
        if(count + 1 == 11){
            alert("Counter can not greater than 10");
            count = 0;
            counterValue.innerText = count;
            return;
        }
        count++;
        counterValue.innerText = count;
    }
    function handleDecrement(){
        if(count > 0){
            count--;
            counterValue.innerText = count;
        }
        else{
            alert("invalid");
            return;
        }
    }
    function handleReset(){
        count = 0;
        counterValue.innerText = count;
    }

    incrementBtn.addEventListener('click', handleIncrement);
    decrementBtn.addEventListener('click', handleDecrement);
    reset.addEventListener('click', handleReset);