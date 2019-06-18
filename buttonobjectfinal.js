var sceneee = 0;
var currentscene = 0;
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

  fill(77, 0, 153);
  rect(this.x, this.y, this.width, this.height, 5);
  fill(0, 0, 0);
  textSize(19);
  textAlign(TOP, CENTER);
  text(this.label, this.x + 20, this.y + this.height / 4 + 11);

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




