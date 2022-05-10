let x, y;

class Walker{
    constructor(x, y){
        this.pos = createVector(x,y);
        this.vel = p5.Vector.random2D();
    }

    update(){
        this.vel = p5.Vector.random2D();
        this.pos.add(this.vel);
    }

    dibujar(){
        stroke(255);
        strokeWeight(2);
        point(this.pos.x, this.pos.y);
        this.update();
    }
}

let walker;

function setup(){
    createCanvas(400, 400);
    walker = new Walker(200, 200);
    background(51);
}

function draw(){
    
    walker.dibujar();
}