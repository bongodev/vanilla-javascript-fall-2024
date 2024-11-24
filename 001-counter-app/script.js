let value = 0;

const incre = document.querySelector("#increment");
const decre = document.querySelector("#decrement");

incre.addEventListener("click",()=>{
    value++;
    document.querySelector("#counter").textContent = value;
})

decre.addEventListener("click",()=>{
    value--;
    document.querySelector("#counter").textContent = value;
})