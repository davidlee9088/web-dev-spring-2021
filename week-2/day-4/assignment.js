let position = 0
const previousImage = function () {
    if (position < 0) {
        position = position + 500;
        document.getElementById("imageSlider2").style.transform = `translate(${position}px,0)`;
    }
    //position = position + 500;
    //document.getElementById("imageSlider2").style.transform = `translate(${position}px,0)`;
}
const nextImage = function () {
    if (position > -2500) {
        position = position - 500;
        document.getElementById("imageSlider2").style.transform = `translate(${position}px,0)`
    }
}