let h1 = document.querySelector("h1");
let info = ["Youtuber","Student","Enginner","WebDevloper"];
let infoIdx = 0;
let sliceidx =0;


function updateInfo(){
    sliceidx++;
        h1.innerText= `  I am  ${info[infoIdx].slice(0,sliceidx)} `
      
        
        if(sliceidx == info[infoIdx].length){
            infoIdx++
            sliceidx=0;
        }
        setTimeout(()=>{
            updateInfo()
        },300)
       
    
}
updateInfo();


