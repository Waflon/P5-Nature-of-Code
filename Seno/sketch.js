let slider;
let seno;
let bordeX = 50;
let bordeY = 50;
let finalX = 50;
let finalY = 50;

function setup(){
    createCanvas(800, 400);
    seno = new Seno(bordeX, bordeY, width - finalX, height - finalY);
    senoSlider = createSlider(1, 500, 100);
}

function draw(){
    background(51);
    seno.dibujar();
}