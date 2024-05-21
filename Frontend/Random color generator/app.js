const storage = ['1','0','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const btn = document.querySelector("button");
const div = document.querySelector("div");
const h2 = document.querySelector("h2");
btn.addEventListener("click",updateColor)
function updateColor(){
    let a = storage[Math.floor(Math.random()* 16)]
    console.log(a)
    let b = storage[Math.floor(Math.random()* 16)]
    console.log(b)
    let c = storage[Math.floor(Math.random()* 16)]
    let d = storage[Math.floor(Math.random()* 16)]
    let e = storage[Math.floor(Math.random()* 16)]
    let f = storage[Math.floor(Math.random()* 16)]
    div.style.backgroundColor = `#${a}${b}${c}${d}${e}${f}`
    h2.innerText=`#${a}${b}${c}${d}${e}${f}`
}
