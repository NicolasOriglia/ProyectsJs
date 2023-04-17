let btn = document.getElementById('button');
let containerColors = document.getElementById('container');
let numColor = document.querySelector('.color-num');

function generateColor (){
    const red = Math.round(Math.random() * (255 - 1) + 1);
    const green= Math.round(Math.random() * (255 - 1) + 1); 
    const blue= Math.round(Math.random() * (255 - 1) + 1); 

    const color = `rgb(${red}, ${green}, ${blue})`;
    return color;
};


btn.addEventListener('click', function(){
    const newColor = generateColor();
    containerColors.style.backgroundColor = newColor;
    numColor.innerHTML= newColor;
});

