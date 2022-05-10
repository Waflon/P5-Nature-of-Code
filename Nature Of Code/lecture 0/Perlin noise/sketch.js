let incremento = 0.01;
let start = 0;
let rSlider;

function setup(){
    createCanvas(400, 400);
    rSlider = createSlider(0, 500, 20);
}

function draw(){
    background(51);
    stroke(255);
    noFill();
    beginShape();
    incremento = rSlider.value()/10000;
    let xoff = start;
    for (let x = 50; x < width-50; x++){
        stroke(255);
        let y = noise(xoff) * height;
        vertex(x, y); 
        xoff += incremento;  
    }
    endShape();

    start += incremento;
}