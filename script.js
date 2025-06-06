const video = document.getElementById("myvideo");
const btn = document.getElementById("playbutton"); 

function toggleplaypause() {
    if (video.paused){
        video.play();
        btn.innerText = "Pause";
    }
    else {
        video.pause();
        btn.innerText = "Play";
    }
}