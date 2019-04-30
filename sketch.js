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
  
      var x = 205;
      var y = 125;
      var faceSize = 169;

    var drawD = function() {
      
      noStroke();


      // ears
      var earSize=faceSize*1/2;
      fill(89, 52, 17);
      ellipse(x-faceSize*2/5, y-faceSize*2/5,               earSize, earSize);
      ellipse(x+faceSize*2/5, y-faceSize*2/5,     earSize, earSize);

      //body
      stroke(0, 0, 0);
      strokeWeight(3);
      fill(163, 113, 5);
      ellipse(x + 0, y + 148, faceSize + 10, faceSize + 10);
      
      // face
      fill(163, 113, 5);
      ellipse(x, y, faceSize, faceSize);



      //eyes 
      var Face = faceSize /8;
      fill(0, 0, 0);
      ellipse(x - faceSize / 4, 90, Face, Face);
      ellipse(240, 90, Face, Face);



      //nose
      fill(89, 52, 20);
      ellipse(x, y+faceSize/8, faceSize*4/15, faceSize/5);
      
      var f1 = function() {
    stroke(255, 0, 0);
    rotate(-15);
    translate(-103, 20);
    ellipse(x - 59, y + 213, earSize - 10, earSize + 20);
};

f1();

var f2 = function() {
    stroke(255, 0, 0);
    rotate(30);
    translate(157, -149);
    ellipse(x + 59, y + 213, earSize - 10, earSize + 20);
};

f2();

//     pushMatrix();
//       stroke(255, 0, 0);
//       rotate(-15);
//       translate(-103, 20);
//       ellipse(x - 59, y + 213, earSize - 10, earSize + 20);
//     popMatrix();
      
//     pushMatrix();
//       stroke(255, 0, 0);
//       rotate(30);
//       translate(157, -149);
//       ellipse(x + 59, y + 213, earSize - 10, earSize + 20);
//     popMatrix();

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
  
  if (key === 'l' && scene === 2 || scene === 5) {
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
 
  
}

// function draw() { 
//   scene = 1;


// if (scene === 4) {
//   drawD(235, 171);
// }
// }
