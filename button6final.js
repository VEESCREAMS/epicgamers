//defining button 6
var btn6 = new Button({
  x: 0,
  y: 500,
  width: 150,
  label: "Next Level",
  onClick: function() {
    //variable used to change to each addition level is increased by one each time
    i++;

    //if i is more than or equal 9, nothing will happen, otherwise switch to next scene
    if (i >= 9) {
      return;
    } else {
      sone.greeting = p[i].greeting;
      sone.scene = p[i].scene;
      sone.one = p[i].one;
      sone.two = p[i].two;
      sone.three = p[i].three;
      sone.four = p[i].four;
      sone.draw();
      $("html").css("background-color", "rgb(204, 102, 0");
    }

    //deleting the buttons when switing to next levels
    delete btn1.x;
    delete btn6.x;

  }
});
