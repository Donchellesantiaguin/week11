let waveColors;

function setup() {
  let canvas = createCanvas(600, 300);
  canvas.parent(document.body);
  noFill();
  waveColors = [
    color(0, 191, 255, 80), 
    color(0, 255, 255, 60), 
    color(135, 206, 250, 90), 
  ];
}

function draw() {
  background(224, 247, 250, 30); 

  let time = millis() * 0.002;
  let waveSpacing = 20;

  for (let i = 0; i < 12; i++) {
    let yOffset = i * waveSpacing;
    let waveHeight = 20 + 5 * sin(time + i * 0.5);
    let colorIndex = i % waveColors.length;

    stroke(waveColors[colorIndex]);
    strokeWeight(2);

    beginShape();
    for (let x = 0; x < width; x += 10) {
      let y = height / 2 + yOffset + sin(x * 0.03 + time + i) * waveHeight;
      vertex(x, y);
    }
    endShape();
  }
}