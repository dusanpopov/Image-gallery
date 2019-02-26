function imageGallery() {
  
  const highlight = document.querySelector(".gallery-hightlight");
  const previews = document.querySelectorAll(".food-preview img");

  previews.forEach(preview => {

    preview.addEventListener("click", function() {
      const smallSrc = this.src;
      const bigSrc = smallSrc.replace("small", "big");
      previews.forEach(preview => preview.classList.remove("food-active"));
      highlight.src = bigSrc;
      preview.classList.add("food-active");

    });

  });
}

imageGallery();
