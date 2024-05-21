
let h2 = document.querySelector("h2");
let btn = document.querySelector("button");

btn.addEventListener("click",getQuote);


let url = "https://api.quotable.io/random";
async function getQuote(){
try{
    let res = await axios.get(url);
    console.log(res);
   let quote = await res.data.content;
   h2.innerText = quote;
}catch(e){
    console.log(e);
}}


