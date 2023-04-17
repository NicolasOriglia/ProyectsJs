let licuadora = document.getElementById('blender');
let estadoLicuadora = true;
let btn_licuadora = document.getElementById('blender__btn');
let sound = document.getElementById('blender__sound');

function encenderLicuadora(){
    if(estadoLicuadora){
        licuadora.classList.add('active');
        hacerRuido();
        estadoLicuadora = false;
    }else{
        licuadora.classList.remove('active');
        hacerRuido();
        estadoLicuadora = true;
    }
};

function hacerRuido(){
    if(sound.paused){
        sound.play();
    }else{
        sound.pause();
        sound.currentTime = 0;
    }
};

btn_licuadora.addEventListener('click', encenderLicuadora);

