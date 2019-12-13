
var dots = document.querySelectorAll('.slider__circles-circle');
//навесить циклом обработчки каждой точке 

for(let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click',clickHandler);
}

function clickHandler(e) {
    var sliders = document.getElementsByClassName('slider__slide');
    for(let i = 0; i < sliders.length; i++) {
        sliders[i].style.display="none";
        var idDot = e.target.id;
        var numIdDot = idDot.slice(5,6)
        sliders[numIdDot-1].style.display="block"
    }
}





//следит за кликом по элементу circle
//все скрыть - показать элемент по id
//