var s = function(config) {
    
    this.color = config.color || color(207, 85, 85);
    
    this.label = config.label || "Click";
   
};

s.prototype.draw = function() {
    background(this.color);
    fill(255, 255, 255)
    textSize(30);
    text(this.label, 250, 100);
  
}
