const progressBar = document.getElementById('progress');

window.addEventListener('load', function() {
  update();
});

let update = () =>{
    progressBar.style.width = `${((window.scrollY)/(document.body.scrollHeight - window.innerHeight)*100)}%`
    requestAnimationFrame(update);
}