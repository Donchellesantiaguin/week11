function setup() {
    let canvas = createCanvas(600, 300);
    canvas.parent(document.body);
    angleMode(DEGREES);
    noFill();
  }
  
  function draw() {
    background(200, 240, 230);
    translate(width / 2, height / 2);
    stroke(34, 139, 34);
    strokeWeight(2);
  
    let leafCount = 48;
    let angleStep = 360 / leafCount;
  
    for (let i = 0; i < 360; i += angleStep) {
      push();
      rotate(i);
      drawPalmLeaf(frameCount);
      pop();
    }
  }
  
  function drawPalmLeaf(frame) {
    beginShape();
    for (let x = 0; x < 100; x += 4) { 
      let y = sin(x * 3 + frame * 2) * 15; 
      vertex(x, y);
    }
    endShape();
  }  