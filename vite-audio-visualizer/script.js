let audio1 = new Audio();
audio1.src = "public/tracks/deep.mp3";

// PLAY BUTTON TEST
const playButton = document.getElementById("playButton");
playButton.addEventListener("click", function () {
  if (audio1.paused) {
    audio1.play();
    playButton.textContent = "Pause Audio";
  } else {
    audio1.pause();
    playButton.textContent = "Play Audio";
  }
});
console.log("audio1");

const container = document.getElementById("container");
const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let audioSource = null;
let analyser = null;

// Commented out for my EARS
// audio1.play();
audioSource = audioCtx.createMediaElementSource(audio1);
analyser = audioCtx.createAnalyser();
audioSource.connect(analyser);
analyser.connect(audioCtx.destination);

// Size properties
analyser.fftSize = 128;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
const barWidth = canvas.width / bufferLength;

// Animating the bars
let x = 0;
function animate() {
  x = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  analyser.getByteFrequencyData(dataArray);
  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];
    ctx.fillStyle = "white";
    ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
    x += barWidth;
  }

  requestAnimationFrame(animate);
}

animate();
