const numberInput = document.getElementById('number-input');
const generateBtn = document.getElementById('generate');


generateBtn.addEventListener('click',function(){
    const number =parseInt(numberInput.value);

    console.log(number);

    if(!number){
        alert('Enter a valid number.');
        return;
    }

})