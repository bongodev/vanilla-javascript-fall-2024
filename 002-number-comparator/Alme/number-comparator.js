const num1=document.getElementById('number1');
const num2=document.getElementById('number2');
const comp=document.getElementById('compare');
const re_set=document.getElementById('reset');
const answer=document.getElementById('result');


const err_text='border-red-800';
function validationCheck(){
    if(!num1.value && !num2.value) {
        num1.classList.add(err_text);
        num2.classList.add(err_text);
        return false;
    }
    if(!num1.value) {
        num1.classList.add(err_text);
        return false;
    }
    if(!num2.value){
        num2.classList.add(err_text);
        return false;
    }
    

    return true;

}
comp.addEventListener('click',function(){
    num1.classList.remove(err_text);
    num2.classList.remove(err_text);
    if(!validationCheck()){
        return;
    }
    const a=parseFloat(num1.value);
    const b=parseFloat(num2.value);
    
    if(a>b){
        answer.innerText= a + " is greater than " + b;
    }
    else if(b>a){
        answer.innerText=b+" is greater than " + a;
    }
    else{
        answer.innerText=a+" and " +b+ " are equal";
    }
}
)

re_set.addEventListener('click',function(){
    answer.innerText="";
    num1.value="";
    num2.value="";
    num1.classList.remove(err_text);
    num2.classList.remove(err_text);
})