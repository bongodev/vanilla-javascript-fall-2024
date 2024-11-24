let value = 0;

const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");

increment.addEventListener("click",()=>{
   
    value++;
    if(value==10)
    {
        alert("Over");
    }
    else{
        
        document.querySelector("#counter").textContent = value;
    }
  
})

decrement.addEventListener("click",()=>{
    value--;
    if(value==0)
    {
        alert("negative value")
    }
    else{
        document.querySelector("#counter").textContent = value;
    }
    
})