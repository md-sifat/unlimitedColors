console.log("hello world");

const randomColor = ()=>{
    let hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0 ; i<6 ; i++){
        color+= hex[Math.floor(Math.random()*16)];
    }
    return color;
}

const changeColor = ()=>{
    document.querySelector(".cont").style.backgroundColor = randomColor();
    document.querySelector(".name").innerHTML = randomColor();
}

let inter;
document.querySelector(".btn1").addEventListener('click' , ()=>{
    inter = setInterval(changeColor , 500);
});


document.querySelector(".btn2").addEventListener('click' , ()=>{
    clearInterval(inter);
});
