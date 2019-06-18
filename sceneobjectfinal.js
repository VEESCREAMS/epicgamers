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
  //changing the html background color for the addition levels
  $("body").css("background-color", "rgb(204, 102, 0");
  $("html").css("background-color", "rgb(204, 102, 0");
  
  //changing the question
  greeting = createElement('h2', this.greeting);
  greeting.position(230, 410);
  scene = this.scene;
  
  //the javascript background for the addition levls
  background(y);
  
  //creating the options for the addition levels
  fill(255, 0, 0)
  textSize(26);
  var j = 145;
  var g = 492;
  text(this.one, j, g);
  text(this.two, j * 2, g);
  text(this.three, j * 3, g);
  text(this.four, j * 4, g);
  
  //calling the input button and submit button in the addition levels
  pp();

}

//defining first scene
var sone =
  new s({
    greeting: "5 + 4 = ?",
    scene: 10,
    one: 12,
    two: 11,
    three: 10,
    four: 9,
  })
