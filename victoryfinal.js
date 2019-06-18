//defining victory scene
var vic = function() {
  //changing html background colors for victory scene
  $("html").css("background-color", "rgb(21, 219, 107)");
  $("body").css("background-color", "rgb(21, 219, 107)");
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

  arc(x, y + 50, x + 40, y - 25, 0, 2.32 + QUARTER_PI, OPEN);

  //eyes
  fill(0, 0, 0);
  noStroke();
  ellipse(x - 84, y - 78, 50, 50);
  ellipse(x + 78, y - 78, 50, 50);

  //redefining button 1
  btn1.x = 50;
  btn1.y = 500;
  btn1.label = "Menu";

  //drawing the two buttons in the victory scene
  btn1.draw();
  btn6.draw();

};
