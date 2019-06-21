//button 4
var btn4 = new Button({
  x: 0,
  y: 490,
  label: "Play",
  width: 0,
  onClick: function() {

    //setting background image
    background(img);

    //labeling the scene
    textSize(40);
    fill(0, 191, 255);
    text("Play", 230, 150);

    //redrawing button 5
    btn5.x = 370;
    btn5.draw();

    //redrawing button 1
    btn1.label = "Menu";
    btn1.x = 380;
    btn1.y = 580;
    btn1.draw();

    //removing other buttons
    delete btn2.x;
    delete btn3.x;
    delete btn4.x;

  }
});
