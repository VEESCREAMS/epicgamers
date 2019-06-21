//button 1
var btn1 = new Button({
  x: 230,
  y: 450,
  label: "Start!",
  width: 100,
  onClick: function() {
    currentscene = 0;
    sceneee = 1;

    //removing html texts
    $("h5").text("");

    //changing html background colors for prescenes
    $("body").css("background-color", "rgb(0, 191, 255");
    $("html").css("background-color", "rgb(0, 191, 255");

    //setting background image
    background(img);

    //labeling Menu scene
    textSize(40);
    fill(0, 191, 255);
    text("Menu", 230, 150);


    //removing other buttons
    delete btn5.x;
    delete btn6.x;

    //resetting the x values of the button so that they can become functional
    btn2.x = 370;
    btn3.x = 370;
    btn4.x = 370;

    //resetting the width for the buttons so that they can become functional
    btn2.width = 250;
    btn3.width = 250;
    btn4.width = 250;
    btn5.width = 250;


    //drawing buttons 2-4
    btn2.draw();
    btn3.draw();
    btn4.draw();

    //deleting button one afterwards
    delete btn1.x;
  }
});
