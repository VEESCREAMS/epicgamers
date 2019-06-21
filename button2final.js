//button 2
var btn2 = new Button({
  x: 0,
  y: 290,
  label: "About Us",
  width: 250,
  onClick: function() {

    //setting background image
    background(img);

    //labeling scene    
    textSize(40);
    fill(0, 191, 255);
    text("About Us", 230, 150);

    //adding text to scene
    var a = 375;
    var b = 310;
    textSize(15);
    text("Hadi:" + " Just a kind and werid grade 10 student at AY Jackson.", a, b);
    text("Bryn:" + " An odd kid from the school A.y Jackson Highschool.", a, b + 100);
    text("Vee:" + " Random girl at AY Jackson ", a, b + 200);

    //removing other buttons

    delete btn3.x;
    delete btn4.x;

    //relabeling and redrawing button 1
    btn1.label = "Menu";
    btn1.x = 380;
    btn1.y = 580;
    btn1.draw();
  }
});
