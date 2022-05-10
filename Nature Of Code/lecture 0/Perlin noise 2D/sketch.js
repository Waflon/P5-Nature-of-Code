let incremento = 0.01;
let start = 0;
let rSlider;

function setup(){
    createCanvas(400, 400);
    rSlider = createSlider(0, 500, 20);
}

function draw(){
    incremento = rSlider.value()/10000;
    let yoff = start;
    loadPixels();
    for (let y = 0; y < height; y++){
        let xoff = start;
        for (let x = 0; x < width; x++){   
            let index = (x + y * width) * 4;
            let r = noise(xoff, yoff) * 255;
            pixels[index+0] = r;
            pixels[index+1] = r;
            pixels[index+2] = r;
            pixels[index+3] = 255;

            xoff += incremento;
        }

        yoff += incremento;
    }
    updatePixels()
    
}