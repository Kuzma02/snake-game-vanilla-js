var score=document.getElementsByTagName('p')[1]; 
var sN=0;

var posI;
var point=document.getElementById('point');
var items=[];

positionItem();
function positionItem(){

posI=Math.round(Math.random()*8);
if(posI==0){
//trebam ga staviti kod fora na pocetku kad li[o] nije pomereno
point.style="position:absolute;top:180px;left:520px;";
}	
if(posI==1){
point.style="position:absolute;top:180px;left:670px;";

}
if(posI==2){
point.style="position:absolute;top:210px;left:730px;";

}
if(posI==3){
point.style="position:absolute;top:360px;left:550px;";

}
if(posI==4){
point.style="position:absolute;top:210px;left:730px;";

}
if(posI==5){
point.style="position:absolute;top:360px;left:100px;";

}
if(posI==6){
point.style="position:absolute;top:180px;left:100px;";

}
if(posI==7){point.style="position:absolute;top:300px;left:730px;";}
if(posI==8){point.style="position:absolute;top:390px;left:1310px;";}
}
var status;
var li=document.getElementsByTagName('li');
for(var i=0;i<li.length;i++){

li[i].style.left=(parseInt(getComputedStyle(li[i],null).left,10)+(30*i))+"px";

li[li.length-1].style.background="blue";
}
window.addEventListener('keyup',snakeMove);
function snakeMove(){
var x=event.which || event.keyCode;

if(x==37){
	if(status=="levo" || status=="desno"){return;}
moveL();
function moveL(){

for(let i=0;i<li.length-1;i++){
	if(items[0]!=undefined){
		var myI=document.createElement('li');
		document.getElementsByTagName('ul')[0].insertBefore(myI,li[0]);  //newItem,pre kog li zelis pre 
	items.splice(0,1);
	}
li[i].style.left=getComputedStyle(li[i+1],null).left;
li[i].style.top=getComputedStyle(li[i+1],null).top;

}

li[li.length-1].style.left=parseInt(getComputedStyle(li[li.length-1],null).left,10)-30+"px";

if(parseInt(getComputedStyle(li[li.length-1],null).left,10)+120>parseInt(getComputedStyle(point,null).left,10) && parseInt(getComputedStyle(li[li.length-1],null).left,10)+120<=parseInt(getComputedStyle(point,null).left,10)+30 && parseInt(getComputedStyle(li[li.length-1],null).top,10)+150>=parseInt(getComputedStyle(point,null).top,10) && parseInt(getComputedStyle(li[li.length-1],null).top,10)+120<=parseInt(getComputedStyle(point,null).top,10)+30){positionItem();items.push(1);sN++;score.innerHTML=sN;}

for(let i=0;i<li.length-1;i++){

if(parseInt(getComputedStyle(li[li.length-1],null).left,10)==parseInt(getComputedStyle(li[i],null).left,10) && parseInt(getComputedStyle(li[li.length-1],null).top,10)==parseInt(getComputedStyle(li[i],null).top,10)){
if(status=="gore"){clearTimeout(r2);}
if(status=="desno"){clearTimeout(r3);}
if(status=="dole"){clearTimeout(r4);}
if(localStorage.getItem('scores')==undefined){
var scores=[];
scores.push(sN);
localStorage.setItem('scores',JSON.stringify(scores));



}else{
var scores=JSON.parse(localStorage.getItem('scores'));
scores.push(sN);
localStorage.setItem('scores',JSON.stringify(scores));
maxValue();

}
return;

}

}
r1=setTimeout(moveL,150);
if(status=="gore"){clearTimeout(r2);}
if(status=="desno"){clearTimeout(r3);}
if(status=="dole"){clearTimeout(r4);}
status="levo";
}


}

if(x==38){
if(status=="gore" || status=="dole"){return;}
moveT();

function moveT(){

for(let i=0;i<li.length-1;i++){
	if(items[0]!=undefined){
		var myI=document.createElement('li');
		document.getElementsByTagName('ul')[0].insertBefore(myI,li[0]);  //newItem,pre kog li zelis pre 
	items.splice(0,1);
	}
li[i].style.left=getComputedStyle(li[i+1],null).left;
li[i].style.top=getComputedStyle(li[i+1],null).top;

}

li[li.length-1].style.top=parseInt(getComputedStyle(li[li.length-1],null).top,10)-30+"px";

for(let i=0;i<li.length-1;i++){
if(parseInt(getComputedStyle(li[li.length-1],null).top,10)+120>=parseInt(getComputedStyle(point,null).top,10) && parseInt(getComputedStyle(li[li.length-1],null).top,10)+150<=parseInt(getComputedStyle(point,null).top,10)+30 && parseInt(getComputedStyle(li[li.length-1],null).left,10)+150>parseInt(getComputedStyle(point,null).left,10) && parseInt(getComputedStyle(li[li.length-1],null).left,10)+120<=parseInt(getComputedStyle(point,null).left,10)+30){positionItem();items.push(1);sN++;score.innerHTML=sN;}
if(parseInt(getComputedStyle(li[li.length-1],null).left,10)==parseInt(getComputedStyle(li[i],null).left,10) && parseInt(getComputedStyle(li[li.length-1],null).top,10)==parseInt(getComputedStyle(li[i],null).top,10)){
if(status=="levo"){clearTimeout(r1);}
if(status=="desno"){clearTimeout(r3);}
if(status=="dole"){clearTimeout(r4);}
if(localStorage.getItem('scores')==undefined){
var scores=[];
scores.push(sN);
localStorage.setItem('scores',JSON.stringify(scores));

}else{
var scores=JSON.parse(localStorage.getItem('scores'));
scores.push(sN);
localStorage.setItem('scores',JSON.stringify(scores));
maxValue();

}
	return;

}

}
r2=setTimeout(moveT,150);
if(status=="levo"){clearTimeout(r1);}
if(status=="desno"){clearTimeout(r3);}
if(status=="dole"){clearTimeout(r4);}
status="gore";
}


}

if(x==39){
	if(status=="desno" || status=="levo"){return;}
moveR();
function moveR(){

for(let i=0;i<li.length-1;i++){
	if(items[0]!=undefined){
		var myI=document.createElement('li');
		document.getElementsByTagName('ul')[0].insertBefore(myI,li[0]);  //newItem,pre kog li zelis pre 
	items.splice(0,1);
	}
li[i].style.left=getComputedStyle(li[i+1],null).left;
li[i].style.top=getComputedStyle(li[i+1],null).top;

}

li[li.length-1].style.left=parseInt(getComputedStyle(li[li.length-1],null).left,10)+30+"px";

if(parseInt(getComputedStyle(li[li.length-1],null).left,10)+120>parseInt(getComputedStyle(point,null).left,10) && parseInt(getComputedStyle(li[li.length-1],null).left,10)+90<=parseInt(getComputedStyle(point,null).left,10)+30 && parseInt(getComputedStyle(li[li.length-1],null).top,10)+150>=parseInt(getComputedStyle(point,null).top,10) && parseInt(getComputedStyle(li[li.length-1],null).top,10)+120<=parseInt(getComputedStyle(point,null).top,10)+30){positionItem();items.push(1);sN++;score.innerHTML=sN;}



for(let i=0;i<li.length-1;i++){

if(parseInt(getComputedStyle(li[li.length-1],null).left,10)==parseInt(getComputedStyle(li[i],null).left,10) && parseInt(getComputedStyle(li[li.length-1],null).top,10)==parseInt(getComputedStyle(li[i],null).top,10)){
if(status=="levo"){clearTimeout(r1);}
if(status=="gore"){clearTimeout(r2);}
if(status=="dole"){clearTimeout(r4);}
if(localStorage.getItem('scores')==undefined){
var scores=[];
scores.push(sN);
localStorage.setItem('scores',JSON.stringify(scores));

}else{
var scores=JSON.parse(localStorage.getItem('scores'));
scores.push(sN);
localStorage.setItem('scores',JSON.stringify(scores));
maxValue();

}
return;

}

}
r3=setTimeout(moveR,150);
if(status=="levo"){clearTimeout(r1);}
if(status=="gore"){clearTimeout(r2);}
if(status=="dole"){clearTimeout(r4);}
status="desno";
}


}

if(x==40){
if(status=="dole" || status=="gore"){return;}
moveB();
function moveB(){

for(let i=0;i<li.length-1;i++){
	if(items[0]!=undefined){
		var myI=document.createElement('li');
		document.getElementsByTagName('ul')[0].insertBefore(myI,li[0]);  //newItem,pre kog li zelis pre 
	items.splice(0,1);
	}
li[i].style.left=getComputedStyle(li[i+1],null).left;
li[i].style.top=getComputedStyle(li[i+1],null).top;

}
li[li.length-1].style.top=parseInt(getComputedStyle(li[li.length-1],null).top,10)+30+"px";

if(parseInt(getComputedStyle(li[li.length-1],null).top,10)+120>=parseInt(getComputedStyle(point,null).top,10) && parseInt(getComputedStyle(li[li.length-1],null).top,10)+90<=parseInt(getComputedStyle(point,null).top,10)+30 && parseInt(getComputedStyle(li[li.length-1],null).left,10)+150>parseInt(getComputedStyle(point,null).left,10) && parseInt(getComputedStyle(li[li.length-1],null).left,10)+120<=parseInt(getComputedStyle(point,null).left,10)+30){positionItem();items.push(1);sN++;score.innerHTML=sN;}


for(let i=0;i<li.length-1;i++){

if(parseInt(getComputedStyle(li[li.length-1],null).left,10)==parseInt(getComputedStyle(li[i],null).left,10) && parseInt(getComputedStyle(li[li.length-1],null).top,10)==parseInt(getComputedStyle(li[i],null).top,10)){
if(status=="levo"){clearTimeout(r1);}
if(status=="gore"){clearTimeout(r2);}
if(status=="desno"){clearTimeout(r3);}
if(localStorage.getItem('scores')==undefined){
var scores=[];
scores.push(sN);
localStorage.setItem('scores',JSON.stringify(scores));

}else{
var scores=JSON.parse(localStorage.getItem('scores'));
scores.push(sN);
localStorage.setItem('scores',JSON.stringify(scores));
maxValue();

}
return;

}

}
r4=setTimeout(moveB,150);
if(status=="levo"){clearTimeout(r1);}
if(status=="gore"){clearTimeout(r2);}
if(status=="desno"){clearTimeout(r3);}
status="dole";	
}

}




}
var a=0;
function maxValue(){
var scores=JSON.parse(localStorage.getItem('scores'));


for(let i=0;i<scores.length;i++){

if(scores[a]>=scores[i]){}else{
a=i;

}

if(i==scores.length-1){
	document.getElementsByClassName('high')[0].style.display="block";
document.getElementsByClassName('high')[1].style.display="block";
document.getElementsByClassName('high')[1].innerHTML=scores[a];
window.removeEventListener('keyup',snakeMove);

}
}



}