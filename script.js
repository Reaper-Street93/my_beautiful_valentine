const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const card = document.getElementById("card");
const yay = document.getElementById("yay");
const hint = document.getElementById("hint");

let yesScale = 1;
let noScale = 1;

const noMessages = [
  "Are you sure?",
  "Pretty sure?",
  "Last chance...",
  "I will keep asking.",
  "Okay, I’m still here.",
];
let noCount = 0;

function updateSizes() {
  yesBtn.style.transform = `scale(${yesScale})`;
  noBtn.style.transform = `scale(${noScale})`;

  if (noScale <= 0.12) {
    noBtn.classList.add("gone");
  } else {
    noBtn.classList.remove("gone");
  }
}

noBtn.addEventListener("click", () => {
  yesScale = Math.min(3.2, yesScale + 0.22);
  noScale = Math.max(0, noScale - 0.18);
  updateSizes();

  hint.textContent = noMessages[Math.min(noCount, noMessages.length - 1)];
  noCount += 1;
});

yesBtn.addEventListener("click", () => {
  card.classList.add("hidden");
  yay.classList.remove("hidden");
});

updateSizes();
