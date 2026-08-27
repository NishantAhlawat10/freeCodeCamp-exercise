function updateCount(btn) {
  const countEl = btn.querySelector(".count");

  // use + to convert string to number
  let currCount = +countEl.textContent.split("/")[0];

  if (currCount === 10) return;

  currCount++;
  countEl.textContent = `${currCount}/10`;
}

const btns = document.querySelectorAll(".emoji-btn");
console.log(btns);
btns.forEach((b) => b.addEventListener("click", () => updateCount(b)));
