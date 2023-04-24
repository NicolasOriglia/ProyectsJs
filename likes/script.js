const likeMe = document.querySelector('.likeMe');
const numLikes = document.querySelector('#numLikes');

let countLikes = 0;

function insertHeart() {
    const heartStyle = `
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    font-size: 35px`;

    const heart = document.createElement('i');
    heart.classList.add('fa');
    heart.classList.add('fa-heart');
    heart.style = heartStyle;

    likeMe.appendChild(heart);

    numLikes.textContent = ++countLikes;

    setTimeout(()=> heart.remove(), 1000);
};

likeMe.addEventListener('dblclick',insertHeart);
