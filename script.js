const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");

//　Song title
const songs = ["hey", "summer", "ukulele"];

// Keep track of songs
let songIndex = 1;

// Initially load song DOM
loadSong(songs[songIndex]);

// update song detail
function loadSong(song) {
  title.innerText = song;
  audio.src = `MUSIC/${song}.mp3`;
  cover.src = `Images/${song}.jpg`;
}
