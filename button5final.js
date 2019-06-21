//button 5
var btn5 = new Button({
  x: 0,
  y: 390,
  label: "Verify",
  width: 250,
  onClick: function() {

    currentscene = 1;
    sceneee = 3;

    //removing other buttons
    delete btn1.x;
    delete btn5.x;

    //switching to addition levels
    sone.draw();

  }
});
