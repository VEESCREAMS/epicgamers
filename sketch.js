ar cs = function(){
  background(220, 20, 60);
  textSize(20)
    text("Congrats! You have passed the Town!", 120, 140);
  text("After a long journey through it! You are now headed towards", 30, 180);
    text("[NEXT BACKGROUND], and you hope you'll have an easy time", 20, 220);
  text("there and find what you came this way for.", 100, 260);
  strokeWeight(10);
    stroke(255, 144, 33);
      line(0, 350, 800, 300);
  
    strokeWeight(10);
    stroke(255, 144, 33);
      line(0, 400, 800, 350);
};



//function setup
function setup() {
  createCanvas(600, 600);

  sone.draw();
  // scenes[0]();
 
  
}

