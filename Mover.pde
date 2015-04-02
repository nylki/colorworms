class Mover{
  PVector location;
  PVector plocation;
  PVector velocity;
  PVector acceleration;
  PVector dimension;
  float n;
  color c;
  
 Mover(color _c){
  
  location = new PVector(width/2, height/2);
  plocation = new PVector(width/2, height/2);
  //location = PVector.random2D();
  velocity = new PVector(0,0);
  acceleration = new PVector(0, -0);
  dimension = new PVector(2, 2);
  n = random(1);
  c = _c;
  
 }
 
 void update(){
   if(location.x > width) location.x = 0;
   if(location.x < 0) location.x = width;
   if(location.y > height) location.y = 0;
   if(location.y < 0) location.y = height;
   
   n = n + 0.001;
   float perlinNoise = map(noise(n), 0, 1, -0.5, 2);
    
   
   acceleration = PVector.random2D();
   acceleration.mult(perlinNoise);
   
   velocity.limit(1);
   velocity.add(acceleration);
   velocity.mult(map(mouseY, 0, height, 0,5));
   
   plocation.set(location.x, location.y);
   location.add(velocity);
   
}

void display(){
  stroke(c,200);
  strokeWeight( map(mouseX, 0, width, 1, 20));
  line(plocation.x, plocation.y, location.x, location.y);
  //fill(c,20);
  //ellipse(location.x, location.y, dimension.x, dimension.y);
}

}
