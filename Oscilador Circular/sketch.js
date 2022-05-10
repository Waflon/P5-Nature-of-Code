let o;

function setup(){
    createCanvas(1800, 400);
    o = new OsciladorCircular(200, 200, 5, 20, 150);
}

function draw(){
    background(180);
    o.dibujar();
}