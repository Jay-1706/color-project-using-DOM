// #1234567890ABCDEF: # 6 values from given 16 form color 
const btn=document.getElementById("button");
const randomColor =() =>{
    let val="0123456789ABCDEF";
    let cons="#";
    for(let i=0 ; i<6 ; i++){
        cons=cons + val[Math.floor(Math.random()*16)];
    }
    return cons;
}
console.log(randomColor());

function changeRandomColor(){
    document.body.style.background=randomColor();
}

btn.addEventListener("click",changeRandomColor);