window.onload = function(){
    var file = document.querySelector('#thefile');
    var audio = document.querySelector('#audio');
    
    file.onchange = function(){
        var files = this.files;
        audio.src = URL.createObjectURL(files[0]);
        audio.load();
        audio.play();

    }
}
