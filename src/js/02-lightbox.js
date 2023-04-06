import { galleryItems } from "./gallery-items.js";
// Change code below this line

//add markup
const list = document.querySelector(".gallery");
(function () {
  const markup = galleryItems
    .map(
      ({ id, preview, original, description }) =>
        `<li class="gallery__item" data-id="${id}">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
    )
      .join("");
      list.insertAdjacentHTML("beforeend", markup);
    })();
    
    
const galleryLightBox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
    captionDelay: 250
});
