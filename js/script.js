document.getElementById("charA").addEventListener("click", function () {
    changeVideo("../css/videos/filler-vid.mp4");
});

document.getElementById("charC").addEventListener("click", function () {
    changeVideo("../css/videos/charC.mp4");
});

function changeVideo(videoSrc) {
    let videoPlayer = document.getElementById("videoplayer");
    videoPlayer.innerHTML = `<video controls autoplay width="100%" height="auto">
                                <source src="${videoSrc}" type="video/mp4">
                                Your browser does not support the video tag.
                             </video>`;
}