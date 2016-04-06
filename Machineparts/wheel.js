function Wheel( size, tiresize ) {
  this.size = size;
  this.pgwheel = createGraphics( this.size, this.size);
  this.center = createVector(this.size/2,this.size/2);
  this.tiresize = tiresize;
  this.gear;
  this.contour = PI * this.size;
  this.border = (this.contour / ( this.spokes * 2)) /2; 
  this.connector;
  this.rot = 0;
  this.axe;
  this.create();
}
Wheel.prototype.create = function(){
  
  this.connector = new Connector(this.center, 10, 1, true);
  style.pg(this.pgwheel, false, pal.colors[0], 1);
  this.pgwheel.ellipse(this.center.x, this.center.y, this.size, this.size);
  style.pg(this.pgwheel, pal.colors[0], pal.colors[3], 1);
  this.pgwheel.ellipse(this.center.x, this.center.y, (this.size - this.tiresize), (this.size-this.tiresize));
  
  this.gear = new Gear( this.size - this.tiresize, 5,  pal.colors[9], 20);
  
  
}

Wheel.prototype.connectTo = function(pos, i ,isconnected, connecttype, connectsize, angle){
  
  this.axe = pos.copy();   
  this.center = createVector(this.size/2, this.size/2)   // center is relative
  this.angle = angle;
   
  this.pgwheel.imageMode(CENTER);
  this.pgwheel.image(this.gear.imggear, this.center.x, this.center.y);


  this.connector.connected = isconnected;
  this.connector.type = connecttype;
  this.connector.size = connectsize;
  imageMode(CENTER);
  this.connector.draw(this.pgwheel);
    
}
Wheel.prototype.update = function(pos, speed){
  this.axe = pos.copy();
  this.connectTo(pos, 0, true, 2, 20, 0);
  this.rot += speed;
}
Wheel.prototype.draw = function(){
  //this.pgwheel.background(0);
  
  push();
    translate(this.axe.x, this.axe.y);
    rotate(this.angle + this.rot);
    imageMode(CENTER);
    image(this.pgwheel, 0,0);
  pop();
  
  
}