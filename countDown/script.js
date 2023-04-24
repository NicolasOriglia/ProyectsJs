const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const finalMje = document.querySelector('.final__sms');

let countdownDate = new Date('1 1 ,2024 00:00:00').getTime();

let interval = setInterval(dateFecha, 1000);

function dateFecha(){
    const now = new Date().getTime();
    const distanceTime = (countdownDate - now);

    let daysDate = Math.floor(distanceTime / (1000 * 60 * 60 * 24));
    let hoursDate = Math.floor((distanceTime % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    let minutesDate = Math.floor((distanceTime % (1000 * 60 * 60)) / (1000 * 60));
    let secondsDate = Math.floor((distanceTime % (1000 * 60 )) / (1000));

    days.innerHTML = daysDate;
    hours.innerHTML = ('0' + hoursDate).slice(-2);
    minutes.innerHTML = ('0' + minutesDate).slice(-2);
    seconds.innerHTML = ('0' + secondsDate).slice(-2);

    if(distanceTime < 0){
        clearInterval(interval);
        finalMessage.style.transform = 'translateY(0)';
    }
}

