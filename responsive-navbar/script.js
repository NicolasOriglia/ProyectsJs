let toggleBtn = document.querySelector('.toggle-btn');
let toggleBtnIcon = document.querySelector('.toggle-btn i');
let dropDownMenu = document.querySelector('.dropDown-menu');


toggleBtn.addEventListener('click', function(){
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen? 'fa-solid fa-xmark' : 'fa-sharp fa-solid fa-bars' ;
});