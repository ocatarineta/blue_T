// select element function

const selectElement = function(element) {
  return document.querySelector(element);
}

let menuToggler= selectElement('.menu-toggle');
let body=selectElement('body');

menuToggler.addEventListener('click', function(){
  body.classList.toggle('open');
})
//  hero slider 

const slider=document.querySelector('.slider');

M.Slider.init(slider, {
  indicators: false,
  height:500,
  transition:500,
  interval:6000
})


 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });