const knife = new Image();
//knife.src = "knife2.png"
const krug = new Image();
var ang = 0;
var ss = 0;
var rot = 0;
krug.src = "krug2.png"
const TO_RADIANS = Math.PI/180;
let tX = 400, tY = 300;
var myX = [], myY = [];
for(var i = 0;i<10;i++){
	myX[i] = 350;
	myY[i] = 500+i*350;
}
var az = -1;
var dokosna = false;
var broi = -1;
var ugul = Math.PI/2, natisnato = false;
var dX = [],dY = [];
for(var i = 0;i < 10;i++){
	dX[i] = 0;
	dY[i] = 0;
}
var v = 0;
var index = -1;
let centersX=[], centersY=[], r=[], n=1;
for(let i=0;i<n;i++){
    let presichat = true;
    while(presichat){
        presichat =false;
        centersX[i] = 350
        centersY[i] = 150
        r[i]=80;
    }
   
}
function distance(aX, aY, bX, bY)
{
    return Math.sqrt((aX-bX)*(aX-bX)+(aY-bY)*(aY-bY));
}
function rott(){
    rot+=1;
};
function drawRotatedImage(image, x, y,razmerX,razmerY, angle) { 
	context.save(); 
	context.translate(x, y);
	context.rotate(angle * TO_RADIANS);
	context.drawImage(image, -(razmerX/2), -(razmerY/2),razmerX,razmerY);
	context.restore(); 
};
function update() {
	if(dokosna==true){
		v-=1;
	}
	ss-=1;
    setInterval(rott,1000);
    if(index==-1){
		for(var i = 0;i<10;i++){ 
        	myX[i]+=dX[i];
        	myY[i]+=dY[i];
			index = -1;
		}
    }else{
        ugul += 0.02;
		for(var i = 0;i<10;i++){
				myX[0] = centersX[index]+Math.cos(ugul)*r[index];
        		myY[0] = centersY[index]+Math.sin(ugul)*r[index]
		}
    }
    for(let i=0;i<n;i++){
		for(var j = 0;j<10;j++){ 
			if(distance(myX[j],myY[j],centersX[i], centersY[i])<=r[i]){
				index=i;
				dokosna = true;
				break;
			}
		}
    }
 
}
 
function draw() {
	context.fillStyle = "red"
	context.fillRect(0 , 0 , 800 , 600)
    for(let i=0;i<n;i++){ 
        context.beginPath();
        context.arc(centersX[i], centersY[i], r[i], 0, Math.PI*2);
        context.fill();
    }
	context.fillStyle = "black"
	drawRotatedImage(krug,350,150,160,160, -ss)
	for(var i = 0;i<10;i++){ 
        context.beginPath();
        context.arc(myX[i], myY[i], 15, 0, Math.PI*2);
        context.fill();
		if(dokosna==false){ 
			context.drawImage(knife , myX[i]-15 , myY[i]-15 , 30 , 100)
		}
	}
	for(var i = 0;i < 10;i++){
		if(dokosna==true){
			drawRotatedImage(knife , myX[i] , myY[i] , 30 , 100,-ss)
		}
	}
};
 
function keyup(key) {
	if(key==32){
		if(dokosna==false){ 
			index =-1;
			for(var i = 0;i<10;i++){ 
				dX[i]=Math.cos(ugul)*3;
				dY[i]=Math.sin(-ugul)*3;
			}
	}
	}
}

function mouseup() {
	console.log(mouseX , mouseY) 
	for(var i = 0;i<10;i++){	
		if(dokosna==false){ 
			index =-1;
			broi++
			dX[i] = Math.cos(ugul)*3;
			dY[i] = Math.sin(-ugul)*3;
		}
	}
};