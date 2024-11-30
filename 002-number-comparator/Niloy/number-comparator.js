const number1Input=document.getElementById('number1');
const number2Input=document.getElementById('number2');
const compareButton = document.getElementById('compare');
const result = document.getElementById('result');




function handleCompareButton(){

    number1=parseInt(number1Input.value);
    number2=parseInt(number2Input.value);

    if(number1>number2){
        result.innerText='Number 1 is Bigger'
    }
    else if(number1<number2){
        result.innerText='Number 2 is Bigger'
    }
    else{
        result.innerText='Both are Equal';
    }
}



compareButton.addEventListener('click', handleCompareButton);
