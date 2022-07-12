const container = document.getElementById("grid");
const sizeButton = document.getElementById("size");
const colorButton = document.getElementById("rainbow-color");
const defaultButton = document.getElementById('default');
const eraseButton = document.getElementById('eraser');
const resetButton = document.getElementById('reset');
var color = 'black';

function makeGrid (rows, columns){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);
    for (let c = 0; c < rows * columns; c++){
        let square = document.createElement("div");
        container.insertAdjacentElement('beforeend', square);
        square.className = "grid-item";
        square.style.height = (62.5/rows * 16) + 'px';
    }
    var gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid));
}

makeGrid(16,16);
let sizes = [16, 32, 64, 128];
let selection = 1;
sizeButton.onclick = function changeSize (){
    container.innerHTML = '';
    makeGrid(sizes[selection],sizes[selection]);
    if (selection < 3){
        selection ++;
    }else selection = 0;
}
colorButton.onclick = function (){
    color = 'rainbow';
}
defaultButton.onclick = function (){
    color = 'black';
}
eraseButton.onclick = function (){
    color = 'eraser';
}
resetButton.onclick = function (){
    container.innerHTML = '';
    makeGrid(sizes[selection-1],sizes[selection-1]);
}
function colorGrid() {
    switch (color) {
        case 'rainbow':
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            this.classList.remove('gray');
            break;
        case 'eraser':
            this.style.backgroundColor = '#ffffff';
            this.classList.remove('gray');
            break;
        case 'black':
            this.style.backgroundColor = '#000000';
            this.classList.remove('gray');
            break;
        default:
            this.style.backgroundColor = color;
            this.classList.remove('gray');
            break;
    }
}




