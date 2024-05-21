/* let h1 = document.querySelector("h1");
function changeColor (color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed");
        },delay);
    })

}
changeColor("red",1000)
.then(()=>{
console.log("red color was changed");
changeColor("green",1000)
})
/* .then(()=>{
    console.log("green color was changed");
}) 
let url = "https://catfact.ninja/fact";

async function getFacts(){
 let res = await fetch(url);
 let data = await res.json();


 console.log(data.fact);

} */
let url = "https://catfact.ninja/fact";
async function getFacts(url){
    try{
let res = await axios.get(url);
console.log(res.data.fact);}
catch (e){
    console.log("error-",e);
}}