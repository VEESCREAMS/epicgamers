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



  //applying color to the face
  fill(sx, sy, sz);

  //variables that help set positions for face and its part
  var x = 340;
  var y = 260;

  //drawing actual face
  ellipse(x, y, 349, 349);

  //drawing mouth
  stroke(255, 0, 0);
  strokeWeight(6);
  noFill();
  arc(x, y + 40, 244, 186, 0, 2.32 + QUARTER_PI, OPEN);

  //eyes
  fill(0, 0, 0);
  noStroke();
  ellipse(x - 84, y - 73, 50, 50);
  ellipse(x + 78, y - 73, 50, 50);

  //redefining button 1
  btn1.x = 50;
  btn1.y = 500;
  btn1.label = "Menu";

  //drawing the two buttons in the victory scene
  btn1.draw();
  btn6.draw();

};
