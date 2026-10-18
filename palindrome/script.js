const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDisplay = document.getElementById("result");

function checkPalindrome() {
  const originalStr = textInput.value.trim();
  if (!originalStr) {
    alert("Please input a value");
  }
  const str = originalStr.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = str.length - 1;
  resultDisplay.classList.remove("hidden");
  while (left < right) {
    if (str[left] !== str[right]) {
      resultDisplay.textContent = `${originalStr} is not a palindrome`;
      return;
    }
    left++;
    right--;
  }
  resultDisplay.textContent = `${originalStr} is a palindrome`;
}

checkBtn.addEventListener("click", checkPalindrome);

textInput.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    checkPalindrome();
  }
});

textInput.addEventListener("input", function () {
  resultDisplay.classList.add("hidden");
});
