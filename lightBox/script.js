// select all imaages

const galleryItem = document.querySelectorAll(".gallery-item");

const lightBox = document.querySelector(".lightbox");

const lightBoxImage = document.getElementById("lightbox-image");

const lightBoxBtn = document.getElementById("close-btn");

// "https://cdn.freecodecamp.org/curriculum/labs/stonehenge-thumbnail.jpg"
galleryItem.forEach((b) =>
  b.addEventListener("click", () => {
    lightBox.style.display = "flex";
    lightBoxImage.src = b.src.replace("-thumbnail", "");
  }),
);

lightBoxBtn.addEventListener("click", () => {
  lightBox.style.display = "none";
});

lightBox.addEventListener("click", () => {
  lightBox.style.display = "none";
});
