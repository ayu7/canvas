var box= document.getElementById("box");
var boxy=box.getContext("2d");
var button=document.getElementById("button");

var fill= function(e){
    boxy.fillStyle="red";
    var x = e.offsetX;
    var y = e.offsetY;
    // boxy.fillRect(x,y,5,5);
    boxy.arc(x,y,10,0,Math.PI*2);
    boxy.fill();
}

var line= function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    boxy.moveTo(x,y);
    boxy.stroke();
}

var clear= function(e){
  boxy.clearRect(0, 0, 500, 500);
  boxy.beginPath();
}

button.addEventListener("click", clear);
boxy.beginPath();
box.addEventListener("click", fill);
box.addEventListener("click", line);


