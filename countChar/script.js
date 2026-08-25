const count = document.getElementById("char-count");
const textInput = document.getElementById("text-input");

textInput.addEventListener("input", () => {
  const currLength = textInput.value.length;
  console.log(currLength);
  if (currLength >= 50) {
    textInput.value = textInput.value.slice(0, 50);
    count.style.color = "red";
    count.textContent = "Character Count: 50/50";
  } else {
    count.style.color = "black";
    count.textContent = `Character Count: ${currLength}/50`;
  }
});
