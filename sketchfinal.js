//defining background image for prescenes
let img;
//defining background image for addition levels
let m;
//defining background image for pattern levels
let y;
//defining image for end scene
let c;
//defining variable for pattern level class J.S
let bug;
//defining image for instructions scene
let bu;

function setup() {
  //creating canvas
  createCanvas(800, 800);
  //setting prescenes image
  img = loadImage('20190514_001-5.jpg');
  //setting addition levels image
  m = loadImage('20190514_001-4.jpg');
  //setting pattern levels image
  y = loadImage('20190514_001-3.jpg');
  //setting end scene image
  c = loadImage('Star_.svg.png');
  //setting image for instructions
  bu = loadImage('epiclogo_gamer.png');
  //setting color variations for opening scene
  colorMode(height, height, height);
  //defining variable for J.S class for pattern levels
  delete btn2.x;
  delete btn3.x;
  delete btn4.x;
  delete btn5.x;
  delete btn6.x;

  bug = new Jitter();
  
}
