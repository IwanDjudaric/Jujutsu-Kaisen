let videos = [
    "../css/videos/part1.mp4", 
    "../css/videos/part2.mp4", 
    "../css/videos/part3.mp4"
];

let currentVideoIndex = 0;

let videoPlayer = document.getElementById('animationPlayer');
let fastForwardButton = document.getElementById('fas-for');

function loadNextVideo() {

    currentVideoIndex++;

    if (currentVideoIndex >= videos.length) {
        currentVideoIndex = 0;  
    }

    videoPlayer.src = videos[currentVideoIndex];
    videoPlayer.play();
}

fastForwardButton.addEventListener('click', loadNextVideo);

videoPlayer.src = videos[currentVideoIndex];
videoPlayer.play();
