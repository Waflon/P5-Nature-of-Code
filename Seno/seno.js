
class Seno{
    constructor(bordeX, bordeY, finalX, finalY){
        this.bordeX = bordeX;
        this.finalX = finalX;
        this.finalY = finalY;
        this.bordeY = bordeY;
        this.altura = (finalY- bordeY) / 2;
        this.start = 0;
        this.incremento = 0.01;
    }

    dibujarBordes(){
        strokeWeight(3);
        line(this.bordeX, this.bordeY, this.bordeX, this.finalY);
        line(this.finalX, this.bordeY, this.finalX, this.finalY);
        line(this.bordeX, this.bordeY, this.finalX, this.bordeY);
        line(this.bordeX, this.finalY, this.finalX, this.finalY);     
    }

    dibujar(){
        this.incremento = senoSlider.value()/5000;
        stroke(255);
        noFill();
        let xoff = this.start;
        this.dibujarBordes();
        strokeWeight(1);
        beginShape();
        for (let x = this.bordeX; x < this.finalX; x++){
            stroke(255);
            let y = this.bordeY + (this.altura + sin(xoff) * this.altura);
            vertex(x, y);
            xoff += this.incremento;   
        }
        endShape();
        this.start += this.incremento;
    }
}

