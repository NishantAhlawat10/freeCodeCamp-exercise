const listItem = document.querySelector(".item-list");

// list of all icons
const favoriteIcon = listItem.querySelectorAll(".favorite-icon");

favoriteIcon.forEach((b) => {
  b.addEventListener("click", () => {
    b.classList.toggle("filled");

    if (b.classList.contains("filled")) {
      b.innerHTML = "&#10084;";
    } else {
      b.innerHTML = "&#9825;";
    }
  });
});
