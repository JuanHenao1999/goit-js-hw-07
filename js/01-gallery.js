import { galleryItems } from "./gallery-items.js";
// Change code below this line

const conGallery = document.querySelector(".gallery");

const ItemGallery = galleryItems
  .map(
    (galleryItems) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${galleryItems.original}">
      <img
        class="gallery__image"
        src="${galleryItems.preview}"
        data-source="${galleryItems.original}"
        alt="${galleryItems.description}"
      />
    </a>
  </div>`
  )
  .join("");

conGallery.insertAdjacentHTML("afterbegin", ItemGallery);

conGallery.addEventListener("click", selectOriginalImage);

function selectOriginalImage(event) {
  event.preventDefault();
  if(event.target.nodeName !== "IMG"){
    return;
  }
  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
  instance.show();

  conGallery.addEventListener("keydown", (event) => {
    if(event.code === "Escape"){
        instance.close();
    }
  });
}