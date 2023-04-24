let display = document.querySelector('#display');
let btn = document.querySelectorAll('button');

btn.forEach(item => {
    item.onclick = () => {
        if(item.id == 'clear'){
            display.innerText = ''; 
        }else if(item.id == 'backspace'){
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length -1);
        }else if(display.innerText != '' && item.id == 'equal'){
            display.innerText = eval(display.innerText);
        }else if(display.innerText == '' && item.id == 'equal'){
            display.innerText = 'Null';
            setTimeout(() => (display.innerText = ''), 2000);
        } else{
            display.innerText += item.id; 
        }
    }
})
const calculator = document.querySelector('.calculator');
const themeTogglerBtn = document.querySelector('.theme-toggler');

let dark = true;

themeTogglerBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeTogglerBtn.classList.toggle('active');
    dark =  !dark;
}
