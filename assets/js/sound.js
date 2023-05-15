const music = new Audio("assets/sound/music.mp3");
const forceCard = new Audio('assets/sound/force.mp3');
const trapCard = new Audio('assets/sound/trap.mp3');
const winSound = new Audio('assets/sound/win.mp3');
let musicBtnPlay = document.getElementsByClassName("music");
let musicOff = document.getElementById("musicBtnOff");
let musicOn = document.getElementById("musicBtnOn");
let muted = false;
let soundBtnPlay = document.getElementsByClassName("sound");
let soundOff = document.getElementById("soundBtnOff");
let soundOn = document.getElementById("soundBtnOn");

for (var i = 0; i < musicBtnPlay.length; i++) {
  musicBtnPlay[i].addEventListener("click", function () {
    if (music.paused) {
      music.play();
      music.volume = 0.1;
      music.loop = true;
      musicOn.style.display = 'block';
      musicOff.style.display = 'none';
    } else {
      music.pause();
      musicOff.style.display = 'block';
      musicOn.style.display = 'none';
    };
  });
};

window.addEventListener('DOMContentLoaded', (event) => { 
  endMute()
});

for (var i = 0; i < soundBtnPlay.length; i++) {
  soundBtnPlay[i].addEventListener("click", function () {
    if (muted) {
      startMute();
      soundOff.style.display = 'block';
      soundOn.style.display = 'none';
    } else {
      endMute();
      soundOff.style.display = 'none';
      soundOn.style.display = 'block';
    };
  });
};

/**
   * Function to create mute effect for sound button
   */
function startMute() {
  muted = true;
  forceCard.volume = 0;
  trapCard.volume = 0;
}

function endMute() {
  muted = false;
  forceCard.volume = 0.1;
  trapCard.volume = 0.1;
}