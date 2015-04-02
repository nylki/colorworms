Mover[] mover;
PShape shapeGroup;
import processing.pdf.*;
boolean record = false;

void setup() {
  size(displayWidth, displayHeight, P2D);
  colorMode(HSB,255);
  //noStroke();
  //smooth(4);
  fill(0, 5);
  shapeGroup = createShape(GROUP);
  
  mover = new Mover[1000];
  float randomHue = random(0,100);
  for (int i=0; i < mover.length; i++) {
    float n = map(noise(i), 0, 1, -110, 110);
    color c =  color(randomHue + n, random(140, 180) + n, random(100,200) + n);
    mover[i] = new Mover(c); //color is perlinnoise randomnes
  }
  //beginRaw(PDF, "raw.pdf");
  frameRate(40);
  background(15);
  
}



void draw() {
  
  for (int i=0; i < mover.length; i++) {
    mover[i].update();
    mover[i].display();
  }
}
  
  void keyPressed() {
  if (key == 'r') {
    endRaw();
    exit();
    
  }
}

