let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click",()=>{
    let item = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.innerText ="remove";
    item.innerText = input.value;
    item.appendChild(delBtn);
    ul.appendChild(item);
    input.value ="";
})
ul.addEventListener("click",function(event){

})
/* let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns){
    delBtn.addEventListener("click",function(){
        let par = this.parentElement;
        par.remove();
    })
} */
