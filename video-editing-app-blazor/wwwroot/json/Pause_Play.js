// custom.js
function playVideo() {
    var video = document.getElementById("videoPlayer");
    if (video) {
        video.play();
    }
}

function pauseVideo() {
    var video = document.getElementById("videoPlayer");
    if (video) {
        video.pause();
    }
}

function rewindVideo() {
    var video = document.getElementById("videoPlayer");
    if (video) {
        video.currentTime = 0;
    }
}
