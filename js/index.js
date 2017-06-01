'use strict'
function getVals() {
  // Получить зачения слайдера
  var parent = this.parentNode;
  var slides = parent.getElementsByTagName('input');
  var slide1 = parseFloat( slides[0].value );
  var slide2 = parseFloat( slides[1].value );
    if( slide1 > slide2 ) {
      var tmp = slide2;
      slide2 = slide1;
      slide1 = tmp;
    }

  var displayLeftElement = parent.getElementsByClassName('rangeValuesLeft')[0];
      displayLeftElement.innerHTML = '$'+ slide1;
  var displayRightElement = parent.getElementsByClassName('rangeValuesRight')[0];
      displayRightElement.innerHTML = '$'+ slide2;
}

window.onload = function() {
  var sliderSections = document.getElementsByClassName('range-slider');
      for( var x = 0; x < sliderSections.length; x++ ) {
        var sliders = sliderSections[x].getElementsByTagName('input');
        for( var y = 0; y < sliders.length; y++ ) {
          if( sliders[y].type ==='range' ) {
            sliders[y].oninput = getVals;
          //вручную устанавливает значения первый раз
            sliders[y].oninput();
          }
        }
      }
    }
