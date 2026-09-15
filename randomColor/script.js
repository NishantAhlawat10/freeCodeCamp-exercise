const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#800020",
  "#1B2631",
  "#17202A",
  "#212F3D",
  "#273746",
  "#1C2833",
  "#4A235A",
  "#512E5F",
  "#154360",
  "#1B4F72",
  "#145A32",
  "#186A3B",
  "#7B241C",
  "#641E16",
  "#4D5656",
  "#424949",
  "#5D4037",
  "#3E2723",
  "#263238",
  "#37474F",
  "#311B92",
  "#4527A0",
];

function getRandomIndex() {
  const randomIndex = Math.floor(Math.random() * darkColorsArr.length);
  return randomIndex;
}
console.log(getRandomIndex());

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
console.log(bgHexCodeSpanElement);

function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()];

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}
const btn = document.querySelector("#btn");

btn.addEventListener("click", changeBackgroundColor);
