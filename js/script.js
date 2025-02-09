document.getElementById("fas-for").addEventListener("click", function () {
    changeVideo("../css/videos/Spideyfight2.mp4");
});


function changeVideo(videoSrc) {
    let videoPlayer = document.getElementById("videoplayer");
    videoPlayer.innerHTML = `<video controls muted autoplay width="100%" height="auto">
                                <source src="${videoSrc}" type="video/mp4">
                                Your browser does not support the video tag.
                             </video>`;
}