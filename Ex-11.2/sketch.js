let waveColors;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  waveColors = [
    color(0, 191, 255, 100),
    color(0, 255, 255, 80),  
    color(70, 130, 180, 60), 
    color(135, 206, 250, 100), 
    color(0, 206, 209, 90),
  ];
}

function draw() {
  background(0, 25); 

  let time = millis() * 0.001; 
  let waveCount = 20;

  for (let i = 0; i < waveCount; i++) {
    let yOffset = i * 20;
    let waveHeight = 30 + 10 * sin(time + i);
    let colorIndex = i % waveColors.length;

    stroke(waveColors[colorIndex]);
    strokeWeight(2);

    beginShape();
    for (let x = 0; x < width; x += 15) {
      let y = height / 2 + yOffset + sin(x * 0.02 + time * 2 + i) * waveHeight;
      vertex(x, y);
    }
    endShape();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}