function Gear02(size,  sales,  salessize, acolor, connectsize){
  this.size = size;
  this.pggear = createGraphics(this.size, this.size);
  this.center = createVector(this.size/2, this.size/2);
  
  this.sales = sales;
  this.salessize = salessize;
  this.fillcolor = acolor;
  this.axe;
  this.angle = 0;
  this.rot = 0;
  this.connectors = [];
  this.connectsize = connectsize;
  this.create();
}
Gear02.prototype.create = function(){
  
  this.connectors[0] = new Connector(this.center, this.connectsize, 1, true);
  for(var i = 1; i <= this.sales; i += 1){
    var pos = posOnCircle(this.center, (this.size/2) - (this.salessize/2), this.sales, i + 0.5);
    this.connectors[i] = new Connector(pos, this.connectsize, 1, true);
  }
  var outer = [];
  var inner = [];
  
  for(var i = 0; i < this.sales; i += 1 ){
    outer[i] = posOnCircle(this.center, this.size/2, this.sales, i);
    inner[i] = posOnCircle(this.center, (this.size/2) - this.salessize, this.sales, i +0.5);
  }
  
  style.pg(this.pggear, pal.colors[0], this.fillcolor);
  this.pggear.beginShape();
    for(var i = 0; i < this.sales; i += 1 ){
      this.pggear.vertex(outer[i].x, outer[i].y);
      this.pggear.vertex(inner[i].x, inner[i].y);
    }
  this.pggear.endShape(CLOSE);
  
}
Gear02.prototype.connectTo = function(pos, i , isconnected, connecttype, connectsize, angle){
  
  this.axe = pos.copy();   
  this.center = createVector(this.size/2, this.size/2)   // center is relative
  this.v = this.connectors[i].v.copy();
  this.center.sub(this.v);
  
  this.angle = angle;
  //waar zit het centrum?
  // this.center = this.axe.copy();
  // var tocenter = this.connectors[i].v.copy();
  // tocenter.rotate(this.angle + this.rot);
  // this.center.add(tocenter);
  
  
   
  this.connectors[i].connected = isconnected;
  this.connectors[i].type = connecttype;
  this.connectors[i].size = connectsize;
  imageMode(CENTER);
  this.connectors[i].draw(this.pggear);
    
}
Gear02.prototype.update = function(pos, speed){
  this.axe = pos.copy();
  this.connectTo(pos, 0, true, 2, 20, 0);
  this.rot += speed;
}
Gear02.prototype.draw = function(){
  push();
    translate(this.axe.x, this.axe.y);
    rotate(this.angle + this.rot);
    imageMode(CENTER);
    image(this.pggear, 0,0);
  pop();
  
}
