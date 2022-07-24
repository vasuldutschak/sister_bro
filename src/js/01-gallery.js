// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const galleryList = document.querySelector('.gallery')
const galleryItem = createGallery(galleryItems)
galleryList.insertAdjacentHTML("beforeend", galleryItem)

function createGallery(image) {
    return image.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" 
  alt="${description}"/>
</a>` }).join('')
}

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionsDelay: 250,
});
// Change code below this line

console.log(galleryItems);
