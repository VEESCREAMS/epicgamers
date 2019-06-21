//defining answering box for addition game
var pp = function() {
  //defining vraiables for position for input box for addition levels
  var o = 900;
  var t = 630;

  //defining input button and its position
  input = createInput();
  input.position(o, t);

  //creating the input box label
  ans = createElement('h3', 'Answer:');
  ans.position(o + 60, t - 65);

  //creaing the submit button
  button = createButton('submit');
  button.position(input.x + input.width, t);
  button.mousePressed(greet);
};
