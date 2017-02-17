var box= document.getElementById("box");
var boxy=box.getContext("2d");
var stop=document.getElementById("stop");
var clear=document.getElementById("button");
var dvd=document.getElementById("dvd");
var requestID;
boxy.fillStyle="blue";


var animate=function(){
    var xcor=box.width/2;
    var ycor=box.height/2;
    var rad=1;
    var grow=true;

    window.cancelAnimationFrame(requestID);

    var drawDot= function(e){
	console.log(requestID);
	boxy.clearRect(0,0,box.width, box.height);

	boxy.beginPath();
	boxy.arc(xcor,ycor,rad,0,Math.PI*2);
	boxy.stroke();
	boxy.fill();
	
	if( rad>=xcor || rad>=ycor)
	    grow=false;
	if (rad<=1)
	    grow=true;
	
 	if (grow)
	    rad++;
	else
	    rad--;
	

	requestID=window.requestAnimationFrame(drawDot);
    };

    drawDot();
};

var bounce=function(){
    window.cancelAnimationFrame(requestID);
    
    var myIMG=new Image();
    myIMG.src="dvd.png";

    var xcor=50;
    var ycor=50;
    var hor=true;
    var vert=true;
    
    var drawBounce= function(e){
	console.log(requestID);
	boxy.clearRect(0,0,box.width, box.height);

	boxy.beginPath();
	boxy.drawImage(myIMG,xcor,ycor);
	
	boxy.stroke();
	boxy.fill();
	
	if (hor)
	    xcor++;
	else
	    xcor--

	if (vert)
	    ycor++	    
	else 
	    ycor--;
	
	if (hor>200)
	    hor=false;
	if (hor<3)
	    hor=true;
	if (vert>200)
	    vert=false;
	if (vert<3)
	    vert=true;
	
	requestID=window.requestAnimationFrame(drawBounce);
    };
    
    drawBounce();
};

var stopIt=function(){
    console.log(requestID);
    window.cancelAnimationFrame(requestID);
};

var clearCanvas= function(e){
  e.preventDefault();
  boxy.clearRect(0, 0, 500, 500);
  boxy.beginPath();
};

stop.addEventListener("click", stopIt);
clear.addEventListener("click", clearCanvas);
box.addEventListener("click", animate);
dvd.addEventListener("click", bounce);

