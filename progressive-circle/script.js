let circularProgress = document.querySelector('.circular-progress'),
progressValue = document.querySelector('.progress-value');

let countStart = 0,
countEnd = 50,
speedInterval = 50;

let progress = setInterval(() => {
    countStart ++;
    progressValue.textContent = `${countStart}%`;
    circularProgress.style.background = `conic-gradient(#222e3a ${countStart * 3.6}deg , #ededed 0deg)`

    if(countStart == countEnd) clearInterval(progress);

}, speedInterval);