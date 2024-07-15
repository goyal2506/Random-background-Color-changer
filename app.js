let btn = document.querySelector("#btn");
let headind = document.querySelector(".color");
let container = document.querySelector(".container");
let red,green,blue;



btn.addEventListener("click" ,function(){
    red = Math.floor(Math.random()*256);
    green = Math.floor(Math.random()*256);
    blue = Math.floor(Math.random()*256);
    btn.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    container.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    headind.innerText="RGB("+red+","+green+","+blue+")";
})