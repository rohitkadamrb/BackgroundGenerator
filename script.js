var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');

var color2 = document.querySelector('.color2');
var cssBackground = document.getElementById('backGround');
setGraient();
function setGraient() {
  css.textContent = '';
  cssBackground.style.background =
    'linear-gradient(to right,' + color1.value + ',' + color2.value + ')';
  css.textContent = backGround.style.background + ';';
}
color1.addEventListener('input', setGraient);

color2.addEventListener('input', setGraient);
