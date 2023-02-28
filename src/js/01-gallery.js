// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector(".gallery");

const imgContainer = galleryItems.reduce((acum, item) => {
    return (acum += ` <div class = "gallery__item"> 
    <a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
  </div>`);
}, '');
gallery.insertAdjacentHTML('beforeend', imgContainer);

const ligthBox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250
})
console.log(galleryItems);
