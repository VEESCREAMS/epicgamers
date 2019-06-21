//variable to show  width of image in the instructions scene
var k = 0;
//variable to show  height of image in the instructions scene
var jj = 0;

function draw() {
  //defining random functions for the color of the face in vixtory.js
  sx = random(0, 255);
  sy = random(0, 255);
  sz = random(0, 255);
  //draw button one
  btn1.draw();

  if (sceneee === 0) {
    //if mouse is pressend during opening scene, print hello
    if (mouseIsPressed) {
      textSize(50);
      fill(mouseY, height, height);
      text("Hello", mouseX, mouseY + 100);
    }
    //if r is clicked, circles will appear
    if (key === 'r') {
      variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
      //if q is clicked, cancel circle effect
    } else if (key === 'q') {

    }
  }

  //image will be formed during the instructions scene
  if (sceneee === 2) {

    noStroke();

    //drawn to make animation look nicer
    fill(255, 0, 0);
    rect(0, 100, 220, 600);

    //increasing the width and height of the image
    k++;
    jj++;
    image(bu, 0, 250, k, jj);

    //if the height and the width of the image become equal or greater than 250, jj and k will return to 0
    if (k >= 250 && jj >= 250) {
      k = 0;
      jj = 0;
    }
  }

  // if verify button is pressed, create clock in seconds
  if (sceneee === 3 && currentscene === 1 || sceneee === 4 && currentscene === 1) {
    fill(255, 255, 255);
    rect(0, 0, 235, 50);
    // rect(40, 0, 218, 50);
    fill(0, 0, 0);
    textSize(20);
    text(cc, 16, 25);
    cc += 0.019;

  } else {

  }


  //if scenee is greater than 3 and Next is typed at the end of the addition levels, switch to pattern levels 
  if (sceneee > 3 && sceneee < 5) {

    bug.move();
    bug.display();
    bug.update();
    btn1.x = 50;
    btn1.y = 500;
    btn1.label = "Menu";
    btn1.draw();


  }

}
