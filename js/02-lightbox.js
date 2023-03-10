import { galleryItems } from './gallery-items.js';
// Change code below this line

const contGallery = document.querySelector(".gallery");

const itemGallery = galleryItems
.map(
    (galleryItems) =>
    `<a class="gallery__item" href="${galleryItems.original}">
      <img class="gallery__image" src="${galleryItems.preview}" alt="${galleryItems
    .description}"/>
    </a>`
)
.join("");

contGallery.insertAdjacentHTML("afterbegin", itemGallery);

contGallery.addEventListener('click', (event) => event.preventDefault());

let lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
 });