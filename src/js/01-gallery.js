import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);

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
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
      )
      .join("");
    list.insertAdjacentHTML('beforeend', markup);
})();

//add listener
list.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
  
    if (!event.target.classList.contains('gallery__image')) {
      return;
    }
    const currentItem = event.target.closest(".gallery__item");
    const imgId = Number(currentItem.dataset.id);
    const data = galleryItems.find(({ id }) => id === imgId);
    const instance = basicLightbox.create(
      `
        <div>
            <img src="${data.original}" alt="${data.description}">
        </div>
    `
    );
    instance.show();
}