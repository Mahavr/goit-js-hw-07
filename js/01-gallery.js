import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      ` <li class="gallery__item">
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
galleryContainer.insertAdjacentHTML("beforeend", markup);

galleryContainer.addEventListener("click", onClick);
function onClick(evt) {
  evt.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const selectedImg = evt.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${selectedImg}" width="800" height="600">
`);

  galleryContainer.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
  instance.show();
}
