import { galleryItems } from './gallery-items.js';
// Change code below this line
const makeGalleryCard = ({
    preview,
    original,
    description
    }) => `<a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>`;
    
        
const markup = galleryItems.map((el) => makeGalleryCard(el)).join('');
const listEl = document.querySelector('.gallery');
listEl.insertAdjacentHTML('afterbegin', markup);


new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, });
