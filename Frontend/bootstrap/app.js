let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";
let img = document.querySelector("img");
btn.addEventListener("click",getImage);
async function getImage(){
    let result = await axios.get(url);
    let image = await result.data.message;
    console.log(image);
    let link = img.setAttribute("src",image);

}