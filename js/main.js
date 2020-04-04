'use strict'

var pageUrl=location.search.substring(1);

if (pageUrl === 'ip') {
  var ipFormInput = document.querySelector('#bis-form-ip');
  ipFormInput.checked = true;
} else if (pageUrl === 'ooo') {
  var oooFormInput = document.querySelector('#bis-form-ooo');
  oooFormInput.checked = true;
}

var popupLinks = document.querySelectorAll('.js-popup-open');
var popup = document.querySelector('.popup');
var popupClose = document.querySelector('.popup__close');
console.log(popupLinks.length);

for (var i = 0; i < popupLinks.length; i++) {
  var popupLink = popupLinks[i];
  popupLink.addEventListener('click', function (event) {
    event.preventDefault(event);
    popup.classList.remove('visually-hidden');
  });

  popupClose.addEventListener('click', function (event) {
    event.preventDefault(event);
    popup.classList.add('visually-hidden');
  })
};

