const defaultWrapperWidth = 3000;

function resize(){
var widthWindow = window.innerWidth;
var heightWindow = window.innerHeight;
var fontSize = widthWindow / defaultWrapperWidth * 16;
var html = document.querySelector('html');
html.style.fontSize = fontSize + "px";
}

resize();
// console.log(html);

window.addEventListener('resize', _.debounce(e => {
resize();
}, 50));