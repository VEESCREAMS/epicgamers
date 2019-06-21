// varaible for time
var cc = 0;

//variable to represent x position for three star images in end scene
var aa = 0;

//variable for animation in end scene
var xx = 1;

//variable for Ending Text "x" value
var iii = 0;
//first question
var scene = 0;

class Jitter {
  constructor() {
    //location for x and y for all circles. For each pair, the first value is for "x", the second value is for "y"
    this.x = 255;
    this.y = 215;

    //size for first circle
    this.d = 60
    this.h = 60;

    //size for second circle
    this.i = 90;
    this.e = 60;

    //size for third circle
    this.a = 60;
    this.ii = 60;

    //size for fourth circle
    this.m = 90;
    this.g = 60;

    //size for first circle to choose right answer
    this.ott = 90;
    this.ot = 60;

    //size for second circle to choose right answer
    this.had = 60;
    this.haf = 60;

    //defining texts for the options
    this.o = "a";
    this.t = "b";

    //defining variable for speed of movements of buttons
    this.speed = 1;

    //defining scene
    this.scene = 1;


  }

  move() {
    // making the levels move
    this.y += random(-this.speed, this.speed);
  }

  update() {
    //defining scene once more to update it
    var scene = this.scene;

    //checking answer for first question
    if (this.scene === 1 && key === 'b') {
      this.scene = 2;
      this.d = 60
      this.h = 60;

      this.i = 90;
      this.e = 90;

      this.a = 90;
      this.ii = 90;

      this.m = 60;
      this.g = 60;

      this.ott = 90;
      this.ot = 90;

      this.had = 60;
      this.haf = 60;
    }
    //checking answer for second question
    else if (scene === 2 && key === 'a') {
      this.scene = 3;
      this.d = 60
      this.h = 60;

      this.i = 90;
      this.e = 60;

      this.a = 60;
      this.ii = 60;

      this.m = 60;
      this.g = 60;

      this.ott = 60;
      this.ot = 60;

      this.had = 90;
      this.haf = 60;

      this.o = "b";
      this.t = "c";
    }
    //checking answer for third question
    else if (this.scene === 3 && key === 'c') {
      this.scene = 4;
      this.d = 60
      this.h = 60;

      this.i = 90;
      this.e = 90;

      this.a = 90;
      this.ii = 90;

      this.m = 90;
      this.g = 90;

      this.ott = 90;
      this.ot = 90;

      this.had = 60;
      this.haf = 60;

      this.o = "d";
      this.t = "e";
    }
    //checking answer for fourth question
    else if (this.scene === 4 && key === 'e') {
      this.scene = 5;
      this.d = 70
      this.h = 70;

      this.i = 80;
      this.e = 90;

      this.a = 80;
      this.ii = 90;

      this.m = 70;
      this.g = 70;

      this.ott = 80;
      this.ot = 90;

      this.had = 70;
      this.haf = 70;

      this.o = "y";
      this.t = "z";
    }
    //checking answer for fifth question
    else if (this.scene === 5 && key === 'y') {
      this.scene = 6;
      this.d = 90
      this.h = 60;

      this.i = 90;
      this.e = 60;

      this.a = 90;
      this.ii = 90;

      this.m = 90;
      this.g = 90;

      this.ott = 90;
      this.ot = 60;

      this.had = 90;
      this.haf = 90;
      this.o = "f";
      this.t = "g";
    }
    //checking answer for sixth question
    else if (key === 'f' && this.scene === 6) {
      //variable that stops clock
      currentscene = 2;

      //changes background of the canvas
      background(0, 179, 179);

      //background color change of the html and the body
      $("body").css("background-color", "rgb(0, 179, 179");
      $("html").css("background-color", "rgb(0, 179, 179");

      //condition if the time is less than 120 seconds (2 minutes)
      if (currentscene === 2 && cc < 120) {
        image(c, aa, height / 4, c.width / 6, c.height / 6);
        image(c, aa + 300, height / 4, c.width / 6, c.height / 6);
        image(c, aa + 600, height / 4, c.width / 6, c.height / 6);
      }
      //condition if the time is less than 180 seconds (3 minutes) but more than 120 seconds
      else if (currentscene === 2 && cc < 180 && cc > 120 && currentscene === 2) {
        image(c, aa, height / 4, c.width / 6, c.height / 6);
        image(c, aa + 600, height / 4, c.width / 6, c.height / 6);
      }
      //condition if the final time is more than 180 seconds
      else if (currentscene === 2 && cc >= 180) {
        image(c, aa + 300, height / 4, c.width / 6, c.height / 6);
      }

      //array of colors used for the ending text
      var colors = [color(168, 9, 9), color(171, 101, 101), color(54, 90, 156), color(198, 201, 24), color(166, 11, 209), color(116, 16, 166), color(19, 189, 175), color(168, 9, 9), color(171, 101, 101), color(54, 90, 156)];
      //Final Time
      textSize(50);
      text(cc + " Seconds", 100, 80);

      //Removing features
      $("h5").text("");
      delete btn1.x;

      //Ending Text
      textSize(20);
      fill(colors[iii]);
      xx++;
      if (xx === 800) {
        xx = 0;
        iii++;
        if (iii === 9) {
          iii = 0;
        }
      }
      text("Thank You for Playing!!", xx, 600);



    }



  }



  display() {
    var scene = this.scene;
    //activates timer 
    currentscene = 1;

    background(m);

    //creating line to show missing shape
    stroke(0, 0, 0);
    strokeWeight(5);
    line(this.x + 320, this.y + 25, this.x + 420, this.y + 25);

    noStroke();

    //showing texts to show which keys can be pressed in each level
    fill(61, 61, 41);
    textSize(20);
    text(this.o, this.x + 50, this.y + 260);

    text(this.t, this.x + 200, this.y + 260);


    //drawing circles
    fill(207, 54, 21);

    //drawing first circle
    ellipse(this.x - 50, this.y, this.d, this.h);
    //drawing second circle
    ellipse(this.x + 50, this.y, this.i, this.e);
    //drawing third circle
    ellipse(this.x + 150, this.y, this.a, this.ii);
    ellipse(this.x + 250, this.y, this.m, this.g);
    //drawing fourth circle
    ellipse(this.x + 50, this.y + 200, this.ott, this.ot);
    //drawing fifth circle
    ellipse(this.x + 200, this.y + 200, this.had, this.haf);

  }

}
