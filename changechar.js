const characterLinks = [
  "char/char1.PNG",
  "char/char2.PNG",
  "char/char3.PNG",
  "char/char4.PNG",
  "char/char5.PNG"
];

const words = [
  "developer",
  "mixed media artist",
  "designer",
  "creative",
  "bharatanatyam dancer",
  "student at NYU",
  "creator"
];

let char = document.getElementById("char");
let word = document.getElementById("word");

let charIndex = 0;
let wordIndex = 0;
let charInterval;
let wordInterval;

window.onload = () => {
  imageLoop();
};

function imageLoop() {
  charInterval = setInterval(() => {
    char.src = characterLinks[charIndex];
    charIndex = (charIndex + 1) % characterLinks.length;
  }, 800);

  wordInterval = setInterval(() => {
    word.innerHTML = `&lt; ${words[wordIndex]} &gt;`;
    wordIndex = (wordIndex + 1) % words.length;
  }, 800);
}

function stopImageLoop() {
  clearInterval(charInterval);
  clearInterval(wordInterval);
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopImageLoop();
  } else {
    imageLoop();
  }
});


