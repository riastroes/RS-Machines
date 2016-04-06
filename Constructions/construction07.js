function Construction07(img, size, paintcolor, angle) {

  this.img = img;
  this.img.resize(size, size);
  this.squirt = loadImage("images/squirt.svg");
  this.squirton = loadImage("images/squirton.svg");
  this.on = false;
  this.size = size;
  
  
  this.angle = angle;
  this.rot =0;
  this.axe;
  //connectors
  this.connecttype = 2; //potnagels, schroeven, bouten
  this.connectsize = 10;

  //parts
  this.plate;
  this.handle;

  this.platetype = 2; //1=flat, 2=ridge
  this.fillcolor = pal.colors[2];
  
  this.create();
}
Construction07.prototype.create = function() {
  //Rod( len, thickness, lightcolor, darkcolor, angle)
  
  this.plate = new Plate(this.size,20, 2, pal.colors[2], -PI/2);
  this.handle = new Rod(this.size/10*8, 5, pal.colors[7], pal.colors[5], 3.3);
  
  this.spiral = new Spiral(this.size,  5, pal.colors[7], pal.colors[5])
  
  this.plate.showConnectors(true,2,10);

}

Construction07.prototype.update = function(pos, rot) {
  var isconnected = true;
  this.rot += rot;
  this.axe = pos.copy();
  this.plate.connectTo(this.axe, 1, true, 2, 10, 0);
  
  this.spiral.connectTo(this.plate.getPos(0), 1, true, 2, 10, 0);
  this.handle.connectTo(this.plate.getPos(2), 1, true, 2, 10, 0);
}
Construction07.prototype.draw = function() {

  this.handle.draw();
  var pos = this.handle.getPos(2);
  style.set(pal.colors[6], pal.colors[2],1);
  ellipse(pos.x, pos.y, 10,10);
  
  this.plate.draw();
  pos = this.plate.getPos(2);
  imageMode(CENTER);

  push();
  translate(pos.x, pos.y);
  rotate(this.angle + this.rot);
  
  if(this.on){
    image(this.squirton, 0, 0);
  }
  else{
    image(this.squirt, 0, 0);
  }
  pop();



};