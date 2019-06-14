// let song;

let img;
let i;
let m;
let bug;

function setup() {
   // song = loadSound('assets/lucky_dragons_-_power_melody.mp3');
  createCanvas(1920, 1200);
  img = loadImage('20190514_001-4.jpg');
  
  i = loadImage('20190514_001-3.jpg');
  
  m = loadImage('20190514_001-5.jpg');


  se1.draw();
  btn1.draw();
  bug = new Jitter();
}

function draw() {
 
   image(i, 0, height / 2, i.width / 4, i.height / 4);
  
   image(m, 0, height / 4, m.width / 4, m.height / 4);
  
  




  
 if (scene > 0 && scene  < 5) {
   bug.move();
   bug.display();
   bug.update();
   
   image(img, 0, height / 2, img.width / 4, img.height / 4);
   
   image(img, 0, height / 2, img.width / 4, img.height / 4);

 } 
  
}




