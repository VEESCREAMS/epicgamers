//function to create orange circle pattern
function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  stroke(speed);
  var xColor = map(mouseX, 0, 400, 0, 255);
  var yColor = map(mouseY, 0, 400, 0, 255);
  fill(255, xColor, yColor);
  ellipse(x, y, speed, speed);
}
