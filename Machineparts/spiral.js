function Spiral( size , thickness, darkcolor, lightcolor ) {
  this.size = size;
  this.pgspiral = createGraphics( this.size, this.size);
  this.center = createVector(this.size/2,this.size/2);
  this.thickness = thickness;
  this.lightcolor = lightcolor;
  this.darkcolor = darkcolor;
  
  this.gear;
  this.contour = PI * this.size;
  this.border = (this.contour / ( this.spokes * 2)) /2; 
  this.connector;
  this.rot = 0;
  this.axe;
  this.create();
}
Spiral.prototype.create = function(){
  
  style.pg(this.pgspiral, pal.colors[0], pal.colors[3], 1);
  this.pgspiral.ellipse(this.center.x, this.center.y, this.size, this.size);
  
  this.gear = new Gear( this.size/2, 5,  pal.colors[9], 20);
  this.connector = new Connector(this.center, 30, 1, true);
  
}

Spiral.prototype.connectTo = function(pos, i ,isconnected, connecttype, connectsize, angle){
  
  this.axe = pos.copy();   
  this.center = createVector(this.size/2, this.size/2)   // center is relative
  this.angle = angle;
   
  this.pgspiral.imageMode(CENTER);
  this.pgspiral.image(this.gear.imggear, this.center.x, this.center.y);


  this.connector.connected = isconnected;
  this.connector.type = connecttype;
  this.connector.size = connectsize;
  imageMode(CENTER);
  this.connector.draw(this.pgwheel);
    
}
Spiral.prototype.update = function(pos, speed){
  this.axe = pos.copy();
  this.connectTo(pos, 0, true, 2, 20, 0);
  this.rot += speed;
}
Spiral.prototype.draw = function(){
  //this.pgwheel.background(0);
  
  push();
    translate(this.axe.x, this.axe.y);
    rotate(this.angle + this.rot);
    imageMode(CENTER);
    image(this.pgspiral, 0,0);
  pop();
  
  
}