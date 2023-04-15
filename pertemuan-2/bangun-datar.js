function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(220);
  rectMode(CENTER);
  noFill();
  strokeWeight(2);

  // Gambar persegi
  fill(5, 95, 205);
  rect(width / 2, height / 2, 400, 400);

  // Gambar lingkaran
  fill(238, 236, 8);
  ellipse(width / 2, height / 2, 250, 250);

  // Gambar segitiga di dalam lingkaran
  fill(157, 15, 19);
  noStroke();
  triangle(
    width / 2,
    height / 2 - 60,
    width / 2 - 60,
    height / 2 + 40,
    width / 2 + 60,
    height / 2 + 40
  );
}
