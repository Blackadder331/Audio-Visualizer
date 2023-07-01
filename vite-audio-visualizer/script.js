let audio1 = new Audio();
audio1.src = "public/tracks/deep.mp3";

// PLAY TEST
// audio1.play();
// const playButton = document.getElementById("playButton");
// playButton.addEventListener('click', function() {
//     audio1.play();
// });
// console.log("audio1");

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
