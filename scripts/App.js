class App {
  static start() {
    const photos = document.querySelectorAll('.photo');

    /* clear active (expanded) photos */
    const photosClearActive = () => {
      photos.forEach(photo => {
        photo.classList.remove('photo-active');
      });
    };

    /* assign a click event to each photo */
    photos.forEach(photo => {
      photo.addEventListener('click', () => {
        photosClearActive();
        photo.classList.add('photo-active');
      });
    });

    /* set the first photo to active (expanded) */
    photos[0].classList.add('photo-active');
  }
}


window.addEventListener('DOMContentLoaded', () => App.start());
