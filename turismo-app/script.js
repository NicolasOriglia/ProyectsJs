let title = document.querySelector('h1');

/* Links */ 
const opcionOne = document.getElementById('op-1');
const opcionTwo = document.getElementById('op-2');
const opcionThree = document.getElementById('op-3');

/* Articles */ 
const articleOne = document.getElementById('first');
const articleTwo = document.getElementById('second');
const articleThree = document.getElementById('third');

opcionOne.addEventListener('click', function(){
    title.innerHTML ='Buenos Aires'
	articleOne.style.display = 'block';
    articleTwo.style.display = 'none';
    articleThree.style.display = 'none';
});

opcionTwo.addEventListener('click', function(){
    title.innerHTML ='Mendoza'
    articleOne.style.display = 'none';
    articleTwo.style.display = 'block';
    articleThree.style.display = 'none';
});

opcionThree.addEventListener('click', function(){
    title.innerHTML ='Córdoba'
    articleOne.style.display = 'none';
    articleTwo.style.display = 'none';
    articleThree.style.display = 'block';
});
