buttonUp = document.getElementById('button-up');
buttonUp.addEventListener('click', scrollUp);

function scrollUp(){

    const currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 10));
    }
};

window.onscroll = function(){

    const scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        buttonUp.style.transform = 'scale(1)';
        buttonUp.style.display  = 'flex';
    }else if(scroll < 500){
        buttonUp.style.transform = 'scale(0)';
    }
};