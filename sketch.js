



var p= function () {
    scene = 6;

    input = createInput();
    input.position(20, 65);

    button = createButton('submit');
    button.position(input.x + input.width, 65);
    button.mousePressed(greet);

    greeting = createElement('h2', 'what is your name?');
    greeting.position(20, 5);

    textAlign(CENTER);
    textSize(50);
  

};
  
function greet() {
  const name = input.value();
  greeting.html('hello ' + name + '!');
  input.value('');

  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();
  }
}  
  



function setup() {
  var scene = 1;
  createCanvas(1000, 1000);
  var title = function() {
    background(255, 133, 96);
    fill(245, 252, 111);
    textSize(50);
    text("Epic Gamers", 150, 200);
    var x = 200;
    var y = 350;
    rect(x, y, 200, 100);
    fill(0, 0, 0);
    textSize(20);
    text("Press Space to Start", x + 10, y + 50);
  };


 
    
  if (scene === 1) {
    title();
  } 
  
}  

function setup() {
  var scene = 1;
  createCanvas(1000, 1000);
  var title = function() {
    background(255, 133, 96);
    fill(245, 252, 111);
    textSize(50);
    text("Epic Gamers", 150, 200);
    var x = 200;
    var y = 350;
    rect(x, y, 200, 100);
    fill(0, 0, 0);
    textSize(20);
    text("Press Space to Start", x + 10, y + 50);
  };


 
    
  if (scene === 1) {
    title();
  } 
  
}

function keyPressed() {
   var info = function() {
    background(228,20, 138);
    fill(255, 255, 255);
    textSize(30);
    text("Menu", 250, 100);
     
    
    textSize(20);
    fill(0, 0, 0);
    var a = 125;
    var b = 200;
    text("Instructions:" + " Press I", a, b);
    text("About Us:" + " Press A", a, b + 100);
    text("Play:" + " Press P", a, b + 200);
   
   
  };
  
  var Us = function() {
    scene = 3;
    background(0, 0, 0);
    textSize(30);
    fill(255, 0, 0);
    text("About Us!", 250, 100);
    
    textSize(20);
    fill(255, 255, 255);
    var a = 125;
    var b = 200;
    text("Hadi:" + " Just a kind and werid grade 10 student at AY Jackson.", a, b);
    text("Bryn:" + " An odd kid from the school A.y Jackson Highschool.", a, b + 100);
    text("V:" + " no e", a, b + 200);
  };
    
  var Ins = function() {
    scene = 4;
    background(255, 0, 100);
    textSize(30);
    fill(223, 255, 6);
    text("Instructions!", 250, 100);
  };
  
  
    
  var play = function() {
    scene = 5;
    background(117, 26, 230);
    textSize(30);
    fill(243, 241, 245);
    text("Play Screen!", 250, 100);
    
    textSize(20);
    fill(255, 255, 255);
    var a = 125;
    var b = 200;
    text("Instructions:" + " Press l", a, b);
    text("Menu" + " Press Space", a, b + 100);
    text("Verify" + " Press v", a, b + 200);
    
  };
  
  var vic =  function () { 
  background(21, 219, 107);
  var x = 204;
  var y = 211;

  fill(196, 136, 15);
  ellipse(204, 211, 349, 349);
  stroke(255, 0, 0);
  strokeWeight(6);
  arc(x - 1, y + 44, x + 38, y - 25, 1, 183);

  fill(0, 0, 0);
  noStroke();
  ellipse(x - 84, y - 78, 50, 50);

  ellipse(x + 78, y - 78, 50, 50);

};
  
      var x = 355;
      var y = 550;
      var faceSize = 169;
      var Face = faceSize /8;
      var earSize=faceSize*1/2;

    var drawD = function() {
      noStroke();


// ears

stroke(255, 255, 255);
fill(255, 9, 134);
ellipse(x-faceSize*2/5, y-faceSize*2/5, earSize, earSize);
ellipse(x+faceSize*2/5, y-faceSize*2/5, earSize, earSize);

//body
stroke(0, 0, 0);
strokeWeight(3);
fill(255, 9, 134);
ellipse(x + 0, y + 148, faceSize + 10, faceSize + 10);
// face
fill(255, 9, 134);
ellipse(x, y, faceSize, faceSize);



//eyes 

fill(0, 0, 0);
ellipse(x - faceSize / 5, y - 33, Face, Face);
ellipse(x + faceSize/5, y - 33, Face, Face);



//nose
fill(0, 0, 0);
ellipse(x, y+faceSize/8, faceSize*4/15, faceSize/5);

//feet
push();
stroke(255, 9, 134);
fill(255, 255, 255);
// rotate(-14);
translate(0, 0);
ellipse(x - 59, y + 213, earSize - 10, earSize + 20);
pop();

push();
fill(255, 255, 255);
stroke(255, 9, 134);
rotate();
translate(0, 0);
ellipse(x + 59, y + 213, earSize - 10, earSize + 20);
pop();

stroke(255, 189, 233);
var h = 108;
line(x - 58, y + 113, x - 268, h + 403);
line(x + 58, y + 113, x + 278, h + 403);

      
};



  
    
  if (key === ' ') {
    scene = 2;
    if (scene ===2) {
      info();
    }
  }
  
  if (key === 'a' && scene === 2) {
    scene = 3;
    if (scene === 3) {
      Us();
      drawD();
      
    }
  }
  
  if (key === 'l' && scene === 2 || key === 'l' && scene === 5) {
    scene = 4;
    if (scene === 4) {
      Ins();
   
      
    }
  }
  
  if (key === 'p' && scene === 2) {
    scene = 5;
    if (scene === 5) {
      play();
      
    }
  }
 
   if (key === 'v' && scene === 5) {
    scene = 6;
    if (scene === 6) {
      vic();
      
    }
  }
  
}

// function draw() { 
//   scene = 1;


// if (scene === 4) {
//   drawD(235, 171);
// }
// }
