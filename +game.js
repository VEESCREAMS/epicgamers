var scene = 0;
var one = function() {
    scene = 1;
    var g = 340;
    background(220, 20, 60);
    fill(255, 255, 255);
    textSize(30);
    text("12", 130, g);
    text("11", 260, g);
    text("10", 390, g);
    text("9", 520, g);
  
    
     
  };

var onee = function() {
  greeting = createElement('h2', '4 + 5 = ?');
  greeting.position(200, 5);
};

var two = function() {
    scene = 2;
    var g = 340;
    background(220, 20, 60);
    fill(255, 255, 255);
    textSize(30);
    text("35", 130, g);
    text("25", 260, g);
    text("34", 390, g);
    text("24", 520, g);
  
        
  };

// var twoo = function() {
//   greeting = createElement('h2', '12 + 23 = ?');
//   greeting.position(200, 5);
// };

var three = function() {
    scene = 3;
    var g = 340;
    background(220, 20, 60);
    fill(255, 255, 255);
    textSize(30);
    text("11", 130, g);
    text("17", 260, g);
    text("15", 390, g);
    text("14", 520, g);
  

};

// var threee = function() {
//   greeting = createElement('h2', '5 + 9 = ?');
//   greeting.position(200, 5);
// };

var four = function() {
    scene = 4;
    var g = 340;
    background(220, 20, 60);
    fill(255, 255, 255);
    textSize(30);
    text("11", 130, g);
    text("8", 260, g);
    text("12", 390, g);
    text("9", 520, g);
  
};

// var fourr = function() {
//    greeting = createElement('h2', '6 + 3 + 2 = ?');
//    greeting.position(200, 5);
// };

var five = function() {
    scene = 5;
    var g = 340;
    background(220, 20, 60);
    fill(255, 255, 255);
    textSize(30);
    text("23", 130, g);
    text("27", 260, g);
    text("19", 390, g);
    text("28", 520, g);
  
};

// var fivee = function() {
//   greeting = createElement('h2', '9 + 4 + 6 + 9 = ?');
//   greeting.position(200, 5);
// };

var six = function() {
    scene = 6;
    var g = 340;
    background(220, 20, 60);
    fill(255, 255, 255);
    textSize(30);
    text("18", 130, g);
    text("23", 260, g);
    text("19", 390, g);
    text("21", 520, g);
  
};

// var sixx = function() {
//   greeting = createElement('h2', '7 + 0 + 2 + 12 = ?');
//   greeting.position(200, 5);
// };

var seven = function() {
    scene = 7;
    var g = 340;
    background(220, 20, 60);
    fill(255, 255, 255);
    textSize(30);
    text("313", 130, g);
    text("315", 260, g);
    text("296", 390, g);
    text("307", 520, g);
  
};

// var sevenn = function() {
//   greeting = createElement('h2', '108 + 205 = ?');
//   greeting.position(200, 5);
// };

var eight = function() {
    scene = 8;
    var g = 340;
    background(220, 20, 60);
    fill(255, 255, 255);
    textSize(30);
    text("212", 130, g);
    text("232", 260, g);
    text("208", 390, g);
    text("214", 520, g);
  
};

// var eightt = function() {
//   greeting = createElement('h2', ' 134 + 74 = ?');
//   greeting.position(200, 5);
// };

var vic =  function () { 
  background(21, 219, 107);
  var x = 204;
  var y = 211;
  
   $("h2").text("");

  fill(196, 136, 15);
  ellipse(204, 211, 349, 349);
  stroke(255, 0, 0);
  strokeWeight(6);
  noFill();
  // arc(x - 1, y + 69, x + 4, y - 25, 1, 180);
 
  // arc(x-1, y + 69, x+4, y - 25, 0, PI + QUARTER_PI, OPEN);
  arc(x , y + 50, x+40, y - 25, 0, 2.32 + QUARTER_PI, OPEN);
  

  //eyes
  fill(0, 0, 0);
  noStroke();
  ellipse(x - 84, y - 78, 50, 50);

  ellipse(x + 78, y - 78, 50, 50);

};


var pp = function() {
  var o = 200;
  var t = 450;
  input = createInput();
  input.position(o, t);
  
  ans = createElement('h3', 'Answer:');
  ans.position(o + 60, t - 65);
  button = createButton('submit');
  button.position(input.x + input.width, t);
  button.mousePressed(greet);
};
  
function greet() {
  const name = input.value();
  input.value('');
  
  if (scene === 1 && name === '9') {
    vic();
  } else if (scene === 2 && name === '35') {
    vic();
  } else if (scene === 3 && name === '14') {
    vic();
  } else if (scene === 4 && name === '11') {
    vic();
  } else if (scene === 5 && name === '28') {
    vic();
  } else if (scene === 6 && name === '21') {
    vic();
  } else if (scene === 7 && name === '313') {
    vic();
  } else if (scene === 8 && name === '208') {
    vic();
  }
}


function setup() {
  createCanvas(600, 600);
  one();
  onee();
  pp();
}


function keyPressed() {
  
  if (key === 'a') {
    two();
    $("h2").text("12 + 23 = ?");
    // twoo();
    pp();
  } else if (key === 'b') {
    three();
     $("h2").text("5 + 9 = ?");
    // threee();
    pp();
  } else if (key === 'c') {
    four();
     $("h2").text("6 + 3 + 2 = ?");
    // fourr();
    pp();
  } else if (key === 'd') {
    five();
     $("h2").text("9 + 4 + 6 + 9 = ?");
    // fivee();
    pp();
  } else if (key === 'e') {
    six();
    $("h2").text("7 + 0 + 2 + 9 = ?");
    // sixx();
    pp();
  } else if (key === 'e') {
    seven();
     $("h2").text("108 + 205 = ?");
    // sevenn();
    pp();
  } else if (key === 'f') {
    eight();
     $("h2").text("134 + 74 = ?");
    // eightt();
    pp();
  } 
  
}

// function draw() {
//   background(220);
// }
