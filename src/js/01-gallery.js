import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');
const galleryImage = createImgItem(galleryItems);
galleryBox.insertAdjacentHTML("beforeend", galleryImage);


function createImgItem(galleryItems) {
   return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" 
          alt="${description}">
        </a>`;
    })
        .join('');
}


new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
})