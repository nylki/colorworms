const MAX_MOVERS = 650;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 255);
  fill(0, 5);

  movers = [];
  let randomHue = random(0,100);
  for (let i=0; i<=MAX_MOVERS; i++) {
    let n = map(noise(i), 0, 1, -110, 110);
    let c = color(randomHue + n, random(140, 180) + n, random(100,200) + n);
    movers.push(new Mover(c)); //color is perlinnoise randomnes
  }

  frameRate(45);
  background(15); // grey
}

function draw() {

  for (let mover  of movers) {
    mover.update();
    mover.display();
  }

}
