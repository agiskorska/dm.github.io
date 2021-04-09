
function displayClickedMenuElement () {
  const menuElements = document.querySelectorAll('.main-nav__item');

  for (menuElement of menuElements) {
    menuElement.addEventListener('click', function (event) {
      event.preventDefault();
      const clickedElement = event.target;
      const activeSections = document.querySelectorAll('.activate');
      const targetSectionId = clickedElement.getAttribute('href').substring(1);
      for(section of activeSections){
        section.classList.remove('activate');
      }
      document.getElementById(targetSectionId).classList.add('activate');
   })
  }
}

displayClickedMenuElement();

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  freeScroll: true,
  contain: true,
  prevNextButtons: true,
  pageDots: true,
  setGallerySize: false

});