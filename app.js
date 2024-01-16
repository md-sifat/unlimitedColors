document.querySelector(".btn2").disabled = true;
console.log("hello world");

const randomColor = ()=>{
    let hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0 ; i<6 ; i++){
        color+= hex[Math.floor(Math.random()*16)];
    }
    console.log(color);
    return color;
}

const changeColor = ()=>{    
    document.querySelector(".cont").style.backgroundColor = randomColor();
    document.querySelector(".name").innerHTML = randomColor();
}

let inter;
document.querySelector(".btn1").addEventListener('click' , ()=>{
    document.querySelector(".btn1").disabled = true;
    document.querySelector(".btn2").disabled = false;
    if(!inter){
        inter = setInterval(changeColor , 500);
    }
    
});


document.querySelector(".btn2").addEventListener('click' , ()=>{
    document.querySelector(".btn1").disabled = false;
    document.querySelector(".btn2").disabled = true;
    clearInterval(inter);
    inter = null;
});
