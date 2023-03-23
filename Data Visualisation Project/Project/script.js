function icon1enter() {
    document.getElementById("bar1").style.animationPlayState = 'running';
    document.getElementById("bar2").style.animationPlayState = 'running';
    document.getElementById("bar3").style.animationPlayState = 'running';
    document.getElementById("bar4").style.animationPlayState = 'running';
    document.getElementById("bar1s").style.animationPlayState = 'running';
    document.getElementById("bar2s").style.animationPlayState = 'running';
    document.getElementById("bar3s").style.animationPlayState = 'running';
    document.getElementById("bar4s").style.animationPlayState = 'running';
}

function icon1leave() {
    document.getElementById("bar1").style.animationPlayState = 'paused';
    document.getElementById("bar2").style.animationPlayState = 'paused';
    document.getElementById("bar3").style.animationPlayState = 'paused';
    document.getElementById("bar4").style.animationPlayState = 'paused';
    document.getElementById("bar1s").style.animationPlayState = 'paused';
    document.getElementById("bar2s").style.animationPlayState = 'paused';
    document.getElementById("bar3s").style.animationPlayState = 'paused';
    document.getElementById("bar4s").style.animationPlayState = 'paused';
}

function icon2enter(){
    document.getElementById("mailicon").style.animationPlayState = 'running';
}

function icon2leave(){
    document.getElementById("mailicon").style.animationPlayState = 'paused';
}

function icon3enter(){
    document.getElementById("helpmark").style.animationPlayState = 'running';
}

function icon3leave(){
    document.getElementById("helpmark").style.animationPlayState = 'paused';
}

function play(){
    document.getElementById("bar1").style.animationPlayState = 'running';
    document.getElementById("bar2").style.animationPlayState = 'running';
    document.getElementById("bar3").style.animationPlayState = 'running';
    document.getElementById("bar4").style.animationPlayState = 'running';
    document.getElementById("bar1s").style.animationPlayState = 'running';
    document.getElementById("bar2s").style.animationPlayState = 'running';
    document.getElementById("bar3s").style.animationPlayState = 'running';
    document.getElementById("bar4s").style.animationPlayState = 'running';
    document.getElementById("mailicon").style.animationPlayState = 'running';
    document.getElementById("helpmark").style.animationPlayState = 'running';
    document.getElementById("iris1").style.animationPlayState = 'running';
    document.getElementById("iris2").style.animationPlayState = 'running';
    document.getElementById("iris3").style.animationPlayState = 'running';
}

function stop(){
    document.getElementById("bar1").style.animationPlayState = 'paused';
    document.getElementById("bar2").style.animationPlayState = 'paused';
    document.getElementById("bar3").style.animationPlayState = 'paused';
    document.getElementById("bar4").style.animationPlayState = 'paused';
    document.getElementById("bar1s").style.animationPlayState = 'paused';
    document.getElementById("bar2s").style.animationPlayState = 'paused';
    document.getElementById("bar3s").style.animationPlayState = 'paused';
    document.getElementById("bar4s").style.animationPlayState = 'paused';
    document.getElementById("mailicon").style.animationPlayState = 'paused';
    document.getElementById("helpmark").style.animationPlayState = 'paused';
    document.getElementById("iris1").style.animationPlayState = 'paused';
    document.getElementById("iris2").style.animationPlayState = 'paused';
    document.getElementById("iris3").style.animationPlayState = 'paused';
}

function buttonAnimEnter(btn){
        btn.style.top = '25px'
   
}

function buttonAnimLeave(btn){
    btn.style.top = '30px'

}



document.getElementById("HungerButton").addEventListener("click", DisplayHungerChart);
document.getElementById("TempButton").addEventListener("click", DisplayTempChart);
document.getElementById("CountryPopButton").addEventListener("click", DisplayCountryPopChart);
document.getElementById("CountryPopButton").addEventListener("mouseover", playFlagAnim);
document.getElementById("CountryPopButton").addEventListener("mouseleave", stopFlagAnim);
document.getElementById("HungerButton").addEventListener("mouseover", playGlobeAnim);
document.getElementById("HungerButton").addEventListener("mouseleave", stopGlobeAnim);
document.getElementById("TempButton").addEventListener("mouseover", playTempAnim);
document.getElementById("TempButton").addEventListener("mouseleave", stopTempAnim);


function DisplayHungerChart(){
    
    window.location.href = "Hunger.html";
}

function DisplayTempChart(){
    
    window.location.href = "Hunger-Temp.html";
}

function DisplayCountryPopChart(){
    
    window.location.href = "Hunger-CountryPop.html";
}

function playFlagAnim(){
    document.getElementById("flag").style.animationPlayState = 'running';
}

function playGlobeAnim(){
    document.getElementById("globe").style.animationPlayState = 'running';
}

function playTempAnim(){
    document.getElementById("tempBar").style.animationPlayState = 'running';
}

function stopFlagAnim(){
    document.getElementById("flag").style.animationPlayState = 'paused';
}


function stopTempAnim(){
    document.getElementById("tempBar").style.animationPlayState = 'paused';
}

function stopGlobeAnim(){
    document.getElementById("globe").style.animationPlayState = 'paused';
}


