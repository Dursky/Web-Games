window.addEventListener('load', function () {



var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
  // x += dx;
  //    y += dy;
}

document.getElementById("btn_left").addEventListener("click",() => {
  //document.getElementById("demo").innerHTML = "Hello World";
  x-= dx;
});
document.getElementById("btn_right").addEventListener("click",() => {
  //document.getElementById("demo").innerHTML = "Hello World";
  x+= dx;
});

document.getElementById("btn_up").addEventListener("click",() => {
  //document.getElementById("demo").innerHTML = "Hello World";
  y-= dx;
});
document.getElementById("btn_down").addEventListener("click",() => {
  //document.getElementById("demo").innerHTML = "Hello World";
  y+= dx;
});
setInterval(draw, 10);
})