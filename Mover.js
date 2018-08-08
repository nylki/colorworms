class Mover {
 
  constructor(c) {
    
    this.location = createVector(width/2, height/2);
    this.plocation = createVector(width/2, height/2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, -0);
    this.dimension = createVector(2, 2);
    this.randomSeed = Math.random();
    this.c = c;
  }


  update(globalTime) {

    this.location.x = constrain(this.location.x, 0, width);
    this.location.y = constrain(this.location.y, 0, height);

    let perlinNoise = map(noise(this.randomSeed + globalTime), 0, 1, -0.5, 2);

    this.acceleration = p5.Vector.random2D();
    this.acceleration.mult(perlinNoise);

    this.velocity.limit(1);
    this.velocity.add(this.acceleration);
    this.velocity.mult(map(mouseY, 0, height, 0, 5));

    this.plocation.set(this.location.x, this.location.y);
    this.location.add(this.velocity);

  }

  display() {
    stroke(this.c, 200);
    line(this.plocation.x, this.plocation.y, this.location.x, this.location.y);
  }

}
