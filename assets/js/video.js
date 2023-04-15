/*
	
	scott made this to control his videos in the HTML5up framework he is using
	
*/

const myVideo = document.querySelector("#myVideo");
const playButton = document.querySelector("#playButton");
const videoSlider = document.querySelector("#videoSlider");

playButton.addEventListener("click", function() {
  if (myVideo.paused) {
    myVideo.play();
    playButton.classList.remove("fa-play");
    playButton.classList.add("fa-pause");
  } else {
    myVideo.pause();
    playButton.classList.remove("fa-pause");
    playButton.classList.add("fa-play");
  }
});

function updateVideoSlider() {
  const currentTime = myVideo.currentTime;
  const duration = myVideo.duration;
  const value = (currentTime / duration) * 100;
  videoSlider.value = value;

  if (!myVideo.paused && !myVideo.ended) {
    setTimeout(updateVideoSlider, 100); // update every 100ms = 10 times per second
  }
}

videoSlider.addEventListener("input", function() {
  const value = this.value;
  myVideo.currentTime = myVideo.duration * (value / 100);
});

myVideo.addEventListener("play", function() {
  setTimeout(updateVideoSlider, 100);
});


