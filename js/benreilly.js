document.getElementById("charA").addEventListener("mouseenter", function() {
    let video = this.querySelector("video");
    video.style.display = "block"; 
    video.play();
});

document.getElementById("charA").addEventListener("mouseleave", function() {
    let video = this.querySelector("video");
    video.pause(); 
    video.currentTime = 0; 
    video.style.display = "none"; 
});

document.getElementById("charC").addEventListener("mouseenter", function() {
    let video = this.querySelector("video");
    video.style.display = "block"; 
    video.play();
});

document.getElementById("charC").addEventListener("mouseleave", function() {
    let video = this.querySelector("video");
    video.pause(); 
    video.currentTime = 0; 
    video.style.display = "none"; 
});