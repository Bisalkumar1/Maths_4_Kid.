const option1=document.getElementById('option1');
const option2=document.getElementById('option2');
const option3=document.getElementById('option3');
const points=document.getElementById('points');

const audio=document.getElementById('myaudio');
var pointsval=0;
var answer=0;

function generate_equa(){
var num1=Math.floor(Math.random()*20);
var num2=Math.floor(Math.random()*20);

var dummyanswer1=Math.floor(Math.random()*20);
var dummyanswer2=Math.floor(Math.random()*20);
var allanswers=[];
var switchanswers=[];
if(num2>num1){
    let temp=num1;
    num1=num2;
    num2=temp;

}
answer=num1/num2;


document.getElementById('num1').innerHTML=num1;
document.getElementById('num2').innerHTML=num2;

allanswers=[answer,dummyanswer1,dummyanswer2];

for(i=allanswers.length;i--;){
switchanswers.push(allanswers.splice(Math.floor(Math.random()*(i+1)),1)[0]);
}

option1.innerHTML=/*answer*/ switchanswers[0];
option2.innerHTML=/*dummyanswer1*/ switchanswers[1];
option3.innerHTML=/*dummyanswer2*/ switchanswers[2];

}

option1.addEventListener("click",function(){
    if(option1.innerHTML==answer){
        pointsval+=1;
        points.innerHTML=pointsval;
        generate_equa();
    }
    else{
         pointsval-=1;
        points.innerHTML=pointsval;
        audio.play();
        
    }
});

option2.addEventListener("click",function(){
    if(option2.innerHTML==answer){
        pointsval+=1;
  points.innerHTML=pointsval;
        generate_equa();
    }
    else{
         pointsval-=1;
        points.innerHTML=pointsval;
        audio.play();
        
    }
});

option3.addEventListener("click",function(){
    if(option3.innerHTML==answer){
        pointsval+=1;
  points.innerHTML=pointsval;
        generate_equa();
    }
    else{
         pointsval-=1;
        points.innerHTML=pointsval;
        audio.play();
        
    }
});


generate_equa();

