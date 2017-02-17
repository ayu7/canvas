var box= document.getElementById("box");
var boxy=box.getContext("2d");
var stop=document.getElementById("stop");
var clear=document.getElementByID("button");
var requestID;
boxy.fillStyle="red";


var animate=function(){
    var xcor=10;

    window.cancelAnimationFrame(requestID);

    var drawDot= function(e){
	console.log(requestID);
	boxy.clearRect(0,0,box.width, box.height);

	boxy.beginPath();
	boxy.arc(xcor,100,10,0,Math.PI*2);
	boxy.stroke();
	boxy.fill();

	xcor++;
	
	requestID=window.requestAnimationFrame(drawDot);
    };

    drawDot();
};

var stopIt=function(){
    console.log(requestID);
    window.cancelAnimationFrame(requestID);
};

var clear= function(e){
  e.preventDefault();
  boxy.clearRect(0, 0, 500, 500);
  boxy.beginPath();
};

stop.addEventListener("click", stopIt);
clear.addEventListener("click", clear);
box.addEventListener("click", animate);


