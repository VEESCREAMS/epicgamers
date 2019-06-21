//button 3
var btn3 = new Button({
  x: 0,
  y: 390,
  label: "Instructions",
  width: 0,
  onClick: function() {

    sceneee = 2;
    //setting background color
    background(255, 0, 0);

    //labeling the scene
    textSize(40);
    fill(0, 191, 255);
    text("Instructions", 230, 150);

    //creating all the texts for the instructions
    fill(0, 0, 0);
    var y = 400;
    var r = 250;
    textSize(30);
    text("Addition Game", y, r);
    text("Pattern Game", y, r + 125);
    text("Score", y, r + 250);
    textSize(20);
    text("Type the Correct # in the Space Given ", y + 50, r + 50);
    text("Press the Right Key", y + 50, r + 175);
    text("A clock is given:", y + 50, r + 300);
    textSize(15);
    text("If total time < 2 minutes, 3 stars", y + 100, r + 350);
    text("If total time < 3 minutes and > 2, 2 stars", y + 100, r + 400);
    text("If total time > 3 minutes, 1 star", y + 100, r + 450);
    text("Timer will disappear during the pattern levels", y + 100, r + 500);

    //removing other buttons
    delete btn2.x;
    delete btn4.x;

    //relabeling and redrawing button 1
    btn1.label = "Menu";
    btn1.x = 380;
    btn1.y = 740;
    btn1.draw();
  }
});
