function Screenshots() {

  this.shots = [];
}
Screenshots.prototype.click = function(nr){
  var shot = new Shot(nr);
  shot.click();
  append(this.shots, shot);
  return shot;
}
  

function Shot(nr){
  this.nr = nr;
  this.img = createImage(width,height);
  
}
Shot.prototype.click = function(){
  loadPixels();
  this.img.loadPixels();
  for(var i = 0; i < pixels.length; i += 1){
    this.img.pixels[i] = pixels[i];
  }
  this.img.updatePixels();
}