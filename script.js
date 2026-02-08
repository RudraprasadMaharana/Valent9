const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 250;
  const y = Math.random() * 80;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  message.innerText = "Yayyy! 💖 I knew you’d say YES 😍";

  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
});
