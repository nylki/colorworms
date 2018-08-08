const MAX_MOVERS = 600;
var globalTime = 0;
var movers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 255);
  fill(0, 5);

  let randomHue = random(0, 100);
  for (let i=0; i<=MAX_MOVERS; i++) {
    let n = map(noise(i), 0, 1, -110, 110);
    let c = color(randomHue + n, random(140, 180) + n, random(100, 200) + n);
    movers.push(new Mover(c)); //color is perlinnoise randomnes
  }

  frameRate(45);
  background(15); // grey
}

function draw() {
  globalTime += 0.001;
  strokeWeight(map(mouseX, 0, width, 1, 20));
  for (let mover of movers) {
    mover.update(globalTime);
    mover.display();
  }

}
