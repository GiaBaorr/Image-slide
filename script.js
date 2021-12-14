// GET DOM
const slider = document.querySelector('.slider');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const images = document.querySelectorAll('.slider img');
// EVENT
left.addEventListener('click',prevImage)
right.addEventListener('click',nextImage)
// Counter
let counter = 0;    //index of images
let slideTime = 1000; //time for sliding
//FUNCTION CONTROL IMAGE
function prevImage(){
    if (counter === 0 ) return;
    counter--;
    let size = images[counter].clientWidth;
    slider.style.transition = `transform ${slideTime/1000}s ease-in-out`
    slider.style.transform = `translateX(${ -size * counter }px)`
}
function nextImage(){
    if (counter === images.length -1 ) return;
    counter++;
    let size = images[counter].clientWidth;
    slider.style.transition = `transform ${slideTime/1000}s ease-in-out`
    slider.style.transform = `translateX(${ -size * counter }px)`
}
// LOOP IMAGE
slider.addEventListener('transitionend',function(){
    if (counter === 0 ){
        counter = images.length -2
        let size = images[counter].clientWidth;
        slider.style.transition = 'none'
        slider.style.transform = `translateX(${ -size * counter }px)`
    }
    if (counter === images.length -1 ){
        counter = 1
        let size = images[counter].clientWidth;
        slider.style.transition = 'none'
        slider.style.transform = `translateX(${ -size * counter }px)`
    }
})
//AUTO
window.onload = function() {
    setInterval(function() {
        nextImage()
    }, slideTime*3);
}
