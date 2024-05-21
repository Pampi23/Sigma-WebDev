let btn = document.querySelector("button");
let h2 = document.querySelector("h2");

let img = document.querySelector("img");

btn.addEventListener("click",getImg);




let url2 = "https://dog.ceo/api/breeds/image/random";
async function getImg(){
    try{
let res = await axios.get(url2);
img.setAttribute("src",res.data.message) ;}
catch (e){
    console.log("error-",e);
}}