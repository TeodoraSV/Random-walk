let x;
let y;

function setup() {
  createCanvas(500, 500);
  x = width / 2;
  y = height / 2;
  background(250, 200, 253);
}

function draw() {
  stroke(150, 122, 239);
  strokeWeight(2);
  point(x, y);
  const r = floor(random(4));
  switch (r) {
    case 0:
      x = x + 1;
      break;
    case 1:
      x = x - 1;
      break;
    case 2:
      y = y + 1;
      break;
    case 3:
      y = y - 1;
      break;
  }
}