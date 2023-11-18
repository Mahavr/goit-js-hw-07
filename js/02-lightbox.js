import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      ` <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
  )
  .join("");
galleryContainer.insertAdjacentHTML("beforeend", markup);

var lightbox = new SimpleLightbox(".gallery a", {
  overlayOpacity: 0.8,
  captionsData: "alt",
  captionDelay: 250,
  showCounter: false,
});
