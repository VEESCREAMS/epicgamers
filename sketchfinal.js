// let song;

let img;

let bug;

function setup() {
   // song = loadSound('assets/lucky_dragons_-_power_melody.mp3');
  createCanvas(1920, 1200);
  img = loadImage('484cb019d737393b4f8be03da93f0319.jpg'); 
  
  se1.draw();
  btn1.draw();
  bug = new Jitter();
}

function draw() {
 if (scene > 0 && scene  < 5) {
   bug.move();
   bug.display();
   bug.update();
   
   image(img, 0, height / 2, img.width / 4, img.height / 4);
 } 
  
}


