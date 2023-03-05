import { galleryItems } from './gallery-items.js';
// Change code below this line


const makeGalleryCard = ({
preview,
original,
description
}) => `<div class="gallery-item">
    <a class="gallery__link" href="${original}">
      <img 
      class="gallery__image" 
      src="${preview}"  
      data-source="${original}" 
      alt="${description}"
      />
    </a>
  </div>`;


const markup = galleryItems.map((el) => makeGalleryCard(el)).join('');

const listEl = document.querySelector('.gallery');

listEl.insertAdjacentHTML('afterbegin', markup);


 function createBigImage(event) {
  event.preventDefault();

  const modalWindow = basicLightbox.create(`
  <img src="${event.target.dataset.source}" alt ="${event.target.alt}"/>
  `);
  
  
  if (event.target.nodeName !== 'IMG') {
    return;
  } else {

    modalWindow.show();

    document.addEventListener('keydown', handleClose)
    function handleClose(event) {
        if (event.key === 'Escape') {
        modalWindow.close();
            }
        
    document.removeEventListener('keydown', handleClose);    
    };
   
  }
  

};

listEl.addEventListener('click', createBigImage);

