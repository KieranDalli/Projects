
document.getElementById("CountryPopButtonEU").addEventListener("mouseover", playAnimFlag);
document.getElementById("CountryPopButtonEU").addEventListener("mouseleave", stopAnimFlag);


function playAnimFlag(){
    document.getElementById("flag").style.animationPlayState = 'running';
}

function stopAnimFlag(){
    document.getElementById("flag").style.animationPlayState = 'paused';
}

function playAnimEuro(){
    document.getElementById("euro").style.animationPlayState = 'running';
}

function stopAnimEuro(){
    document.getElementById("euro").style.animationPlayState = 'paused';
}


