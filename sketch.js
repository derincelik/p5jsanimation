var x, y;
var homer;

function setup() {
 homer = loadGif('data/homerscreaming.gif');
    
createCanvas(720, 400);
    
  x = width;
  y = height / 2;
}

function draw() {
  background(255);
  image(homer,0,0);
  // Draw a circle
  stroke(50);
  fill(100);
ellipse(x, y, 75, 75);
    
  
  x = x -1;

    
  if (y < 0) {
    y = height;
  }
}