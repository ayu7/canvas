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

    var xcor=30;
    var ycor=60;
    var hor=true;
    var vert=true;

    var drawBounce= function(e){
  	console.log(requestID);
  	boxy.clearRect(0,0,box.width, box.height);

  	boxy.beginPath();
  	boxy.drawImage(myIMG,xcor,ycor,60,30);

  	boxy.stroke();
  	boxy.fill();

  	if (hor)
  	    xcor+=1;
  	else
  	    xcor-=1;

  	if (vert)
  	    ycor+=2;
  	else
  	    ycor-=2;

  	if (xcor>box.width-60)
  	    hor=false;
  	if (xcor<0)
  	    hor=true;
  	if (ycor>box.height-30)
  	    vert=false;
  	if (ycor<0)
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
  stopIt();
  e.preventDefault();
  boxy.clearRect(0, 0, 500, 500);
  boxy.beginPath();
};

stop.addEventListener("click", stopIt);
clear.addEventListener("click", clearCanvas);
box.addEventListener("click", animate);
dvd.addEventListener("click", bounce);
