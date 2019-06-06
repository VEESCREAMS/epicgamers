var i = 0;

//deining button object
var Button = function(config) {
  this.x = config.x || 0;
  this.y = config.y || 0;
  this.width = config.width || 150;
  this.height = config.height || 50;
  this.label = config.label || "Click";
  this.onClick = config.onClick || function() {};
};
//prototype draw for button
Button.prototype.draw = function() {
  fill(0, 234, 255);
  rect(this.x, this.y, this.width, this.height, 5);
  fill(0, 0, 0);
  textSize(19);
  textAlign(LEFT, TOP);
  text(this.label, this.x + 10, this.y + this.height / 4);
};

//prototype mouse check for button
Button.prototype.isMouseInside = function() {
  return mouseX > this.x &&
    mouseX < (this.x + this.width) &&
    mouseY > this.y &&
    mouseY < (this.y + this.height);
};

//mouseclick prototype for button
Button.prototype.handleMouseClick = function() {
  if (this.isMouseInside()) {
    this.onClick();
  }
};

//array of objects for the properties for sone
var p = [{
    greeting: "5 + 4 = ?",
    scene: 1,
    one: 12,
    two: 11,
    three: 10,
    four: 9,
  },
  {
    greeting: "12 + 23 = ?",
    scene: 2,
    one: 24,
    two: 25,
    three: 35,
    four: 34,
  },
  {
    greeting: "5 + 9 = ?",
    scene: 3,
    one: 11,
    two: 17,
    three: 15,
    four: 14,
  },
  {
    greeting: "6 + 3 + 2 = ?",
    scene: 4,
    one: 9,
    two: 11,
    three: 10,
    four: 9,
  },
  {
    greeting: "9 + 4 + 6 + 9 = ?",
    scene: 5,
    one: 23,
    two: 27,
    three: 28,
    four: 19,
  }
];

//defining scene object
var s = function(config) {
  this.greeting = config.greeting || "";
  this.scene = config.scene;
  this.one = config.one || "0";
  this.two = config.two || "0";
  this.three = config.three || "0";
  this.four = config.four || "0";
};

//prototype draw for scene
s.prototype.draw = function() {
  greeting = createElement('h2', this.greeting);
  greeting.position(230, 5);
  scene = this.scene;
  background(220, 20, 60);
  fill(255, 255, 255)
  textSize(30);
  var j = 130;
  var g = 340;
  text(this.one, j, g);
  text(this.two, j * 2, g);
  text(this.three, j * 3, g);
  text(this.four, j * 4, g);
  pp();

}

//defining scene one
  var sone =
    new s({
      greeting: "5 + 4 = ?",
      scene: 1,
      one: 12,
      two: 11,
      three: 10,
      four: 9,

    })
  
//defining answering box for addition game
var pp = function() {
  var o = 230;
  var t = 450;

  input = createInput();
  input.position(o, t);

  ans = createElement('h3', 'Answer:');
  ans.position(o + 60, t - 65);
  button = createButton('submit');
  button.position(input.x + input.width, t);
  button.mousePressed(greet);
};
  
//defining victory scene
var vic = function() {

  // scenes.shift();

  $("html").css("background-color", "rgb(21, 219, 107)");
  background(21, 219, 107);
  
  //removing elements in victory scene
  
  $("button").remove();
  $("input").remove();

 //removing all html texts
  $("h2").text("");
  $("h3").text("");
  
  //drawing actual face
  fill(196, 136, 15);
  ellipse(204, 211, 349, 349);
  
  //drawing mouth
  stroke(255, 0, 0);
  strokeWeight(6);
  noFill();
  
  var x = 204;
  var y = 211;
  // arc(x - 1, y + 69, x + 4, y - 25, 1, 180);

  // arc(x-1, y + 69, x+4, y - 25, 0, PI + QUARTER_PI, OPEN);
  arc(x, y + 50, x + 40, y - 25, 0, 2.32 + QUARTER_PI, OPEN);


  //eyes
  fill(0, 0, 0);
  noStroke();
  ellipse(x - 84, y - 78, 50, 50);

  ellipse(x + 78, y - 78, 50, 50);


 //defining button one
  var btn1 = new Button({
    x: 400,
    y: 500,
    label: "Next Level",
    onClick: function() {
      i++;
      //changing properties for sone
      // var i = floor(random(0, 5));
      sone.greeting = p[i].greeting;
      sone.scene = p[i].scene;
      sone.one = p[i].one;
      sone.two = p[i].two;
      sone.three = p[i].three;
      sone.four = p[i].four;
      sone.draw();
      $("html").css("background-color", "rgb(220, 20, 60");
      delete btn2.x;
      
   
     
    }
  });

  
 //defining button 2
  var btn2 = new Button({
    x: 50,
    y: 500,
    label: "Menu!",
    onClick: function() {
      background(35, 0, 9);
      $("html").css("background-color", "rgb(35, 0, 9");

    }
  });

//drawing the two buttons in the victory scene
  btn1.draw();
  btn2.draw();

  //defining the mouse-click function for the buttons
  mouseClicked = function() {
    btn1.handleMouseClick();
    btn2.handleMouseClick();

  };
};

//checking for the correct answers for each questions
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
  } else if (scene === 6 && name === '18') {
    vic();
  } else if (scene === 7 && name === '313') {
    vic();
  } else if (scene === 8 && name === '208') {
    vic();
  }
}
