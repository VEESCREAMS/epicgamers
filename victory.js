var vic =  function () { 
  
  // scenes.shift();
  
  // $("html").css("background-color", "rgb(21, 219, 107)");
  background(21, 219, 107);
  
   
  var x = 204;
  var y = 211;
  
  //  $("h2").text("");
  // $("h3").text("");

  fill(196, 136, 15);
  ellipse(204, 211, 349, 349);
  stroke(255, 0, 0);
  strokeWeight(6);
  noFill();
  // arc(x - 1, y + 69, x + 4, y - 25, 1, 180);
 
  // arc(x-1, y + 69, x+4, y - 25, 0, PI + QUARTER_PI, OPEN);
  arc(x , y + 50, x+40, y - 25, 0, 2.32 + QUARTER_PI, OPEN);
  

  //eyes
  fill(0, 0, 0);
  ellipse(x - 84, y - 78, 50, 50);

  ellipse(x + 78, y - 78, 50, 50);
  
  
  
  // $( "button" ).remove();
  // $( "input" ).remove();
  
  var btn3 = new Button({
    x: 400,
    y: 500,
    label: "Next level",
    onClick: function() {
      if (patten.length === 0) {
        return;
      }
          
      patten[0]();
      stroke(0, 0, 0);
    
    }
});
  
  var btn4 = new Button({
    x: 50,
    y: 500,
    label: "Menu",
    onClick: function() {
      background(255, 0, 0);
    
    }
});

btn3.draw();
btn4.draw();

mouseClicked = function() {
   btn3.handleMouseClick();
  btn4.handleMouseClick();
};
  

};







