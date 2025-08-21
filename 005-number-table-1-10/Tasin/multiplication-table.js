const tablecontainerToprow=document.getElementById('toprow');
const tablecontainerBottomrow =document.getElementById('bottomrow');
const generateBtn = document.getElementById('generate');

generateBtn.addEventListener('click',()=>{
 for(let number=1;number<=10;number++){
    const numberTable= getTable(number);

    if(number<=5){
        tablecontainerToprow.appendChild(numberTable);
    }else{
        tablecontainerBottomrow.appendChild(numberTable);
    }
    
 }
})