const numberInput = document.getElementById('input-number');
const generateBtn = document.getElementById('generate');

function generateTable(number)
{
    
    
}

function handleClick()
{
    const number = parseInt(numberInput.value);
    if(!number){
        alert("enter valid number");
        numberInput.value = 1;
        return;
    }
    generateTable(number);
}


generateBtn.addEventListener('click', handleClick);