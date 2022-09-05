// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

renderGallery(galleryItems);

var lightbox = new SimpleLightbox('.gallery__item', {captionsData: 'alt', captionDelay: 250});

function renderGallery(items) {
    const markup = items.map(({ preview, original, description }) =>
        `<div><a class="gallery__item" href=${original}>
            <img class="gallery__image" src=${preview} alt=${description} />
        </a></div>`

    ).join('');

    gallery.insertAdjacentHTML('beforeend', markup);
}
console.log(galleryItems);
