let btnMode = document.getElementById('nav__icons');

btnMode.addEventListener('click', function(){
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')){
        localStorage.setItem('darkMode', true);
    }else{
        localStorage.setItem('darkMode', false);
    }
});

if(localStorage.getItem('darkMode')){
    document.body.classList.add('dark');
}else{
    document.body.classList.remove('dark');
}