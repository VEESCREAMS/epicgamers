var p= function () {
    scene = 6;
    var x = 200;
    var y = 750;
    input = createInput();
    input.position(x, y + 150);
    
    
    button = createButton('submit');
    button.position(input.x + input.width, y + 150);
    button.mousePressed(greet);

    greeting = createElement('h6', 'what is your name?');
    greeting.position(x, y);

    textAlign(CENTER);
    textSize(50);
  

};
  
function greet() {
  const name = input.value();
  greeting.html('hello ' + name + '!');
  input.value('');
  
  if (name === 'hadi') {
    background(255, 0, 0);
  }

}  
  

