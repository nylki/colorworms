class Mover{

  constructor(c) {
    this.location = createVector(width/2, height/2);
    this.plocation = createVector(width/2, height/2);
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0, -0);
    this.dimension = createVector(2, 2);
    this.n = Math.random();
    this.c = c;
  }


  update(){

    this.location.x = constrain(this.location.x, 0, width);
    this.location.y = constrain(this.location.y, 0, height);

    this.n = this.n + 0.001;
    let perlinNoise = map(noise(this.n), 0, 1, -0.5, 2);

    this.acceleration = p5.Vector.random2D();
    this.acceleration.mult(perlinNoise);

    this.velocity.limit(1);
    this.velocity.add(this.acceleration);
    this.velocity.mult(map(mouseY, 0, height, 0,5));

    this.plocation.set(this.location.x, this.location.y);
    this.location.add(this.velocity);

  }

  display(){
    stroke(this.c,200);
    strokeWeight( map(mouseX, 0, width, 1, 20));
    line(this.plocation.x, this.plocation.y, this.location.x, this.location.y);
  }

}
