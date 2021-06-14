 function toggleVisible(btnClass, elementClass) {
     const btns = document.querySelectorAll(btnClass);
     for (let btn of btns) {
         btn.addEventListener('click', function () {
             this.parentElement.querySelector(elementClass).classList.toggle('visible');
             removeVisible(btnClass, elementClass);
         });
     }
 }
 
 function removeVisible(btnClass, elementClass) {
     window.addEventListener('click', function (e) {
         console.log(e.target.closest(btnClass));
         // Si ce n'est pas le btn
         if (!(e.target.matches(btnClass) || e.target.closest(btnClass))) {
             document.querySelector(elementClass).classList.remove('visible');
         }
     });
 }
 // Toggle .visible sur le .menu-slider-menu
 toggleVisible('.menu-slider-btn', '.menu-slider-menu');

