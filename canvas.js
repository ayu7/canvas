var box= document.getElementById("box");
var boxy=box.getContext("2d");
var button=document.getElementById("button");

var fill= function(e){
  boxy.fillStyle="red";
  var x = e.offsetX;
  var y = e.offsetY;
  boxy.fillRect(x,y,100,100);
}

var clear= function(e){
  boxy.clearRect(0, 0, 500, 500);
}

button.addEventListener("click", clear)
box.addEventListener("click", fill)
