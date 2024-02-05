const BUTTON_PLAY_PAUSE = document.getElementById('play');
const BUTTON_BACK = document.getElementById('back');
const BUTTON_SKIP = document.getElementById('skip');
const CHAPTER_AUDIO = document.getElementById('chapterAudio');
const CHAPTER_TITLE = document.getElementById('title');

const CHAPTERS = 10;
let actualChapter = 1;
let isPlaying = false; // Variável de controle

function play() {
    CHAPTER_AUDIO.play();
    BUTTON_PLAY_PAUSE.classList.remove('bi-play-circle-fill');
    BUTTON_PLAY_PAUSE.classList.add('bi-pause-circle-fill');
}

function pause() {
    CHAPTER_AUDIO.pause();
    BUTTON_PLAY_PAUSE.classList.remove('bi-pause-circle-fill');
    BUTTON_PLAY_PAUSE.classList.add('bi-play-circle-fill');
}

function skip() {
    actualChapter = (actualChapter % CHAPTERS) + 1;
    updateChapter();
    play();
}

function back() {
    actualChapter = (actualChapter - 2 + CHAPTERS) % CHAPTERS + 1;
    updateChapter();
    play();
}

function playNPause() {
    if (isPlaying) {
        pause();
    } else {
        play();
    }
    isPlaying = !isPlaying;
}

function updateChapter() {
    CHAPTER_AUDIO.src = `books/dom-casmurro/${actualChapter}.mp3`;
    chapterTitle();
}

function chapterTitle() {
    CHAPTER_TITLE.textContent = `Capítulo ${actualChapter}`;
}

updateChapter();

chapterTitle();

BUTTON_BACK.addEventListener('click', back);
BUTTON_PLAY_PAUSE.addEventListener('click', playNPause);
BUTTON_SKIP.addEventListener('click', skip);
