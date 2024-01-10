lastMinute = -1;

function setup() {
    createCanvas(800,600);
    noFill();
  }
  
  function draw() {
    
    background(255);
    let hr = hour();
    let mn = minute();
    let sc = second();
    
    if (mn !== lastMinute) {
        console.log("Minute:", mn);
        lastMinute = mn;
    }

    stroke(255, 150, 150, 100);
    strokeWeight(2);
    let scSize = map(sc, 0, 60, 0, height);
    ellipse(width / 2, height / 2, scSize);
  
    stroke(150, 255, 150, 100);
    strokeWeight(5);
    let mnSize = map(mn, 0, 60, 0, height);
    ellipse(width / 2, height / 2, mnSize);
  
    stroke(150, 150, 255, 100);
    strokeWeight(10);
    let hrSize = map(hr % 12, 0, 12, 0, height);
    ellipse(width / 2, height / 2, hrSize);
  }
  
