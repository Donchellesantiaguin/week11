function setup() {
    let canvas = createCanvas(600, 300);
    canvas.parent(document.body);
    noStroke();
  }
  
  function draw() {
    background(255);
    let tileSize = 60;
    let wave = sin(frameCount * 0.05) * 10;
  
    for (let x = 0; x < width; x += tileSize) {
      for (let y = 0; y < height; y += tileSize) {
        let offset = sin((x + y + frameCount) * 0.02) * 10;
  
        fill(255, 204, 128); 
        ellipse(x + tileSize / 2, y + tileSize / 2 + offset, tileSize * 0.6);
  
        fill(255, 235, 205); 
        triangle(
          x + 10,
          y + 10 + offset,
          x + tileSize - 10,
          y + 10 + offset,
          x + tileSize / 2,
          y + tileSize - 10 + offset
        );
      }
    }
  }  