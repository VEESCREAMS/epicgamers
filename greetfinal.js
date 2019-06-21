//function that checks answers for addition levels
function greet() {
  const name = input.value();
  input.value('');

  //for each question, not including the transitions scene, the "x" value for button value is restated and the victory scene is called

  //question 1
  if (scene === 10 && name === '9') {
    btn6.x = 600;
    vic();
    //question 2
  } else if (scene === 11 && name === '35') {
    btn6.x = 600;
    vic();
    //question 3
  } else if (scene === 12 && name === '14') {
    btn6.x = 600;
    vic();
    //question 4
  } else if (scene === 13 && name === '11') {
    btn6.x = 600;
    vic();
    //question 5
  } else if (scene === 14 && name === '28') {
    btn6.x = 600;
    vic();
    //question 6
  } else if (scene === 15 && name === '18') {
    btn6.x = 600;
    vic();
    //question 7
  } else if (scene === 16 && name === '313') {
    btn6.x = 600;
    vic();
    //question 8
  } else if (scene === 17 && name === '208') {
    btn6.x = 600;
    vic();
    //Transition scene
  } else if (scene === 18 && name === 'Next') {
    //switching to pattern levels


    sceneee = 4;
    $("button").remove();
    $("input").remove();

    //removing all html texts
    $("h2").text("");
    $("h3").text("");
    //changing html background colors for html for pattern levels
    $("body").css("background-color", "rgb(255, 71, 26");
    $("html").css("background-color", "rgb(255, 71, 26");

    //creating html text to explain instructions for pattern levels
    gree = createElement('h5', 'Solve the Problem and Press the Right Letter');
    gree.position(1000, 0);

  }
}
