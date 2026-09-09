const screen = document.getElementById("display");

function playAudio(key) {
  const audio = document.getElementById(key);

  if (audio) {
    audio.currentTime = 0;
    audio.play();
    screen.innerText = audio.parentElement.id;

    key.querySelector(".drum-pad").classList.add("active");
    clearTimeout(clearScreenTimer);
    clearScreenTimer = setTimeout(function () {
      screen.innerText = "";
    }, 2000);
  }
}

const drumsPads = document.querySelectorAll(".drum-pad");

drumsPads.forEach((pad) => {
  pad.addEventListener("click", function () {
    const keyClicked = this.innerText.trim();
    playAudio(keyClicked);
  });
});

document.addEventListener("keydown", function (event) {
  const keyPressed = event.key.toUpperCase();
  playAudio(keyPressed);
});
