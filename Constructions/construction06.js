function Construction06(img, rodlength, imgwidth, imgheight, platetype, platecolor, angle) {

  this.img = img;
  this.img.resize(imgwidth, imgheight);
  this.plow = loadImage("images/plow.svg");

  this.rodlength = rodlength;
  this.angle = angle;
  this.rot =0;
  this.axe;
  //connectors
  this.connecttype = 2; //potnagels, schroeven, bouten
  this.connectsize = 10;

  //plates
  this.plates = [];

  this.platetype = platetype; //1=flat, 2=ridge
  this.fillcolor = platecolor;
  this.full = false;
  this.create();
}
Construction06.prototype.create = function() {
  //Rod( len, thickness, lightcolor, darkcolor, angle)
  this.rod = new Rod(this.rodlength, 5, pal.colors[7], pal.colors[5], this.angle);
  
  //this.plates[0] = new Plate(this.img.height + 20, 10, this.platetype, this.fillcolor, (-PI / 2) + this.angle);
  //this.plates[1] = new Plate(this.img.width, 10, this.platetype, this.fillcolor, this.angle);
  //this.rod.showConnectors(false,2,10);

}

Construction06.prototype.update = function(pos, rot) {
  var isconnected = true;
  this.rot += rot;
  this.axe = pos.copy();
  this.rod.connectTo(this.axe, 1, true, 2, 10, rot);

  //this.plates[0].connectTo(this.rod.getPos(2), 0, isconnected, this.connecttype, this.connectsize, this.rot);
  //this.plates[1].connectTo(this.plates[0].getPos(1), 1, isconnected, this.connecttype, this.connectsize, this.rot);
 
}
Construction06.prototype.draw = function() {

  this.rod.draw();
  var pos = this.rod.getPos(2);
  imageMode(CORNER);

    push();
    translate(pos.x, pos.y);
    rotate(this.angle + this.rot);
    if (this.full) {
    
    image(this.img, 0, -10);
    }
    fill(pal.colors[8]);
    image(this.plow, 0, 0);
    pop();



};